import Image from "next/image";

import logo from "../assets/images/logo.svg";
const Hero = () => {
  return (
    <div>
      <header>
        <div>
          <Image src={logo} alt="loopstudios" />
        </div>
        <nav>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </nav>
      </header>
      <div>
        <p>IMMERSIVE EXPERIENCES THAT DELIVER</p>
      </div>
    </div>
  );
};

export default Hero;
