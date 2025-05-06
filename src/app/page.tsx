"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import Experiences from "@/components/Experiences";

export default function Home() {
  const [activeTab, setActiveTab] = useState("apropos");

  const { ref: aproposRef, inView: aproposInView } = useInView({ threshold: 0.6 });
  const { ref: experienceRef, inView: experienceInView } = useInView({ threshold: 0.6 });
  const { ref: projetsRef, inView: projetsInView } = useInView({ threshold: 0.6 });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (experienceInView) setActiveTab("experience");
    else if (aproposInView) setActiveTab("apropos");
    else if (projetsInView) setActiveTab("projets");
  }, [aproposInView, experienceInView, projetsInView]);

  const tabs = [
    { id: "apropos", label: "À PROPOS", href: "#apropos" },
    { id: "experience", label: "EXPÉRIENCE", href: "#experiences" },
    { id: "projets", label: "PROJETS", href: "#projets", disabled: true },
  ];

  return (
    <div className="relative bg-[#060F1A] text-slate-200 tracking-tight scroll-smooth min-h-screen overflow-hidden">
      {/* Effet radial sur la souris */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      <div className="mt-[150px] px-6 md:px-16 lg:px-[300px] grid grid-cols-1 md:grid-cols-2 gap-12 font-bold">
        {/* Colonne gauche */}
        <div className="sticky top-[150px] max-w-full md:max-w-[650px] space-y-8">
          <div>
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold">Maximilien Rouget</h1>
            <h2 className="text-[clamp(0.7rem,3vw,1.5rem)] font-bold">Développeur Full Stack</h2>
            <p className="text-[clamp(0.5rem,2vw,1.125rem)] font-thin">
              Je conçois des expériences numériques accessibles <br /> et parfaitement calibrées pour le web.
            </p>
          </div>

          {/* Navigation par onglets */}
          <div className="space-y-4">
            {tabs.map(({ id, label, href, disabled }) => (
              <a
                key={id}
                href={href}
                className={`flex items-center space-x-2 group ${
                  disabled ? "cursor-not-allowed text-gray-500" : "cursor-pointer"
                } ${activeTab === id ? "text-white" : "text-gray-400 group-hover:text-gray-200"}`}
                style={disabled ? { pointerEvents: "none" } : {}}
              >
                <span
                  className={`h-px transition-all duration-300 ${
                    activeTab === id ? "w-10 bg-white" : "w-6 bg-gray-500 group-hover:bg-gray-300"
                  }`}
                ></span>
                <span
                  className={`uppercase transition-all duration-300 tracking-wide ${
                    activeTab === id ? "text-white" : "text-gray-400 text-sm group-hover:text-gray-200"
                  }`}
                >
                  {label}
                </span>
              </a>
            ))}
          </div>

          {/* Réseaux sociaux */}
          <div className="flex space-x-6 pt-6">
            <a href="https://www.linkedin.com/in/maximilien-rouget-502ba2171/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
            <a href="https://www.instagram.com/maximiiliien/" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
            <a href="https://github.com/mrouget53" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
          </div>
        </div>

        {/* Colonne droite - contenu scrollable */}
        <div className="overflow-y-auto h-[calc(100vh-150px)] pr-2 md:pr-6 scroll-smooth scrollbar-thin">
          <section ref={aproposRef} id="apropos" className="space-y-4 text-[clamp(0.8rem,1vw,1.3rem)] font-thin">
            <p>
              Développeur full stack passionné, je conçois des interfaces web intuitives et développe des solutions robustes pour automatiser les tâches répétitives.
            </p>
            <p>
              Actuellement développeur et administrateur, je conçois des outils web pour automatiser les processus métier, tout en assurant l’intégration, la gestion des bases de données et le support technique.
            </p>
            <p>
              Je souhaite me consacrer pleinement au développement, relever de nouveaux défis techniques et contribuer à des projets innovants.
            </p>
            <p>
              En dehors du travail, j’aime passer du temps avec mes enfants, jouer du piano, lire ou voyager.
            </p>
          </section>

          {/* Section expériences */}
          <section ref={experienceRef} id="experiences" className="mt-12">
            <Experiences />
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 ml-6 inline-flex items-center text-base font-medium text-slate-200 hover:text-green-400"
              aria-label="Voir mon CV (ouvre dans un nouvel onglet)"
            >
              Voir mon CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </section>

          {/* Section projets (placeholder désactivé) */}
          <section ref={projetsRef} id="projets" className="mt-12" />

          {/* Footer */}
          <footer className="mt-12 text-sm font-thin">
            <p>
              Ce site a été créé de zéro, en prenant le site de Brittany Chiang comme modèle d'entraînement. <br />
              Conçu sur Figma pour le design, codé avec VS Code, construit avec Next.js et Tailwind CSS, déployé sur Vercel.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
