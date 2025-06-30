import { IoIosArrowRoundForward } from "react-icons/io";
import { assets } from "../../assets";
import { motion } from "framer-motion";

// Reusable animation variant
export const FadeUp = (delay) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
      delay,
      ease: "easeInOut",
    },
  },
});

const Hero = ({ onOpenModal }) => {
  return (
    <section className="bg-light overflow-hidden relative">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] px-6 md:px-12 lg:px-24">
        {/* --- Text Side --- */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[550px]">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-bold leading-snug text-gray-900"
            >
              Lernen Sie, eine <span className="text-secondary">Website</span>{" "}
              für Ihr Unternehmen zu erstellen
            </motion.h1>

            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="flex justify-center md:justify-start"
            >
              <button
                onClick={onOpenModal}
                className="primary-btn flex items-center gap-2 group"
              >
                Jetzt starten
                <IoIosArrowRoundForward className="text-2xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* --- Image Side --- */}
        <div className="flex justify-center items-center relative z-10">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={assets.grafic}
            alt="Grafische Darstellung einer Lernplattform"
            loading="lazy"
            className="w-[400px] xl:w-[600px] drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
