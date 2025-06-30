// /pages/Home.jsx
import Hero from "../component/Hero/Hero";
import Services from "../component/Services/Services";
import Banner from "../component/Banner/Banner";
import Banner2 from "../component/Banner/Banner2";
import Subscribe from "../component/Subscribe/Subscribe";

const Home = ({ onOpenModal }) => {
  return (
    <>
      <Hero onOpenModal={onOpenModal} />
      <Services />
      <Banner />
      <Subscribe onOpenModal={onOpenModal} />
      <Banner2 />
    </>
  );
};

export default Home;
