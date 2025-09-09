import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Img from "../assets/ax-about-01.webp";

gsap.registerPlugin(ScrollTrigger);

const Image = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      clipPath: "inset(0% 0% 0% 0%)", // fully visible
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom", // when container enters viewport
        end: "bottom top",   // when container leaves viewport
        scrub: true,         // dynamically update as you scroll
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex justify-end py-38 pr-6 overflow-hidden"
    >
      <img
        ref={imageRef}
        src={Img}
        alt="Hero"
        className="w-4/6 h-auto"
        style={{ clipPath: "inset(20% 0% 30% 0%)" }} // initial crop
      />
    </div>
  );
};

export default Image;
