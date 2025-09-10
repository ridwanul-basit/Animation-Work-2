import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mySvg from "../assets/ax-zoom-image-01.svg";


gsap.registerPlugin(ScrollTrigger);

const CenteredSVG = () => {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1500", // scroll distance for zoom
        scrub: true,
        pin: true,
        markers: false,
      },
    });

    // Zoom the SVG gradually
    tl.to(svgRef.current, {
      scale: 35, // adjust scale as needed
      transformOrigin: "center center",
      ease: "none",
    });

    // Fade background overlay simultaneously
    tl.to(
      overlayRef.current,
      {
        backgroundColor: "#F9F6F2",
        opacity: 1,
        ease: "none",
      },
      "<" // start at same time as zoom
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background overlay */}
      <div
        ref={overlayRef}
        className="absolute top-0 left-0 w-full h-full bg-transparent z-10"
      ></div>

      {/* Centered SVG */}
      <div className="w-full h-full flex items-center justify-center z-20">
        <img
  ref={svgRef}
  src={mySvg}
  alt="Zoom SVG"
  className="block "
/>
      </div>
    </section>
  );
};

export default CenteredSVG;
