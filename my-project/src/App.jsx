import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import RegisterModal from "./component/Modalform/RegisterModal";
import ScrollTop from "./component/ScrollToTop/ScrollTop";
import Kurse from "./pages/Kurse";
import KursDetails from "./pages/KursDetails";
import Kontakt from "./pages/Kontakt";
import UeberUns from "./pages/UeberUns";
import UnserTeam from "./pages/UnserTeam";
import ChatBot from "./component/ChatBot/ChatBot";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Router>
        <ScrollTop />
        <Layout onOpenModal={openModal}>
          <Routes>
            <Route path="/" element={<Home onOpenModal={openModal} />} />
            <Route path="/kurse" element={<Kurse />} />
            <Route
              path="/kurse/:id"
              element={<KursDetails onOpenModal={openModal} />}
            />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/ueber-uns" element={<UeberUns />} />
            <Route path="/unser-team" element={<UnserTeam />} />
          </Routes>
        </Layout>
        <ChatBot />
        <RegisterModal isOpen={showModal} onClose={closeModal} />
      </Router>
    </main>
  );
};

export default App;
