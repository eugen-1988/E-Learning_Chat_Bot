// /src/pages/UnserTeam.jsx
import { motion } from "framer-motion";
import { assets } from "../assets";

const team = [
  {
    image: assets.dozent1,
    name: "Lena Hoffmann",
    subject:
      "HTML & CSS Grundlagen, Responsive Design mit TailwindCSS, Barrierefreies Webdesign",
  },
  {
    image: assets.dozent2,
    name: "Maximilian König",
    subject:
      "JavaScript für Fortgeschrittene, TypeScript für JavaScript-Entwickler, React.js Masterclass",
  },
  {
    image: assets.dozent3,
    name: "Layla El Mansouri",
    subject: "UX/UI Grundlagen, Webdesign mit Figma, Barrierefreies Webdesign",
  },
  {
    image: assets.dozent4,
    name: "Arjun Mehra",
    subject:
      "Authentication mit JWT & OAuth, RESTful APIs mit Express.js, Node.js Einführung",
  },
  {
    image: assets.dozent5,
    name: "Emir Kaya",
    subject:
      "Datenbanken mit MongoDB, Machine Learning mit Python, NLP und Sprachverarbeitung",
  },
  {
    image: assets.dozent6,
    name: "Sophia Richter",
    subject:
      "DevOps Grundlagen, Git & GitHub professionell nutzen, KI in der Webentwicklung",
  },
  {
    image: assets.dozent7,
    name: "Tim Becker",
    subject:
      "Einführung in Künstliche Intelligenz, Deep Learning mit TensorFlow, Computer Vision Grundlagen",
  },
  {
    image: assets.dozent8,
    name: "Paul Wagner",
    subject:
      "Vue.js Grundlagen, Mobile App Entwicklung, TypeScript für JavaScript-Entwickler",
  },
];

const UnserTeam = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-dark mb-6">Unser Team</h1>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto text-md">
          Lerne die Expertinnen und Experten kennen, die hinter unserer
          IT-Plattform stehen – mit Leidenschaft und Kompetenz bringen sie dich
          weiter.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#f9fafb] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-dark">
                  {member.name}
                </h3>
                <p className="text-sm text-primary mt-1">{member.subject}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnserTeam;
