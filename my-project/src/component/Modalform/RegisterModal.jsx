// components/RegisterModal.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RegisterModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mzzgdqyn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Es gab ein Problem beim Senden des Formulars.");
      }
    } catch (error) {
      console.error("Fehler beim Senden:", error);
      alert("Ein unerwarteter Fehler ist aufgetreten.");
    }
  };

  const kursListe = [
    "HTML & CSS Grundlagen",
    "Responsive Design mit TailwindCSS",
    "UX/UI Grundlagen",
    "Webdesign mit Figma",
    "JavaScript für Fortgeschrittene",
    "React.js Masterclass",
    "Vue.js Grundlagen",
    "TypeScript für JavaScript-Entwickler",
    "Node.js Einführung",
    "Datenbanken mit MongoDB",
    "RESTful APIs mit Express.js",
    "Authentication mit JWT & OAuth",
    "Einführung in Künstliche Intelligenz",
    "Machine Learning mit Python",
    "Deep Learning mit TensorFlow",
    "NLP und Sprachverarbeitung",
    "Computer Vision Grundlagen",
    "DevOps Grundlagen",
    "Git & GitHub professionell nutzen",
    "Barrierefreies Webdesign",
    "KI in der Webentwicklung",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-xl relative px-8 py-10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-6 text-2xl font-bold text-gray-500 hover:text-black"
            >
              ×
            </button>

            <h2 className="text-3xl font-bold mb-6 text-center text-primary">
              Jetzt Anmelden
            </h2>

            {submitted ? (
              <p className="text-green-600 text-center text-lg">
                Vielen Dank! Deine Anmeldung wurde erfolgreich gesendet. <br />
                In Kürze wird sich eine verantwortliche Person mit dir in
                Verbindung setzen.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Basic Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Dein voller Name"
                    required
                    className="border p-2 rounded w-full"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Deine E-Mail"
                    required
                    className="border p-2 rounded w-full"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefonnummer"
                    className="border p-2 rounded w-full"
                  />
                  <input
                    type="text"
                    name="education"
                    placeholder="Höchster Bildungsabschluss"
                    className="border p-2 rounded w-full"
                  />
                </div>

                {/* IT Niveau */}
                <select
                  name="level"
                  required
                  className="w-full border p-2 rounded bg-white text-gray-700"
                >
                  <option value="">Wähle dein IT-Niveau</option>
                  <option value="Anfänger">Anfänger</option>
                  <option value="Mittelstufe">Mittelstufe</option>
                  <option value="Fortgeschritten">Fortgeschritten</option>
                </select>

                {/* Interessensbereiche */}
                <fieldset className="w-full">
                  <legend className="mb-2 font-semibold text-sm text-gray-700">
                    Interessensbereiche (Mehrfachauswahl möglich):
                  </legend>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2 text-sm text-gray-800">
                    {kursListe.map((kurs) => (
                      <label key={kurs} className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          name="interests"
                          value={kurs}
                          className="mt-1"
                        />
                        <span>{kurs}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Weitere Angaben */}
                <input
                  type="text"
                  name="experience"
                  placeholder="IT-Erfahrung (z. B. 1 Jahr Frontend)"
                  className="w-full border p-2 rounded"
                />
                <input
                  type="text"
                  name="availability"
                  placeholder="Wann hast du Zeit? (z. B. abends, Wochenende)"
                  className="w-full border p-2 rounded"
                />
                <textarea
                  name="message"
                  placeholder="Warum möchtest du bei uns lernen?"
                  rows="4"
                  className="w-full border p-2 rounded"
                ></textarea>

                {/* DSGVO */}
                <label className="text-sm text-gray-600 flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="gdpr"
                    required
                    className="mt-1"
                  />
                  Ich stimme der Datenverarbeitung gemäß der
                  Datenschutzerklärung zu.
                </label>

                <button
                  type="submit"
                  className="primary-btn w-full mt-2 text-white font-semibold py-2 rounded bg-primary hover:bg-primary-dark transition"
                >
                  Formular senden
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RegisterModal;
