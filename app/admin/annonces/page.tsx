"use client";

import { useState } from "react";

export default function AnnoncesPage() {
  const [annonces, setAnnonces] = useState<string[]>([]);
  const [nouvelleAnnonce, setNouvelleAnnonce] = useState("");

  const ajouterAnnonce = () => {
    if (!nouvelleAnnonce.trim()) return;

    setAnnonces([...annonces, nouvelleAnnonce]);
    setNouvelleAnnonce("");
  };

  const supprimerAnnonce = (index: number) => {
    setAnnonces(annonces.filter((_, i) => i !== index));
  };

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-4xl font-bold text-sky-700 mb-8">
        📢 Gestion des annonces
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <input
          type="text"
          placeholder="Nouvelle annonce"
          value={nouvelleAnnonce}
          onChange={(e) => setNouvelleAnnonce(e.target.value)}
          className="border p-3 rounded-xl w-full mb-4"
        />

        <button
          onClick={ajouterAnnonce}
          className="bg-sky-700 text-white px-6 py-3 rounded-xl"
        >
          Ajouter
        </button>
      </div>

      <div className="space-y-4">
        {annonces.map((annonce, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-4 flex justify-between items-center"
          >
            <span>{annonce}</span>

            <button
              onClick={() => supprimerAnnonce(index)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}