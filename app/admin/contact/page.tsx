"use client"

import React, { useEffect, useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

interface Contact {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  service_interest: string;
  message: string;
  id?: string;
  created_at?: string;
}

export default function AdminContactPage() {
  // Authentication state
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  // Contact data state
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [checkingAuth, setCheckingAuth] = useState(true);
  useEffect(() => {
    const stored = sessionStorage.getItem("adminAuth");
    if (stored === "true") {
      setIsLoggedIn(true);
    } else {
      router.replace("/admin/auth/login");
    }
    setCheckingAuth(false);
  }, []);

  // Remove previous useEffect that only checked session storage (lines 30-37)

  // Logout handler
  const handleLogout = () => {
    sessionStorage.removeItem("adminAuth");
    setIsLoggedIn(false);
    router.replace("/admin/auth/login");
  };

  // Fetch contacts only after authentication
  useEffect(() => {
    if (!isLoggedIn) return;
    const fetchContacts = async () => {
      try {
        const response = await axios.get(
          "https://hisolu-backend.vercel.app/api/contact"
        );
        setContacts(response.data);
      } catch (err: any) {
        console.error(err);
        setError(err.message ?? "Failed to load contacts");
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, [isLoggedIn]);

  // Search filter (all fields except message, plus created_at)
  const filteredContacts = useMemo(() => {
    if (!searchTerm) return contacts;
    const term = searchTerm.toLowerCase();
    return contacts.filter((c) => {
      const matchesBasic =
        c.first_name.toLowerCase().includes(term) ||
        c.last_name.toLowerCase().includes(term) ||
        c.email.toLowerCase().includes(term) ||
        (c.phone && c.phone.toLowerCase().includes(term)) ||
        c.service_interest.toLowerCase().includes(term);
      const matchesDate =
        c.created_at &&
        new Date(c.created_at).toLocaleDateString().toLowerCase().includes(term);
      return matchesBasic || matchesDate;
    });
  }, [searchTerm, contacts]);

  // Delete a contact by ID
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`https://hisolu-backend.vercel.app/api/contact/${id}`);
      setContacts((prev) => prev.filter((c) => c.id !== id));
    } catch (err: any) {
      console.error('Delete failed', err);
      setError(err.message ?? 'Failed to delete contact');
    }
  };

  // Loading / error UI
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-400">Loading contacts…</p>
      </div>
    );
  }

  // Redirect to login page if not authenticated


  if (!isLoggedIn) {
    return null; // Render nothing while redirecting
  }

  if (error) {
    return (
      <div className="p-8">
        <p className="text-red-400">Error: {error}</p>
      </div>
    );
  }

  return (
    <section className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6">
        Contact Submissions
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="ml-4 bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded-xl transition-colors"
          >
            Logout
          </button>
        )}
      </h1>
      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search contacts (name, email, phone, service, or date)…"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors"
        />
      </div>
      <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/5">
        <table className="w-full text-sm text-left text-gray-300">
          <thead className="bg-gray-800/50">
            <tr>
              <th className="px-4 py-2">Full Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Service</th>
              <th className="px-4 py-2">Message</th>
              <th className="px-4 py-2">Submitted At</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map((c, idx) => (
              <tr
                key={c.id ?? idx}
                className={idx % 2 === 0 ? "bg-white/5" : "bg-white/10"}
              >
                <td className="px-4 py-2">{c.first_name} {c.last_name}</td>
                <td className="px-4 py-2">
                  <a href={`mailto:${c.email}`} className="hover:underline">
                    {c.email}
                  </a>
                </td>
                <td className="px-4 py-2">{c.phone ?? "-"}</td>
                <td className="px-4 py-2">{c.service_interest}</td>
                <td className="px-4 py-2 line-clamp-2 max-w-xs">{c.message}</td>
                <td className="px-4 py-2">
                  {c.created_at ? new Date(c.created_at).toLocaleDateString() : "-"}
                </td>
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => handleDelete(c.id ?? "")}
                    className="text-sm text-red-400 hover:text-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
