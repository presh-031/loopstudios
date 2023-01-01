import { useState } from "react";
import Creations from "../components/Creations/Creations";
import Footer from "../components/Footer";
import HeadComponent from "../components/HeadComponent";
import Hero from "../components/Hero";
import Info from "../components/Info";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <HeadComponent page="HomePage" />
      <Hero setIsOpen={setIsOpen} />
      <Info />
      <Creations />
      <Footer />
    </div>
  );
}
