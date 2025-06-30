// /layout/Layout.jsx
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";

const Layout = ({ children, onOpenModal }) => {
  return (
    <>
      <Navbar onOpenModal={onOpenModal} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
