import React, { useState } from 'react';

export default function Experiences() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const experiences = [
    {
      date: 'Depuis juin 2022',
      title: 'Développeur Full Stack – Administrateur Systèmes d’Interopérabilité & Bases de Données ― CHIC Alençon Mamers',
      description:
        'Développement d’applications et scripts d’intégration (PHP, Python, JavaScript, Java, Batch, PowerShell). Interconnexion fluide et sécurisée des systèmes d’information. Implémentation et gestion d’API, optimisation BDD, support N2, documentation technique.',
      tags: ['PHP', 'Python', 'JavaScript', 'Java', 'Batch', 'PowerShell', 'Next.js', 'React'],
      link: 'https://www.ch-alencon.fr/',
    },
    {
      date: 'Juin 2021 - Mai 2022',
      title: 'Technicien de Déploiement & Coordinateur ― SPIE Infoservices - CHU Rennes',
      description:
        'Coordination d’équipe, suivi de parc informatique, préparation logistique (stocks, manutention), déploiement de matériel informatique, support et résolution d’incidents techniques.',
      tags: ['Support', 'Déploiement', 'Coordination'],
      link: 'https://www.spie.fr/fr/nos-filiales/spie-ics',
    },
    {
      date: 'Décembre 2018',
      title: 'Stage Développeur – API Google Workspace ― Groupe Queguiner',
      description:
        'Outil de gestion automatisée des facturations via Google Sheets et API Workspace. Automatisation des tâches répétitives pour augmenter la productivité de l’équipe commerciale.',
      tags: ['Google Sheets', 'Google Workspace', 'JavaScript'],
      link: 'https://www.groupe-queguiner.bzh/',
    },
    {
      date: 'Mai 2018',
      title: "Stage Technicien Informatique ― Lycée Amiral Ronarc'h Brest",
      description:
        'Support technique sur le parc informatique, gestion des incidents, administration de domaine (comptes utilisateurs), maintenance réseau et matérielle.',
      tags: ['Support', 'Maintenance', 'Réseau'],
      link: 'https://www.lycee-ronarch-brest.ac-rennes.fr/',
    },
  ];

  return (
    <div className="mt-8">
      {experiences.map((exp, index) => (
        <div
        key={index}
        onClick={() => window.open(exp.link, '_blank')}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 hover:shadow-md hover:border hover:border-gray-500 border border-transparent group ${
          hoveredIndex !== null && hoveredIndex !== index ? 'opacity-30' : 'opacity-100'
        }`}
      >
          <table className="min-w-full text-white">
            <tbody>
              <tr>
                <td className="px-4 py-2 w-32 text-sm font-light">{exp.date}</td>
                <td className="px-4 py-2">
                <a
  href={exp.link}
  target="_blank"
  rel="noopener noreferrer"
  className="font-semibold transition-colors duration-300 group-hover:text-green-400 hover:text-green-300"
>
  {exp.title}
</a>
                  <p className="mt-2 text-sm font-light">{exp.description}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {exp.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="bg-green-400 text-black text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
