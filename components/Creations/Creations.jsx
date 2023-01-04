import React from "react";
import Creation from "./Creation/Creation";

import deepEarth from "../../assets/images/mobile/image-deep-earth.jpg";
import nightArcade from "../../assets/images/mobile/image-night-arcade.jpg";
import soccerTeam from "../../assets/images/mobile/image-soccer-team.jpg";
import grid from "../../assets/images/mobile/image-grid.jpg";
import fromAbove from "../../assets/images/mobile/image-from-above.jpg";
import pocketBorealis from "../../assets/images/mobile/image-pocket-borealis.jpg";
import curiosity from "../../assets/images/mobile/image-curiosity.jpg";
import fisheye from "../../assets/images/mobile/image-fisheye.jpg";
const Creations = () => (
  <div className=" mb-[8rem] px-6">
    <div>
      <p className="mb-12 text-center font-josefin-sans text-3xl uppercase">Our creations</p>
      <div className="hidden">
        <p>SEE ALL</p>
      </div>

      {/* The grid container is below */}
      <div className="grid grid-cols-1 gap-6">
        <Creation title="deep earth" creationImg={deepEarth} alt="deep-earth" />
        <Creation title="night arcade" creationImg={nightArcade} alt="night-arcade" />
        <Creation title="soccer team vr" creationImg={soccerTeam} alt="soccer-team-vr" />
        <Creation title="the grid" creationImg={grid} alt="the-grid" />
        <Creation title="from up above vr" creationImg={fromAbove} alt="from-up-above-vr" />
        <Creation title="pocket borealis" creationImg={pocketBorealis} alt="pocket-borealis" />
        <Creation title="the curiosity" creationImg={curiosity} alt="the-curiosity" />
        <Creation title="make it fisheye" creationImg={fisheye} alt="make-it-fisheye" />
      </div>
      <div className="mx-auto mt-8 w-28 py-2 text-center font-alata text-xs tracking-[0.2em] outline">
        <p>SEE ALL</p>
      </div>
    </div>
  </div>
);

export default Creations;
