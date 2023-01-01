import { useState } from "react";
import Creations from "../components/Creations/Creations";
import Footer from "../components/Footer";
import HeadComponent from "../components/HeadComponent";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Menu from "../components/Menu";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      {/* Head, for page metadata */}
      <HeadComponent page="HomePage" />

      {isOpen ? (
        <Menu setIsOpen={setIsOpen} />
      ) : (
        <>
          <Hero setIsOpen={setIsOpen} />
          <Info />
          <Creations />
          <Footer />
        </>
      )}
    </div>
  );
}
