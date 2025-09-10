import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Marquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const marquee = marqueeRef.current;

      gsap.to(marquee, {
        xPercent: -50,   // move half the width
        duration: 15,    // speed of scroll
        repeat: -1,      // infinite
        ease: "linear",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full overflow-hidden bg-[#faf7f5] py-32">
      {/* Track container (double width for looping) */}
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap font-bold uppercase"
        style={{ fontSize: "120px", width: "200%" }}
      >
        {/* First track */}
        <div className="flex">
          <span className="mx-12">LET’S WORK TOGETHER –</span>
          <span className="mx-12">LET’S WORK TOGETHER –</span>
        </div>
        {/* Second track (duplicate for seamless loop) */}
        <div className="flex">
          <span className="mx-12">LET’S WORK TOGETHER –</span>
          <span className="mx-12">LET’S WORK TOGETHER –</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
