"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "gshbm2026") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Nom d'utilisateur ou mot de passe incorrect");
    }
  };

  if (isLoggedIn) {
    return (
      <main className="min-h-screen bg-slate-100 p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-sky-700 mb-8">
            🏫 Tableau de bord G.S.H.B.M
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <Link
              href="    📢 Gérer les annonces
            </Link>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              📷 Gérer les photos
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              ⚽ Gérer les activités sportives
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              🚌 Transport scolaire
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              📚 Bibliothèque
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              💻 Salle informatique
            </div>

          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-sky-700 mb-2">
          G.S.H.B.M
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Administration
        </p>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded-xl p-3"
          />

          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-xl p-3"
          />

          {error && (
            <p className="text-red-600 text-sm">
              {error}
            </p>
          )}

          <button
            onClick={handleLogin}
            className="w-full bg-sky-700 text-white py-3 rounded-xl font-bold"
          >
            Se connecter
          </button>

        </div>
      </div>
    </main>
  );
}