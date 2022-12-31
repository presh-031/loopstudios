import React from "react";

const Creation = ({ title, creationImg }) => {
  console.log(creationImg);
  return (
    <div className={`bg-${creationImg} h-32 w-full border border-red-800 bg-cover bg-no-repeat`}>
      <p>{title}</p>
    </div>
  );
};

export default Creation;
