import Creations from "../components/Creations/Creations";
import Footer from "../components/Footer";
import HeadComponent from "../components/HeadComponent";
import Hero from "../components/Hero";
import Info from "../components/Info";

export default function Home() {
  return (
    <div className="">
      <HeadComponent page="HomePage" />
      <Hero />
      <Info />
      <Creations />
      <Footer />
    </div>
  );
}
