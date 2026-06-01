"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "009900") {
      sessionStorage.setItem("adminAuth", "true");
      router.replace("/admin/contact");
    } else {
      setLoginError("Invalid username or password.");
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-100">
      <form onSubmit={handleLogin} className="p-8 bg-white/5 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
        <label className="block text-sm mb-2" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors"
        />
        <label className="block text-sm mb-2" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors"
        />
        {loginError && (
          <p className="text-red-400 text-sm mb-2">{loginError}</p>
        )}
        <button
          type="submit"
          className="w-full bg-cyan-600 hover:bg-cyan-500 text-white py-2 rounded-xl transition-colors"
        >
          Login
        </button>
      </form>
    </section>
  );
}
