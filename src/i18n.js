import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';


i18n

  // detect user language

  // learn more: https://github.com/i18next/i18next-browser-languageDetector

  .use(LanguageDetector)

  // pass the i18n instance to react-i18next.

  .use(initReactI18next)

  // init i18next

  // for all options read: https://www.i18next.com/overview/configuration-options

  .init({

    debug: true,

    fallbackLng: 'en',

    interpolation: {

      escapeValue: false, // not needed for react as it escapes by default

    },

    resources: {

      en: {

        translation: {

          description: {

            part1: 'Edit <1>src/App.js</1> and save to reload.',

            part2: 'Learn React'
            /*             
            ,
            about: 'About',
            education: 'Education',
            experience: 'Experience',
            industries: 'Industries',
            languages: 'Languages',
            */
           ,
            profile: 'PROFILE',
            skills: 'SKILLS',
            profile1: '•	Accomplished professional with more than 15 years of professional experience in Java technologies',
            profile2: '•	Experience of work in all the SDLC phases',
            profile3: '•	Development, integration and maintenance of Web applications in different industries',
            profile4: '•	Collaboration with international teams in USA, United Kindom, India, Australia, etc.',
            profile5: '•	Languages: French, English, Ukrainian, Russian',
            skill1: '•	Develop, maintain, deploy and support Web applications',
            skill2: '•	Solve complex technical issues',
            skill3: '•	Create and optimize complex PL/SQL stored procedures for Oracle Databases',
            skill4: '•	Design and Implement large Enterprise Web applications using Microservices Architecture and REST APIs',
            skill5: '•	Write Unit and Integration test and Shell Sripts (Bash and KornShell)',
            skill6: '•	Work using Agile approach - Scrums, Code review, Sprint review and planning',
            skill7: '•	Document functional and technical specifications',
            skill8: '•	Create Use Case, Architecturals, Functional and Sequential diagrams',
            skill9: '•	Learn fast new technologies adopted by compagnies',
            skill10: '•	Knowledge transfer and coachin of Junior developers',
            skill11: '•	Provide exceptional service and help to internal and external clients',
            french: 'French',
            english: 'English',
            ukrainian: 'Ukrainian',
            russian:'russian',
            langues: 'Français, Anglais, Ukrainien, Russe.'

          }

        }

      },

      fr: {

        translation: {

          description: {

            part1: 'Éditez <1>src/App.js</1> et sauvez pour recharger.',
            part2: 'Apprenez React'
             /*,
                         about: 'À propos',
            education: 'Éducation',
            experience: 'Expérience',
            industries: 'Industries',
            languages: 'Langues' */
            ,
            profile: 'PROFIL',
            skills: 'CHAMPS DE COMPÉTENCES',
            profile1: '•	Professionnelle confirmée avec expérience de plus de 15 années en technologies Java',
            profile2: '•	Travaille dans tous les étapes de SDLC',
            profile3: '•	Développement, intégration et maintien des application Web pour différentes industries',
            profile4: '•	Collaboration avec des équipes internationales aux États-Unis, Royaume Uni, Inde, etc.',
            profile5: '•	Langues : Français, Anglais, Ukrainien, Russe',
            skill1: '•	Développer, maintenir, déployer et supporter des applications Web',
            skill2: '•	Résoudre des problèmes informatiques complexes',
            skill3: '•	Créer et optimiser des procédures complexes en PL/SQL pour BD Oracle',
            skill4: '•	Design des application avec l’architecture Microservices et APIs REST',
            skill5: '•	Écrire des tests unitaires et intégrés. Écrire des scripts shell (Bash et Korn Shell)',
            skill6: '•	Approche Agile – Scrums, revue de code, revue et planification des nouveaux Sprints',
            skill7: '•	Documenter des spécifications fonctionnelles et techniques',
            skill8: '•	Créer des diagrammes des cas d’usage, d’architecture, fonctionnelles et séquentielles.',
            skill9: '•	Apprendre des nouvelles technologies rapidement',
            skill10: '•	Transférer des connaissances et former des développeurs juniors',
            skill11: '•	Fournir le service exceptionnel aux clients internes et externes',
            french: 'Français',
            english: 'Anglais',
            ukrainian: 'Ukrainien',
            russian:'russe',
            langues: 'Français, Anglais, Ukrainien, Russe.' 

          }

        }

      }

    }

  });


export default i18n;