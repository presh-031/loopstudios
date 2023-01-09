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

import deepEarthDesktop from "../../assets/images/desktop/image-deep-earth.jpg";
import nightArcadeDesktop from "../../assets/images/desktop/image-night-arcade.jpg";
import soccerTeamDesktop from "../../assets/images/desktop/image-soccer-team.jpg";
import gridDesktop from "../../assets/images/desktop/image-grid.jpg";
import fromAboveDesktop from "../../assets/images/desktop/image-from-above.jpg";
import pocketBorealisDesktop from "../../assets/images/desktop/image-pocket-borealis.jpg";
import curiosityDesktop from "../../assets/images/desktop/image-curiosity.jpg";
import fisheyeDesktop from "../../assets/images/desktop/image-fisheye.jpg";

const Creations = () => (
  <div className=" mb-[8rem] px-6 lg:px-16 xl:px-32">
    <div>
      <div className="lg:flex lg:items-center lg:justify-between">
        <p className="mb-12 text-center font-josefin-sans text-3xl uppercase sm:text-4xl lg:m-0 lg:text-5xl">
          Our creations
        </p>
        <div className="hidden cursor-pointer px-2 lg:block lg:self-center">
          <p className="mx-auto mt-8 w-28 py-2 text-center  font-alata text-sm tracking-[0.2em] outline hover:bg-black hover:text-[#fff] lg:m-0">
            SEE ALL
          </p>
        </div>
      </div>

      {/* The grid container is below */}
      <div className="mx-auto grid grid-cols-1 gap-8  sm:grid-cols-2 md:grid-cols-3  md:gap-4 lg:mt-[4rem] lg:gap-8 xl:grid-cols-4 xl:gap-6">
        <Creation
          title="deep earth"
          creationImgMobile={deepEarth}
          creationImgDesktop={deepEarthDesktop}
          alt="deep-earth"
        />
        <Creation
          title="night arcade"
          creationImgMobile={nightArcade}
          creationImgDesktop={nightArcadeDesktop}
          alt="night-arcade"
        />
        <Creation
          title="soccer team vr"
          creationImgMobile={soccerTeam}
          creationImgDesktop={soccerTeamDesktop}
          alt="soccer-team-vr"
        />
        <Creation title="the grid" creationImgMobile={grid} creationImgDesktop={gridDesktop} alt="the-grid" />
        <Creation
          title="from up above vr"
          creationImgMobile={fromAbove}
          creationImgDesktop={fromAboveDesktop}
          alt="from-up-above-vr"
        />
        <Creation
          title="pocket borealis"
          creationImgMobile={pocketBorealis}
          creationImgDesktop={pocketBorealisDesktop}
          alt="pocket-borealis"
        />
        <Creation
          title="the curiosity"
          creationImgMobile={curiosity}
          creationImgDesktop={curiosityDesktop}
          alt="the-curiosity"
        />
        <Creation
          title="make it fisheye"
          creationImgMobile={fisheye}
          creationImgDesktop={fisheyeDesktop}
          alt="make-it-fisheye"
        />
      </div>
      <p className=" mx-auto mt-8 w-28 cursor-pointer py-2 text-center  font-alata text-sm tracking-[0.2em]  outline transition-all ease-linear  hover:bg-black hover:text-[#fff] lg:m-0 lg:hidden">
        SEE ALL
      </p>
    </div>
  </div>
);

export default Creations;
