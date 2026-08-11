"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(
        now.toLocaleDateString("fr-FR") +
          " | " +
          now.toLocaleTimeString("fr-FR")
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-slate-100">
      {/* Barre supérieure */}
      <div className="bg-sky-800 text-white py-3 px-6 flex justify-between items-center">
<div className="flex items-center gap-4">
  <Image
    src="/Designer.png"
    alt="Logo GSHBM"
    width={200}
    height={200}
  />

<div>
  <h1 className="text-4xl font-extrabold tracking-wider">
    G.S.H.B.M
  </h1>

  <p className="text-sm">
    Groupe Scolaire Hadja Bintou Mara
  </p>
</div>
</div>

        <div className="font-semibold">
          {time}
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-r from-sky-700 to-cyan-500 text-white py-20 px-6 text-center">
        <h2 className="text-6xl font-bold mb-4">
          Excellence • Innovation • Sport
        </h2>

        <p className="text-2xl">
          École située à Moribaya
        </p>
      </section>

      {/* Actualités */}
      <section className="bg-yellow-400 py-4 overflow-hidden">
        <div className="whitespace-nowrap text-lg font-bold">
          📢 Travaux de rénovation en cours •
          📚 Future bibliothèque •
          💻 Future salle informatique •
          ⚽ Développement du pôle sportif •
          🚌 Renforcement du transport scolaire •
        </div>
      </section>

      {/* Statistiques */}
      <section className="max-w-7xl mx-auto py-10 px-6">
        {/* Bannière Réussite */}
<section className="max-w-7xl mx-auto py-8 px-6">
  <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-3xl shadow-xl p-8 text-center">

    <h2 className="text-5xl font-extrabold mb-4">
      🏆 100 % DE RÉUSSITE AU CEE 2026
    </h2>

    <p className="text-xl mb-6">
      Le Groupe Scolaire Hadja Bintou Mara célèbre un taux de réussite exceptionnel au Certificat d'Études Élémentaires 2026.
    </p>

    <a
      href="https://forecariahmedia.com/2026/07/08/cee-2026-le-groupe-scolaire-hadja-bintou-mara-signe-un-parcours-sans-faute-avec-100-de-reussite/?fbclid=IwZnRzaATn6GFwZG9mBWZkaWQWUMRKaf22ieh0iiLls6oHeCSexAGlp2V4dG4DYWVtAjExAHNydGMGYXBwX2lkCjY2Mjg1NjgzNzkAAR6GKIzdAGQCFEkU0A0q6z_ggGPp0THWtEIqw99h38tLSO6BMLreXUNFLDX-dw_aem_ntL7RFvfnWR5APo-qUqS_g"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-white text-yellow-700 font-bold px-6 py-3 rounded-xl"
    >
      Lire l'article complet
    </a>

  </div>
</section>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h3 className="text-5xl font-bold text-sky-700">10</h3>
            <p className="mt-2 font-semibold">Salles de classe</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h3 className="text-5xl font-bold text-sky-700">8h-14h</h3>
            <p className="mt-2 font-semibold">Horaires</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h3 className="text-5xl font-bold text-sky-700">1 km</h3>
            <p className="mt-2 font-semibold">
              De la Route Nationale
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h3 className="text-3xl font-bold text-sky-700">
              3 Niveaux
            </h3>
            <p className="mt-2 font-semibold">
              Maternelle • Primaire • Collège
            </p>
          </div>
        </div>
      </section>

{/* Nos Résultats */}
<section className="max-w-7xl mx-auto py-12 px-6">
  <div className="bg-yellow-100 border-4 border-yellow-500 rounded-3xl p-8 text-center">

    <h2 className="text-5xl font-bold text-yellow-700 mb-4">
      🏆 100 % DE RÉUSSITE AU CEE 2026
    </h2>

    <p className="text-xl">
      Le Groupe Scolaire Hadja Bintou Mara a obtenu un taux de réussite de 100 % au CEE 2026.
    </p>

  </div>
</section>
      {/* Pourquoi choisir */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-4xl font-bold text-center text-sky-800 mb-10">
          Pourquoi choisir G.S.H.B.M ?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-3">
              Excellence Scolaire
            </h3>
            <p>
              Un encadrement pédagogique rigoureux pour la réussite des élèves.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="text-5xl mb-4">⚽</div>
            <h3 className="text-xl font-bold mb-3">
              Développement Sportif
            </h3>
            <p>
              Le sport comme outil d'éducation et de dépassement de soi.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="text-5xl mb-4">💻</div>
            <h3 className="text-xl font-bold mb-3">
              Innovation Numérique
            </h3>
            <p>
              Initiation aux technologies et outils numériques modernes.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="text-5xl mb-4">🚌</div>
            <h3 className="text-xl font-bold mb-3">
              Transport Sécurisé
            </h3>
            <p>
              Transport scolaire assuré par l'établissement.
            </p>
          </div>
        </div>
      </section>

      {/* Pôles */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        ...
</section>

{/* Pourquoi choisir G.S.H.B.M */}
<section>
  ...
</section>

{/* Notre Vision */}
<section>
  ...
</section>

{/* Projet de Modernisation */}
<section>
  ...
</section>

{/* Pôles */}
<section className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-4xl font-bold text-center text-sky-800 mb-10">
          Nos Pôles d'Excellence
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="text-5xl mb-4">⚽</div>
            <h3 className="text-2xl font-bold mb-2">Sport</h3>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="text-5xl mb-4">💻</div>
            <h3 className="text-2xl font-bold mb-2">Numérique</h3>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-2xl font-bold mb-2">Bibliothèque</h3>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="text-5xl mb-4">🎬</div>
            <h3 className="text-2xl font-bold mb-2">Médiathèque</h3>
          </div>
        </div>
      </section>

      <footer className="bg-sky-800 text-white text-center py-6">
        © Groupe Scolaire Hadja Bintou Mara • Moribaya
      </footer>
    </main>
  );
}
``