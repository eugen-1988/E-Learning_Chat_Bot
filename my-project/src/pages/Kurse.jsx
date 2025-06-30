// /src/pages/Kurse.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { courses } from "../utils/courses";
import { Link } from "react-router-dom";

const Kurse = () => {
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  const categories = [
    "Alle",
    "Webdesign",
    "Frontend",
    "Backend",
    "KI-Künstliche Intelligenz",
  ];

  const filteredCourses =
    selectedCategory === "Alle"
      ? courses
      : courses.filter((c) => c.category === selectedCategory);

  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-6">Unsere Kurse</h1>
      <p className="text-center text-dark2 max-w-xl mx-auto mb-12">
        Entdecke praxisorientierte Kurse im Bereich Webentwicklung, Design und
        Programmierung.
      </p>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 px-4 sm:px-0 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`whitespace-nowrap px-4 py-2 rounded-full border text-sm font-medium transition duration-200 ${
              selectedCategory === cat
                ? "bg-primary text-white"
                : "border-gray-300 text-gray-700 hover:border-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.25,
              delay: index * 0.05,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.1 },
            }}
            viewport={{ once: true }}
            className="bg-white border rounded-xl p-6 shadow transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                  {course.level}
                </span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  {course.duration}
                </span>
              </div>

              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{course.description}</p>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2 text-sm text-primary">
                <FaCheckCircle className="text-green-500" />
                {course.badge}
              </div>

              <Link
                to={`/kurse/${course.id}`}
                className="text-sm px-3 py-1 rounded-full primary-btn"
              >
                Mehr erfahren
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Kurse;
