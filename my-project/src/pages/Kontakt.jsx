// /src/pages/Kontakt.jsx
import kontakt from "../assets/kontakt.png";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeadset } from "react-icons/fa";
import { motion } from "framer-motion";

const Kontakt = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Imagine stânga */}
        <div>
          <motion.img
            src={kontakt}
            alt="Kontakt Illustration"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-md mx-auto md:mx-0 object-contain"
          />
        </div>

        {/* Informații de contact */}
        <div>
          <h1 className="text-4xl font-bold mb-6">Kontakt</h1>
          <h2 className="text-xl font-semibold text-secondary mb-4">
            STARTCODING COMMUNITY
          </h2>

          <div className="space-y-4 text-gray-700 text-sm">
            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-primary mt-1" />
              <span>
                <strong>Adresse:</strong>
                <br /> Lange-Feld-Straße 109
                <br /> 30926 Seelze
              </span>
            </p>

            <p className="flex items-center gap-3">
              <FaPhone className="text-primary" />
              <span>
                <strong>Telefon:</strong> +49 123 4567890
              </span>
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-primary" />
              <span>
                <strong>Email:</strong> info@startcoding.de
              </span>
            </p>
            <div className="flex items-start gap-3">
              <FaHeadset className="text-primary text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-base">24/7 Support</h4>
                <p className="text-sm">
                  Wir sind rund um die Uhr für dich da – ob telefonisch oder per
                  E-Mail.
                </p>
              </div>
            </div>
            <p>
              Wir freuen uns auf deine Anfrage! Ob du Fragen zu unseren Kursen
              hast oder einfach nur "Hallo" sagen möchtest – wir sind für dich
              da.
            </p>
          </div>
        </div>
      </div>
      {/* Google Maps iframe */}
      <div className="mt-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.0382584236923!2d9.542837615830232!3d52.39538747979174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b04b4df32d58d7%3A0x57f1682a7996b858!2sLange-Feld-Stra%C3%9Fe%20109%2C%2030926%20Seelze%2C%20Germany!5e0!3m2!1sen!2sde!4v1717869874279!5m2!1sen!2sde"
          className="w-full h-[400px] rounded-xl border-0 shadow-md"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Standort"
        ></iframe>
      </div>
    </section>
  );
};

export default Kontakt;
