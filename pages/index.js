import Head from "next/head";
import Image from "next/image";
import HeadComponent from "../components/HeadComponent";

export default function Home() {
  return (
    <div>
      <HeadComponent page="HomePage" />
    </div>
  );
}
