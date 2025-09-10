// ServicesSection.jsx
import React from "react";

const services = [
  {
    id: "001",
     title: (
    <>
      Art <br /> Direction
    </>
  ),
    description:
      "Our aim is to nurture brands and help them grow. And just like human brands need to grow.",
  },
  {
    id: "002",
    title: (
    <>
      Intetaction <br /> Design
    </>
  ),
    description:
      "Whether your inquiries are big or small, we're prepared to engage, focusing on complex problems.",
  },
  {
    id: "003",
     title: (
    <>
      Web & Mobile <br /> Development
    </>
  ),
    description:
      "Every opportunity comes with unique factors are the mainstream we can offer your brand.",
  },
  {
    id: "004",
     title: (
    <>
      Digital <br /> Marketing
    </>
  ),
    description:
      "We help create strategies that define your identity and position your brand in the right place.",
  },
  {
    id: "005",
     title: (
    <>
      Brand <br /> Guideline
    </>
  ),
    description:
      "Crafting compelling visuals and stories to strengthen engagement across all platforms.",
  },
];

const ServicesSection = () => {
  return (
    <section className=" text-white py-52">
       <hr className="border-t border-neutral-800" />
      <div className="divide-y divide-neutral-800 bg-gray-500">
        {services.map((service) => (
          <div
            key={service.id}
            className="grid grid-cols-1 md:grid-cols-12 items-center 
                       bg-black py-12 hover:px-10 
                       rounded-none hover:rounded-[130px] 
                       hover:border hover:border-neutral-800 
                       transition-all duration-500 ease-in-out"
          >
            {/* Column 1 → Number (span 3) */}
            <span className="col-span-12 md:col-span-2 text-white text-lg pl-4">
              {service.id}
            </span>

            {/* Column 2 → Title (span 5) */}
            <h2 className="col-span-12 md:col-span-7 text-3xl md:text-7xl font-bold leading-tight px-6 md:pr-60">
              {service.title}
            </h2>

            {/* Column 3 → Description (span 4) */}
            <p className="col-span-12 md:col-span-3 text-white text-lg leading-relaxed px-6">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <hr className="border-t border-neutral-800" />
    </section>
  );
};

export default ServicesSection;
