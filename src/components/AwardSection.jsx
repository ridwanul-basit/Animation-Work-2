// AwardsSection.jsx
import React from "react";

const awardsData = [
  {
    title: "Awwwards",
    items: [
      { text: "7x Honorable Mention", year: "2014" },
      { text: "4x Site of the Day", year: "2016" },
      { text: "2x Developer Awards", year: "2016" },
      { text: "1x Site of the Year", year: "2019" },
      { text: "1x Design of the Year", year: "2025" },
    ],
  },
  {
    title: "CSS Design",
    items: [
      { text: "2x Website of the Day", year: "2014" },
      { text: "1x Best Innovation", year: "2016" },
      { text: "5x UX Design", year: "2016" },
      { text: "6x Creative Design", year: "2019" },
    ],
  },
  {
    title: "Dribbble",
    items: [
      { text: "2x Design of the Day", year: "2014" },
      { text: "2x Site of the Day", year: "2016" },
    ],
  },
  {
    title: "Behance",
    items: [{ text: "5x Featured Design", year: "2025" }],
  },
];

const AwardsSection = () => {
  return (
    <section className="bg-[#f9f6f2] text-black py-20">
      <div className="max-w-5xl mx-auto ">
        <div className="grid grid-cols-3  gap-y-10">
            <div className="col-span-1"></div>
            <div className="col-span-2">
               <div className="grid grid-cols-3 gap-y-10">
          {awardsData.map((award, idx) => (
            <React.Fragment key={idx}>
              {/* Column 1 → Provider */}
              <div className="text-lg">{award.title}</div>

              {/* Column 2 → List of awards */}
              <div className="flex flex-col space-y-2 text-lg">
                {award.items.map((item, i) => (
                  <div key={i}>{item.text}</div>
                ))}
              </div>

              {/* Column 3 → Years */}
              <div className="flex flex-col space-y-2  text-lg text-right">
                {award.items.map((item, i) => (
                  <div key={i}>{item.year}</div>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
            </div>
        </div>
        
      </div>
    </section>
  );
};

export default AwardsSection;
