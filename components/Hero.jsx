import Image from "next/image";

import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";

import heroImg from "../assets/images/mobile/image-hero.jpg";

const Hero = ({ setIsOpen }) => {
  const handleMenuClick = () => {
    setIsOpen((prevIsIOpen) => !prevIsIOpen);
  };
  return (
    <div className="h-[100vh] bg-hero-img-mobile bg-cover bg-no-repeat px-6 lg:h-fit  lg:bg-hero-img-desktop  lg:px-32 lg:pb-[8rem]">
      <header className=" flex items-center justify-between py-6 text-[#fff]  lg:py-16">
        <div className="">
          <Image src={logo} alt="loopstudios" className="h-[20px] w-[120px] object-contain lg:h-[40px] lg:w-[200px]" />
        </div>
        <nav>
          <ul className="hidden lg:flex lg:gap-8 lg:text-xl">
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </nav>
        <div className="p-4 lg:hidden" onClick={handleMenuClick}>
          <Image src={hamburger} alt="menu-icon" />
        </div>
      </header>
      <div className="mt-[20vh]  p-4 font-josefin-sans text-4xl  font-light text-gray-200 outline outline-2  outline-gray-200  lg:mt-[2rem] lg:w-fit lg:p-6 lg:pr-32 lg:text-6xl  ">
        <p>IMMERSIVE </p>
        <p> EXPERIENCES </p>
        <p> THAT </p>
        <p> DELIVER</p>
      </div>
    </div>
  );
};

export default Hero;
