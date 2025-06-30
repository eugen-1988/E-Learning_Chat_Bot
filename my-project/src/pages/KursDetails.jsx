// /src/pages/KursDetails.jsx
import { useParams } from "react-router-dom";
import { courses } from "../utils/courses";
import { FaBell } from "react-icons/fa";
import notebook from "../assets/notebook.png";
import {
  FaClock,
  FaGraduationCap,
  FaUsers,
  FaCheckCircle,
  FaLaptopCode,
  FaLightbulb,
} from "react-icons/fa";

const KursDetails = ({ onOpenModal }) => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course)
    return (
      <div className="text-center py-20 text-xl text-gray-500">
        Kurs nicht gefunden.
      </div>
    );

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Titlu și descriere */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {course.description}
        </p>
      </div>

      {/* Detalii + Imagine */}
      <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
        <ul className="w-full md:w-1/2 space-y-2 text-sm text-gray-700">
          <li>
            <FaClock className="inline text-primary mr-2" />
            <strong>Dauer:</strong> {course.duration}
          </li>
          <li>
            <FaGraduationCap className="inline text-primary mr-2" />
            <strong>Level:</strong> {course.level}
          </li>
          {course.abschlussart && (
            <li>
              <FaCheckCircle className="inline text-primary mr-2" />
              <strong>Abschlussart:</strong> {course.abschlussart}
            </li>
          )}
          {course.unterrichtszeiten && (
            <li>
              <FaClock className="inline text-primary mr-2" />
              <strong>Unterrichtszeiten:</strong> {course.unterrichtszeiten}
            </li>
          )}
          {course.pruefung && (
            <li>
              <FaCheckCircle className="inline text-primary mr-2" />
              <strong>Abschlussprüfung:</strong> {course.pruefung}
            </li>
          )}
          {course.foerderung && (
            <li>
              <FaLightbulb className="inline text-primary mr-2" />
              <strong>Förderung:</strong> {course.foerderung}
            </li>
          )}
          {typeof course.vollzeit !== "undefined" && (
            <li>
              <FaClock className="inline text-primary mr-2" />
              <strong>Vollzeit:</strong> {course.vollzeit ? "Ja" : "Nein"}
            </li>
          )}
          {course.technologien && (
            <li>
              <FaLaptopCode className="inline text-primary mr-2" />
              <strong>Technologien:</strong> {course.technologien.join(", ")}
            </li>
          )}
        </ul>

        {/* Imagine */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={notebook}
            alt="Kurs Illustration"
            className="w-2/3 md:w-1/2 h-auto object-contain"
          />
        </div>
      </div>

      {/* Kursinhalte + Zielgruppe */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {course.inhalte && (
          <div>
            <h2 className="text-xl font-semibold mb-3">Kursinhalte</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {course.inhalte.map((punkt, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <FaCheckCircle className="text-primary mt-1" /> {punkt}
                </li>
              ))}
            </ul>
          </div>
        )}
        {course.zielgruppe && (
          <div className="md:pl-20">
            <h2 className="text-xl font-semibold mb-3">Zielgruppe</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {course.zielgruppe.map((ziel, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <FaUsers className="text-primary mt-1" /> {ziel}
                </li>
              ))}
            </ul>
            <div className="flex justify-center md:justify-start mt-12">
              <button
                onClick={onOpenModal}
                className="primary-btn inline-flex items-center gap-3 group"
              >
                Kurs Starten
                <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default KursDetails;
