import Footer from "../components/Footer";
import HeadComponent from "../components/HeadComponent";
import Hero from "../components/Hero";
import Info from "../components/Info";

export default function Home() {
  return (
    <div className="bg-gray-900">
      <HeadComponent page="HomePage" />
      <Hero />
      <Info />
      <Footer />
    </div>
  );
}
