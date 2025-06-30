import { motion } from "framer-motion";
import { FaInstagram, FaDiscord, FaYoutube, FaPhone } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { assets } from "../../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer role="contentinfo" className="py-6 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/*-----First section------*/}
          <div className="space-y-4 max-w-[300px]">
            <div>
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <img
                  src={assets.logo_tech}
                  alt="SCC Logo – Zur Startseite"
                  className="h-20 mx-auto"
                />
              </Link>
            </div>
            <p className="text-dark2 text-[10px] leading-snug">
              SCC ist eine Website, die sich darauf spezialisiert hat, angehende
              Entwickler auf ihrem Weg in die Tech-Welt zu begleiten. Mit
              praxisnahen Kursen – von den Grundlagen bis zu fortgeschrittenen
              Programmierkonzepten – bieten wir dir ein strukturiertes
              Lernerlebnis, mit dem du fundierte Coding-Skills entwickelst,
              eigene Projekte umsetzt und den Einstieg in deine IT-Karriere
              meisterst.
            </p>
          </div>

          {/*-----Second section------*/}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Hier finden Sie uns</h2>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="hover:text-secondary duration-200 font-semibold">
                    Adresse:
                  </li>
                  <li className="hover:text-secondary duration-200">
                    Lange-Feld-Straße 109
                  </li>
                  <li className="hover:text-secondary duration-200">
                    30926 Seelze
                  </li>
                  <li className="flex items-center gap-2 hover:text-secondary duration-200">
                    <FaPhone className="text-base" />
                    <a
                      href="tel:+491234567890"
                      aria-label="Telefonnummer anrufen"
                    >
                      +49 123 4567890
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Links</h2>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li>
                    <Link
                      to="/kurse"
                      className="hover:text-secondary duration-200 block"
                    >
                      Kurse
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ueber-uns"
                      className="hover:text-secondary duration-200 block"
                    >
                      Über uns
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/unser-team"
                      className="hover:text-secondary duration-200 block"
                    >
                      Unser Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/kontakt"
                      className="hover:text-secondary duration-200 block"
                    >
                      Kontakt
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/*-----Third section------*/}
          <div className="space-y-4 max-w-[300px]">
            <h2 id="newsletter-title" className="text-xl font-bold">
              Newsletter
            </h2>

            <form
              className="flex items-center"
              aria-labelledby="newsletter-title"
            >
              <input
                type="email"
                aria-label="E-Mail eingeben"
                placeholder="E-Mail eingeben"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button
                type="submit"
                aria-label="Newsletter absenden"
                className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl"
              >
                Go
              </button>
            </form>

            {/*-----Social Icons------*/}
            <div className="flex space-x-6 py-3">
              <a
                href="https://www.instagram.com/thecodepost/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profil öffnen"
              >
                <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a
                href="https://discord.gg/programming"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord Community öffnen"
              >
                <FaDiscord className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a
                href="https://www.freecodecamp.org/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website öffnen"
              >
                <TbWorldWww className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a
                href="https://www.youtube.com/c/TraversyMedia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Kanal öffnen"
              >
                <FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm text-dark2">
        © 2025 SCC – Alle Rechte vorbehalten.
      </div>
    </footer>
  );
};

export default Footer;
