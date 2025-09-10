import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceHero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const overlayRef = useRef(null); // black overlay

  const lines = ["What services", "we provide you", "actually"];

  useEffect(() => {
    const spans = Array.from(textRef.current.querySelectorAll("span"));

    // GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000", // scroll distance for smooth zoom
        pin: true,
        scrub: true,
        markers: false,
      },
    });

    // Step 1: Letter reveal
    tl.to(spans, {
      color: "#000000",
      stagger: 0.02,
      duration: 0.2,
      ease: "power1.out",
    });

    // Step 2: small pause
    tl.to({}, { duration: 0.5 });

    // Step 3: Zoom animation
    tl.to(
      textRef.current,
      {
        scale: 20, // gradually zoom
        transformOrigin: "center center",
        ease: "none",
      },
      "+=0"
    );

    // Step 4: Fade screen to black
    tl.to(
      overlayRef.current,
      {
        opacity: 1, // fully black
        ease: "none",
      },
      "<" // start fade at same time as zoom
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-screen h-screen flex items-center justify-center overflow-hidden relative"
    >
      {/* Black overlay */}
      <div
        ref={overlayRef}
        className="absolute top-0 left-0 w-full h-full bg-black opacity-0 pointer-events-none z-50"
      ></div>

      {/* Text content */}
      <div
        ref={textRef}
        className="text-7xl font-bold text-center leading-tight flex flex-col space-y-4 z-10"
      >
        {lines.map((line, idx) => (
          <div key={idx}>
            {line.split("").map((letter, index) => (
              <span key={index} className="text-gray-400">
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceHero;
