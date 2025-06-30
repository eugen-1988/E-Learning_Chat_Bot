import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { assets } from "../../assets";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const NavbarMenu = [
  { id: 1, title: "Startseite", path: "/" },
  { id: 2, title: "Kurse", path: "/kurse" },
  { id: 3, title: "Über uns", path: "/ueber-uns" },
  { id: 4, title: "Unser Team", path: "/unser-team" },
  { id: 5, title: "Kontakt", path: "/kontakt" },
];

const Navbar = ({ onOpenModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav id="navbar" role="navigation" className="bg-light relative z-50">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        {/*---Logo---*/}
        <Link to="/">
          <img
            src={assets.logo_tech}
            alt="Logo Tech"
            className="h-20 mx-auto"
          />
        </Link>

        {/*---Desktop Menu---*/}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="h-[2px] w-0 bg-secondary absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-300 group-hover:w-6 rounded-full"></div>
                  {menu.title}
                </Link>
              </li>
            ))}
            <button
              onClick={onOpenModal}
              className="primary-btn"
              aria-label="Anmeldemodal öffnen"
            >
              Anmelden
            </button>
          </ul>
        </div>

        {/*---Hamburger Icon---*/}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Menü öffnen"
            aria-expanded={isMenuOpen}
          >
            <IoMdMenu className="text-4xl text-gray-800" />
          </button>
        </div>
      </motion.div>

      {/*---Mobile Menu Overlay---*/}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-4/5 h-full bg-white shadow-2xl z-50 flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobiles Menü"
          >
            <div className="flex justify-between items-center p-4 border-b">
              <span className="text-lg font-semibold">Menü</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Menü schließen"
              >
                <IoMdClose className="text-3xl text-gray-700" />
              </button>
            </div>

            <div className="flex flex-col">
              {NavbarMenu.map((menu) => (
                <Link
                  key={menu.id}
                  to={menu.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-6 py-4 border-b hover:bg-gray-100"
                >
                  {menu.title}
                </Link>
              ))}
              <button
                onClick={() => {
                  onOpenModal();
                  setIsMenuOpen(false);
                }}
                className="m-4 py-3 px-6 bg-secondary text-white rounded-lg hover:bg-primary transition"
                aria-label="Anmeldemodal öffnen"
              >
                Anmelden
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
