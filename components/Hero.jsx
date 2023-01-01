import Image from "next/image";

import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";

import heroImg from "../assets/images/mobile/image-hero.jpg";

const Hero = ({ setIsOpen }) => {
  const handleMenuClick = () => {};
  return (
    <div className="h-[100vh] bg-hero-img-mobile bg-cover bg-no-repeat px-6">
      <header className=" flex items-center justify-between  py-6">
        <div className="">
          <Image src={logo} alt="loopstudios" width={120} height={20} />
        </div>
        <nav>
          <ul className="hidden">
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </nav>
        <div className="p-4" onClick={handleMenuClick}>
          <Image src={hamburger} alt="menu-icon" />
        </div>
      </header>
      <div className="mt-[20vh] p-4 font-josefin-sans  text-4xl  font-light text-gray-200 outline outline-2 outline-gray-200 ">
        <p>IMMERSIVE </p>
        <p> EXPERIENCES </p>
        <p> THAT </p>
        <p> DELIVER</p>
      </div>
    </div>
  );
};

export default Hero;
