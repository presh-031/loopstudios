import React from "react";
import Creation from "./Creation.jsx/Creation";

const Creations = () => (
  <div className="px-6">
    <div>
      <p className="mb-12 text-center font-josefin-sans text-3xl uppercase">Our creations</p>
      <div className="hidden">
        <p>SEE ALL</p>
      </div>

      {/* The grid container is below */}
      <div className="grid grid-cols-1 gap-6">
        <Creation title="deep earth" creationImg="deep-earth" />
        <Creation title="deep earth" creationImg="night-arcade" />
        <Creation title="deep earth" creationImg="soccer-team" />
        <Creation title="deep earth" creationImg="grid" />
        <Creation title="deep earth" creationImg="from-above" />
        <Creation title="deep earth" creationImg="pocket-borealis" />
        <Creation title="deep earth" creationImg="curiosity" />
        <Creation title="deep earth" creationImg="fisheye" />
      </div>
      <div className="">
        <p>SEE ALL</p>
      </div>
    </div>
  </div>
);

export default Creations;
