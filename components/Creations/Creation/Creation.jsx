import Image from "next/image";
import React from "react";

const Creation = ({ title, creationImgMobile, creationImgDesktop, alt }) => {
  return (
    <div className={`relative h-fit w-full border-red-800 bg-cover bg-no-repeat outline  sm:h-[30rem]`}>
      {/* mobile-image */}
      <Image src={creationImgMobile} alt={alt} className="object-cover outline sm:hidden" />

      {/* desktop-image */}
      <Image src={creationImgDesktop} alt={alt} className="hidden object-cover sm:block sm:h-[100%] sm:w-full" />
      {/* <p className="absolute bottom-[5%] left-4 w-32  font-josefin-sans text-2xl uppercase text-white">{title}</p> */}
    </div>
  );
};

export default Creation;
