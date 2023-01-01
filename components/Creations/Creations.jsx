import React from "react";
import Creation from "./Creation.jsx/Creation";

import deepEarth from "../../assets/images/mobile/image-deep-earth.jpg";
import nightArcade from "../../assets/images/mobile/image-night-arcade.jpg";
import soccerTeam from "../../assets/images/mobile/image-soccer-team.jpg";
import grid from "../../assets/images/mobile/image-grid.jpg";
import fromAbove from "../../assets/images/mobile/image-from-above.jpg";
import pocketBorealis from "../../assets/images/mobile/image-pocket-borealis.jpg";
import curiosity from "../../assets/images/mobile/image-curiosity.jpg";
import fisheye from "../../assets/images/mobile/image-fisheye.jpg";
const Creations = () => (
  <div className="px-6">
    <div>
      <p className="mb-12 text-center font-josefin-sans text-3xl uppercase">Our creations</p>
      <div className="hidden">
        <p>SEE ALL</p>
      </div>

      {/* The grid container is below */}
      <div className="grid grid-cols-1 gap-6">
        <Creation title="deep earth" creationImg={deepEarth} alt="deep-earth" />
      </div>
      <div className="mx-auto mt-8 w-32 text-center outline">
        <p>SEE ALL</p>
      </div>
    </div>
  </div>
);

export default Creations;
