import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const cards = useRef([]);

  const testimonials = [
    { name: 'Michael Mahanay', role: 'Designer', text: 'They took the time to understand my brand and target audience and developed a marketing strategy that perfectly captured our essence...' },
    { name: 'Daryl Mitchell', role: 'Lead Developer', text: 'Their mission is to empower the brands we believe in with tailor-made approaches that ignite creativity...' },
    { name: 'Tom Banton', role: 'Digital Marketer', text: 'Redox always eager to collaborate with forward-thinking individuals and organizations...' },
    { name: 'Lance Petter', role: 'Web Designer', text: 'Design is a team effort, and I believe in a true partnership...' },
  ];

  useEffect(() => {
    cards.current.forEach((card, index) => {
      // Set initial state to hidden and below screen
      gsap.set(card, { y: 300, opacity: 0, visibility: 'hidden' });

      gsap.to(card, {
        y: -20, // Move slightly up after entering
        opacity: 1,
        visibility: 'visible', // Make visible when animated
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: 'top 90%', // Start when card is 90% in view
          end: 'bottom 10%', // End when card is 10% from bottom of viewport
          toggleActions: 'play none reverse none', // Play on enter, reverse on leave
          onEnter: () => {
            gsap.to(card, { y: -20, duration: 0.5 });
          },
          onLeave: () => {
            gsap.to(card, { opacity: 0, y: 0, duration: 0.5, visibility: 'hidden' }); // Explicitly hide on leave
          },
          onEnterBack: () => {
            gsap.to(card, { opacity: 1, y: -20, duration: 0.5, visibility: 'visible' });
          },
          onLeaveBack: () => {
            gsap.to(card, { opacity: 0, y: 0, duration: 0.5, visibility: 'hidden' });
          },
        },
        delay: index * 0.3, // Sequential delay for one-by-one entry
      });
    });

    // Cleanup ScrollTrigger instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen p-5 bg-black">
      <div className="grid grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            ref={(el) => (cards.current[index] = el)}
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
    </div>
  );
};

export default Testimonials;