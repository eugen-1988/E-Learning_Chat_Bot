// /src/pages/UeberUns.jsx
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import {
  FaRocket,
  FaUsers,
  FaCode,
  FaLightbulb,
  FaQuoteLeft,
} from "react-icons/fa";

const UeberUns = () => {
  return (
    <section className="bg-[#f8f9fc] py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Stânga */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold text-dark mb-6">Über uns</h1>
          <h2 className="text-xl font-semibold text-secondary mb-4">
            STARTCODING COMMUNITY
          </h2>
          <p className="text-gray-700 mb-6 text-sm leading-relaxed">
            Wir sind eine junge, dynamische Community, die sich leidenschaftlich
            für digitale Bildung und berufliche Weiterentwicklung einsetzt.
            Unser Ziel? Jeder soll Zugang zu praxisnahen, hochwertigen IT-Kursen
            bekommen – egal ob Anfänger oder Fortgeschrittener.
          </p>

          {/* Vision Statement */}
          <p className="italic text-gray-600 mb-6 text-sm">
            Unsere Vision: Eine Welt, in der jeder die Chance hat, digitale
            Kompetenzen aufzubauen – unabhängig von Herkunft, Alter oder
            Vorwissen.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3 text-sm text-gray-700 mb-6">
            <li className="flex items-center gap-3">
              <FaRocket className="text-primary" />
              Praxisorientierte Online-Kurse für deinen Karrierestart
            </li>
            <li className="flex items-center gap-3">
              <FaUsers className="text-primary" />
              Über 10.000 motivierte Teilnehmer*innen europaweit
            </li>
            <li className="flex items-center gap-3">
              <FaCode className="text-primary" />
              Aktuelle Technologien: von Webentwicklung bis Künstliche
              Intelligenz
            </li>
            <li className="flex items-center gap-3">
              <FaLightbulb className="text-primary" />
              Persönliche Betreuung & 24/7 Support durch echte Menschen
            </li>
          </ul>

          {/* Testimonial */}
          <div className="text-sm italic text-gray-500 border-l-4 border-primary pl-4 mb-6">
            <FaQuoteLeft className="inline text-primary mr-2" />
            „Dank STARTCODING habe ich innerhalb weniger Monate meinen Traumjob
            in der IT gefunden!“ – <strong>Leonie K., Absolventin 2024</strong>
          </div>
        </motion.div>

        {/* Imagine Dreapta */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <img
            src={logo}
            alt="Über uns Illustration"
            className="w-full max-w-md object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default UeberUns;
