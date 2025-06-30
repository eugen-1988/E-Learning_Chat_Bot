import { assets } from "../../assets";
import { animate, motion } from "framer-motion";

const Banner2 = () => {
  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* --- Banner Text--- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <h1 className="text-4xl font-bold !leading-snug">
              Werde Teil unserer Community und beginne deine Reise
            </h1>
            <p className="text-dark2">
              Erarbeite dir praxisnahe Fähigkeiten durch echte Projekte,
              professionelle Anleitung und individuelles Feedback – gemeinsam
              mit tausenden motivierten Lernenden.
            </p>
            <a
              href="https://discord.gg/programming"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn !mt-8"
            >
              Community Beitreten
            </a>
          </div>
        </motion.div>
        {/* --- Banner Image--- */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={assets.jorney}
            alt="digital1"
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};
export default Banner2;
