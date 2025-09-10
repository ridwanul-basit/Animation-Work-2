import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  // Refs for Testimonials
  const testimonialCards = useRef([]);
  const testimonialContainer = useRef(null);

  // Refs for ServicesHero
  const heroContainerRef = useRef(null);
  const heroTextRef = useRef(null);

  // Refs for WorkSection
  const workContainerRef = useRef(null);
  const workImgRefs = useRef([]);
  const workButtonRef = useRef(null);

  // Testimonials Data
  const testimonials = [
    { name: 'Michael Mahanay', role: 'Designer', text: 'They took the time to understand my brand and target audience and developed a marketing strategy that perfectly captured our essence...' },
    { name: 'Daryl Mitchell', role: 'Lead Developer', text: 'Their mission is to empower the brands we believe in with tailor-made approaches that ignite creativity...' },
    { name: 'Tom Banton', role: 'Digital Marketer', text: 'Redox always eager to collaborate with forward-thinking individuals and organizations...' },
    { name: 'Lance Petter', role: 'Web Designer', text: 'Design is a team effort, and I believe in a true partnership...' },
  ];

  // ServicesHero Lines
  const heroLines = ["What services", "we provide you", "actually"];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // --- Testimonials Animation ---
      testimonialCards.current.forEach((card, index) => {
        gsap.set(card, { y: 300, opacity: 0, visibility: 'hidden' });
        gsap.to(card, {
          y: -20,
          opacity: 1,
          visibility: 'visible',
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play none reverse none',
            onEnter: () => gsap.to(card, { y: -20, duration: 0.5 }),
            onLeave: () => gsap.to(card, { opacity: 0, y: 0, visibility: 'hidden', duration: 0.5 }),
            onEnterBack: () => gsap.to(card, { opacity: 1, y: -20, duration: 0.5 }),
          },
          delay: index * 0.3,
        });
      });

      // --- ServicesHero Animation ---
      const heroTextEl = heroTextRef.current;
      const heroSpans = Array.from(heroTextEl.querySelectorAll("span"));

      const pinTrigger = ScrollTrigger.create({
        trigger: heroContainerRef.current,
        start: "top top",
        end: "max",
        pin: true,
        pinSpacing: false,
      });

      const revealTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroContainerRef.current,
          start: "top top",
          end: "+=300",
          scrub: 0.5,
        },
      });

      revealTl.fromTo(
        heroSpans,
        { color: "#cccccc" },
        { color: "#000000", stagger: 0.03, duration: 0.5, ease: "power1.out" }
      );

      const zoomTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroContainerRef.current,
          start: "+=300",
          end: "+=1200",
          scrub: true,
        },
      });

      zoomTl.to(heroTextEl, {
        scale: 2.5,
        transformOrigin: "center center",
        ease: "power2.out",
      });

      // --- WorkSection Animation ---
      const workImages = workImgRefs.current.filter((img) => img);
      if (workImages.length === 0) return;

      const workSt = ScrollTrigger.create({
        trigger: workContainerRef.current,
        start: "top 80%",
        end: "bottom -20%",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          let topCrop = 0;
          let bottomCrop = 0;

          if (progress <= 0.5) {
            topCrop = 50 * (1 - progress * 2);
            bottomCrop = 0;
          } else {
            topCrop = 0;
            const phaseProgress = (progress - 0.5) * 2;
            bottomCrop = 50 * gsap.parseEase("power1.out")(phaseProgress);
          }

          workImages.forEach((img) => {
            gsap.set(img, { clipPath: `inset(${topCrop}% 0% ${bottomCrop}% 0%)` });
          });

          if (workButtonRef.current) {
            gsap.to(workButtonRef.current, {
              y: -progress * 200,
              duration: 0.5,
              ease: "power1.out",
            });
          }
        },
      });

      ScrollTrigger.refresh();
    }, [testimonialContainer, heroContainerRef, workContainerRef]);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ServicesHero Section */}
      <section
        ref={heroContainerRef}
        className="w-screen h-screen flex items-center justify-center bg-gray-100 overflow-hidden"
      >
        <div
          ref={heroTextRef}
          className="text-7xl font-bold text-center leading-tight flex flex-col space-y-4"
        >
          {heroLines.map((line, idx) => (
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

      {/* WorkSection */}
      <section
        ref={workContainerRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 h-screen bg-black text-white relative py-10"
      >
        <div
          ref={workButtonRef}
          className="flex items-end p-8 transition-none"
        >
          <button className="border border-white px-8 py-6 rounded-full hover:bg-white hover:text-black">
            View All Work
          </button>
        </div>
        <div className="relative overflow-hidden">
          <img
            ref={(el) => (workImgRefs.current[0] = el)}
            src="https://wp.ravextheme.com/redox/wp-content/uploads/2025/04/ax-h2-about-02.webp"
            alt="Work 1"
            className="object-cover w-full h-full block"
            onLoad={() => ScrollTrigger.refresh()}
          />
        </div>
        <div className="relative overflow-hidden">
          <img
            ref={(el) => (workImgRefs.current[1] = el)}
            src="https://wp.ravextheme.com/redox/wp-content/uploads/2025/04/ax-h2-about-01.webp"
            alt="Work 2"
            className="object-cover w-full h-full block"
            onLoad={() => ScrollTrigger.refresh()}
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialContainer} className="py-20 px-5 bg-black">
        <h2 className="text-3xl font-bold text-center mb-10">Our Happy Clients</h2>
        <div className="grid grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (testimonialCards.current[index] = el)}
              className="testimonial-card bg-white p-6 rounded-lg flex flex-col justify-between h-72"
            >
              <div>
                <p className="text-black text-base leading-relaxed">{testimonial.text}</p>
              </div>
              <div className="flex items-center mt-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-black">{testimonial.name}</h3>
                  <p className="text-gray-600 italic">{testimonial.role}</p>
                </div>
                <span className="w-10 h-10 bg-gray-300 rounded-full ml-2 flex items-center justify-center">
                  <span className="text-gray-500 text-xl">"</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;