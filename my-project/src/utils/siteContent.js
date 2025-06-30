import { courses } from "./courses";

const siteContent = {
  platform: {
    name: "STARTCODING COMMUNITY",
    description:
      "Willkommen bei STARTCODING COMMUNITY – deiner praxisnahen IT-Bildungsplattform für Frontend, Backend, KI und Webdesign.",
    address: "Lange-Feld-Straße 109, 30926 Seelze, Deutschland",
    phone: "+49 123 4567890",
    email: "info@startcoding.de",
    support: "24/7 Support via Telefon oder E-Mail",
    map: "https://www.google.com/maps/embed?pb=...",
    languages: {
      default: "de",
      supported: ["de", "en", "ro", "fr", "es", "ru"],
    },
    courseLanguage: {
      availableLanguages: ["de"],
      note: "Alle Kurse sind derzeit nur auf Deutsch verfügbar.",
    },
  },

  categories: ["Frontend", "Backend", "Webdesign", "KI-Künstliche Intelligenz"],

  certifications: {
    available: true,
    description: "Alle Kurse bieten ein offizielles Abschlusszertifikat.",
  },

  funding: {
    available: true,
    description:
      "Unsere Kurse sind kostenfrei durch Förderung wie z. B. den Bildungsgutschein der Agentur für Arbeit.",
  },

  exams: {
    type: "Abschlussprüfungen am Ende jedes Moduls",
  },

  instructors: [
    {
      name: "Lena Hoffmann",
      topics: [
        "HTML & CSS Grundlagen",
        "Responsive Design mit TailwindCSS",
        "Barrierefreies Webdesign",
      ],
    },
    {
      name: "Maximilian König",
      topics: [
        "JavaScript für Fortgeschrittene",
        "TypeScript für JavaScript-Entwickler",
        "React.js Masterclass",
      ],
    },
    {
      name: "Layla El Mansouri",
      topics: [
        "UX/UI Grundlagen",
        "Webdesign mit Figma",
        "Barrierefreies Webdesign",
      ],
    },
    {
      name: "Arjun Mehra",
      topics: [
        "Authentication mit JWT & OAuth",
        "RESTful APIs mit Express.js",
        "Node.js Einführung",
      ],
    },
    {
      name: "Emir Kaya",
      topics: [
        "Datenbanken mit MongoDB",
        "Machine Learning mit Python",
        "NLP und Sprachverarbeitung",
      ],
    },
    {
      name: "Sophia Richter",
      topics: [
        "DevOps Grundlagen",
        "Git & GitHub professionell nutzen",
        "KI in der Webentwicklung",
      ],
    },
    {
      name: "Tim Becker",
      topics: [
        "Einführung in Künstliche Intelligenz",
        "Deep Learning mit TensorFlow",
        "Computer Vision Grundlagen",
      ],
    },
    {
      name: "Paul Wagner",
      topics: [
        "Vue.js Grundlagen",
        "Mobile App Entwicklung",
        "TypeScript für JavaScript-Entwickler",
      ],
    },
  ],

  courses: courses,
};

export default siteContent;
