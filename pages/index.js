import HeadComponent from "../components/HeadComponent";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="bg-gray-900">
      <HeadComponent page="HomePage" />
      <Hero />
    </div>
  );
}
