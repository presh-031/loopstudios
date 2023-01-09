import Image from "next/image";
import React from "react";

const Creation = ({ title, creationImgMobile, creationImgDesktop, alt }) => {
  return (
    <div
      className={`relative h-fit w-full cursor-pointer bg-cover bg-no-repeat text-white   hover:text-black sm:h-[30rem]`}
    >
      {/* mobile-image */}
      <Image
        src={creationImgMobile}
        alt={alt}
        className="object-cover transition-all  ease-linear hover:opacity-80  sm:hidden"
      />

      {/* desktop-image */}
      <Image
        src={creationImgDesktop}
        alt={alt}
        className="hidden object-cover transition-all  ease-linear hover:opacity-80 sm:block sm:h-[100%] sm:w-full"
      />
      <p className="absolute bottom-[5%]  left-4 w-32 font-josefin-sans text-2xl  uppercase transition-all ease-linear ">
        {title}
      </p>
    </div>
  );
};

export default Creation;
