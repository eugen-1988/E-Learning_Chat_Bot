import { assets } from "../../assets";
import { FaBell } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

//const bgStyle = {
// backgroundImage: url(${BgImage}),
// backgroundRepeat: "no-repeat",
// backgroundSize: "cover",
// backgroundPosition: "center",
//};

const Subscribe = ({ onOpenModal }) => {
  return (
    <section className="bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="container py-24 md:py-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col justify-center"
        >
          <div className="text-center space-y-4 lg:max-w-[900px] mx-auto ">
            {/* 👥 Imagini responsive deasupra titlului */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-12 mb-6">
              {[
                assets.student1,
                assets.student2,
                assets.student3,
                assets.student4,
                assets.student5,
                assets.student6,
                assets.student7,
                assets.student8,
              ].map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`student${idx + 1}`}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
                />
              ))}
            </div>
            {/* 👥 Imagini deasupra titlului */}
            <h1 className="text-4xl font-bold !leading-snug">
              Über 10.000 Studierende lernen mit uns
            </h1>
            <div className="space-y-4 text-center">
              <div className="flex justify-center items-center gap-3">
                <p>
                  <span className="text-secondary font-bold">
                    Moderne Inhalte
                  </span>
                  &nbsp;in Bereichen wie Webentwicklung, Data Science, KI und
                  mehr
                </p>
                <IoCheckmarkCircleOutline className=" text-blue-500 text-xl mt-1" />
              </div>

              <div className="flex justify-center items-start gap-3">
                <p>
                  <span className="text-secondary font-bold">
                    Erfahrene Dozenten
                  </span>
                  &nbsp;direkt aus der IT-Branche
                </p>
                <IoCheckmarkCircleOutline className=" text-blue-500 text-xl mt-1" />
              </div>

              <div className="flex justify-center items-start gap-3">
                <p>
                  <span className="text-secondary font-bold">Zertifikate</span>
                  &nbsp;die deine Karrierechancen verbessern
                </p>
                <IoCheckmarkCircleOutline className=" text-blue-500 text-xl mt-1" />
              </div>

              <div className="flex justify-center items-start gap-3">
                <p>
                  <span className="text-secondary font-bold">
                    Flexibles Lernen
                  </span>
                  &nbsp;wann und wo du willst
                </p>
                <IoCheckmarkCircleOutline className=" text-blue-500 text-xl mt-1" />
              </div>
            </div>

            <h1 className="text-2xl font-bold !leading-snug">
              Werde Teil unserer wachsenden Community und starte noch heute
              durch!
            </h1>
            <button
              onClick={onOpenModal}
              className="primary-btn !mt-8 inline-flex items-center gap-4 group"
            >
              Kurs Starten
              <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Subscribe;
