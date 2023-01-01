import Image from "next/image";
import React from "react";

const Creation = ({ title, creationImg, alt }) => {
  return (
    <div className={`relative h-32 w-full border-red-800 bg-cover bg-no-repeat`}>
      <Image src={creationImg} alt={alt} width={330} height={120} className="object-cover" />
      <p className="absolute bottom-4 left-4 w-32  font-josefin-sans text-2xl uppercase text-white">{title}</p>
    </div>
  );
};

export default Creation;
