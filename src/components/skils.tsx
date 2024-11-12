import React from "react";
import { Vortex } from "./ui/vortex";

import InfiniteMovingSkills from "./ui/InfiniteMovingSkills";

export function Skills() {
  return (
    <div className="w-full mx-auto  min-h-[25rem] overflow-hidden bg-slate-950">
      <Vortex className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
        <h2 className="text-3xl font-semibold text-center text-white relative z-20 ">
          Skills
        </h2>
        <h4 className="text-base font-extralight text-center text-stone-400 relative z-20 mb-4">
          Hover over the cards to explore my technical expertise
        </h4>

        <div className="flex flex-col gap-2 w-full overflow-hidden">
          {/* First row - Right to Left */}
          <InfiniteMovingSkills
            direction="left"
            speed="slow"
            pauseOnHover={true}
            className="my-1"
          />
          {/* Second row - Left to Right */}
          <InfiniteMovingSkills
            direction="right"
            speed="slow"
            pauseOnHover={true}
            className="my-1"
          />
        </div>
      </Vortex>
    </div>
  );
}
