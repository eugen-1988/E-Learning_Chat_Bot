import { assets } from "../../assets";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { FadeUp } from "../Hero/Hero";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section aria-labelledby="banner-heading">
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* --- Banner Image --- */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={assets.digital1}
            alt="Digitale Lernerfahrung – Laptop mit Kursmaterialien"
            loading="lazy"
            className="w-[350px] md:max-w-[450px] object-contain drop-shadow"
          />
        </div>

        {/* --- Banner Text --- */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-12">
            <motion.h2
              id="banner-heading"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold leading-snug"
            >
              Lerne IT von den Besten
            </motion.h2>

            <div className="flex flex-col gap-6">
              {/* Feature 1 */}
              <motion.div
                variants={FadeUp(0.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <FaBookReader className="text-2xl text-blue-500" />
                <p className="text-lg">Über 1.000+ Kurse</p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                variants={FadeUp(0.4)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <GrUserExpert className="text-2xl text-blue-500" />
                <p className="text-lg">Trainer mit echter Praxiserfahrung</p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                variants={FadeUp(0.6)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <MdOutlineAccessTime className="text-2xl text-blue-500" />
                <p className="text-lg">Unbegrenzter Zugriff</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Logo Strip --- */}
      <div className="overflow-hidden px-4 mt-8 mb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 md:gap-12"
        >
          {[
            assets.thenewyorktimes,
            assets.forbes,
            assets.techcrunch,
            assets.businessinsider,
            assets.usatoday,
          ].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Presse-Logo ${index + 1}`}
              loading="lazy"
              className="h-8 sm:h-10 md:h-12 max-w-[100px] object-contain"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
