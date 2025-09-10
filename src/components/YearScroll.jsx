// YearScroll.jsx
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const YearScroll = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const firstRef = useRef(null); // 2017
  const workRef = useRef(null);  // WORK
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const text = textRef.current;
      const first = firstRef.current;
      const work = workRef.current;
      const content = contentRef.current;

      const sectionRight = sectionRef.current.getBoundingClientRect().right;
      const firstRight = first.getBoundingClientRect().right;
      const shift = sectionRight - firstRight;

      // Initial positions
      gsap.set(text, { x: shift });
      gsap.set(work, { x: "100%", scale: 1, y: 0 });

      const textWidth = text.getBoundingClientRect().width;
      const moveDistance = textWidth + 100;

      const sectionHeight = sectionRef.current.offsetHeight;

      // Timeline for scroll interaction
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2500",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Step 1: Move 2017-2025 out
      tl.to(text, { x: -moveDistance, ease: "none" }, 0);

      // Step 2: Bring WORK to center
      tl.to(work, { x: 0, ease: "power2.out" }, 0.3);

      // Step 3: Fade out the bottom-right content
      tl.to(content, { opacity: 0, ease: "power1.out" }, 0.3);

      // Step 4: Shrink WORK in size and move it down gradually
      tl.to(work, {
        scale: 0.1,
        y: sectionHeight / 2 - 50, // move down roughly to bottom
        transformOrigin: "center center",
        ease: "power2.out",
      }, 0.7);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#faf8f6]"
    >
      <div
        ref={textRef}
        className="flex text-[20vw] font-bold whitespace-nowrap will-change-transform leading-none"
      >
        <span ref={firstRef} className="px-10">
          2017
        </span>
        <span className="px-10">-</span>
        <span className="px-10">2025</span>
        <span
          ref={workRef}
          className="pr-10 pl-28"
          style={{ display: "inline-block" }}
        >
          WORK
        </span>
      </div>

      {/* Bottom-right content */}
      <div
        ref={contentRef}
        className="absolute bottom-12 right-52 max-w-md opacity-100 transition-opacity duration-500"
      >
        <p className="text-gray-700 text-lg">
          We help brands and people be part of the solution. As a cause-led
          branding and communications agency, we harness the power of technology
          and creativity to drive positive changes. Whether your inquiries are
          big or small, we're prepared to engage, focusing on complex problems.
        </p>
        <button className="mt-6 px-10 py-6 bg-black text-white rounded-full">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default YearScroll;
