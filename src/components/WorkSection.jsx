// WorkSection.jsx
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkSection = () => {
  const containerRef = useRef(null);
  const imgRefs = useRef([]);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    imgRefs.current.forEach((img) => {
      if (!img) return;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top", // extended scroll range
        scrub: 0.5, // smooth scroll connection
        onUpdate: (self) => {
          const progress = self.progress; // 0 → 1

          // Top crop: 50% → 0%, then bottom crop: 0 → 50%
          let topCrop = Math.max(50 - progress * 100, 0);
          let bottomCrop = Math.max(progress * 100 - 50, 0);

          img.style.clipPath = `inset(${topCrop}% 0% ${bottomCrop}% 0%)`;

          // Move button proportionally to bottom crop
          if (buttonRef.current) {
            const moveY = bottomCrop * -1; // move up
            buttonRef.current.style.transform = `translateY(${moveY}px)`;
          }
        },
      });
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 h-screen bg-black text-white"
    >
      {/* Column 1 → Button at bottom */}
      <div ref={buttonRef} className="flex items-end p-8">
        <button className="border border-white px-8 py-6 rounded-full hover:bg-white hover:text-black transition">
          View All Work
        </button>
      </div>

      {/* Column 2 → Image */}
      <div className="relative overflow-hidden">
        <img
          ref={(el) => (imgRefs.current[0] = el)}
          src="https://wp.ravextheme.com/redox/wp-content/uploads/2025/04/ax-h2-about-02.webp"
          alt="Work 1"
          className="object-cover block"
        />
      </div>

      {/* Column 3 → Image */}
      <div className="relative overflow-hidden">
        <img
          ref={(el) => (imgRefs.current[1] = el)}
          src="https://wp.ravextheme.com/redox/wp-content/uploads/2025/04/ax-h2-about-01.webp"
          alt="Work 2"
          className="object-cover block"
        />
      </div>
    </section>
  );
};

export default WorkSection;
