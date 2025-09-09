// TheatreCurtain.jsx
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const TheatreCurtain = ({ children }) => {
  const leftCurtain = useRef(null);
  const rightCurtain = useRef(null);

  useEffect(() => {
    // Animate curtains opening
    gsap.to(leftCurtain.current, { x: "-100%", duration: 2, ease: "power2.inOut" });
    gsap.to(rightCurtain.current, { x: "100%", duration: 2, ease: "power2.inOut" });
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh", overflow: "hidden" }}>
      {/* Curtains */}
      <div
        ref={leftCurtain}
        style={{
          position: "fixed", // stays fixed while revealing
          top: 0,
          left: 0,
          width: "50%",
          height: "100%",
          background: "white",
          zIndex: 10,
        }}
      />
      <div
        ref={rightCurtain}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          background: "white",
          zIndex: 10,
        }}
      />

      {/* Stage content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default TheatreCurtain;
