import Image from "next/image";
import React from "react";

// import grid from "../../../assets/images/mobile/image-grid.jpg";
const Creation = ({ title, creationImg, alt }) => {
  // console.log(creationImg);
  return (
    <div className={`h-32 w-full border border-red-800 bg-cover bg-no-repeat`}>
      <p>{title}</p>
      <Image src={creationImg} alt={alt} width={32} height={32} />
    </div>
  );
};

export default Creation;
