import { useState } from "react";

function HoverCard({ item }) {
  const [hover, setHover] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="relative h-auto overflow-hidden  "
      style={{
        gridColumn: `${item.col} / span ${item.colSpan ?? 1}`,
        gridRow: `${item.row} / span ${item.rowSpan ?? 1}`,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={handleMove}
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-40 "
      />

      {/* Text always under image */}
      <div className="">
        <h3 className="text-2xl font-semibold">{item.title}</h3>
        <p className="text-gray-500 text-sm">{item.subtitle}</p>
      </div>

      {/* Visit Site button appears at cursor position */}
      {hover && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bg-white text-black  px-5 py-4 rounded-full pointer-events-none"
          style={{
            top: pos.y,
            left: pos.x,
            transform: "translate(-50%, -50%)",
          }}
        >
          Visit Project
        </a>
      )}
    </div>
  );
}

export default function PortfolioGrid() {
  const items = [
    { id: 1, title: "Kashtech Doyel", subtitle: "2025 — Design", link: "#", image: "https://wp.ravextheme.com/redox/wp-content/uploads/2025/03/ax-portfolio-01.webp", col: 1, row: 1 },
    { id: 2, title: "Saudi Lime Green", subtitle: "2025 — Design", link: "#", image: "	https://wp.ravextheme.com/redox/wp-content/uploads/2025/03/ax-portfolio-02.webp", col: 2, row: 1 },
    { id: 3, title: "Panda Automap", subtitle: "2025 — Design", link: "#", image: "	https://wp.ravextheme.com/redox/wp-content/uploads/2025/07/rd-ca-portfolio-st-01.webp", col: 4, row: 1 },
    { id: 4, title: "Saudi Venture Capital", subtitle: "2025 — Design", link: "#", image: "	https://wp.ravextheme.com/redox/wp-content/uploads/2025/04/ax-project-10.webp", col: 2, row: 2 },
    { id: 5, title: "Rebrand Lawberry", subtitle: "2025 — Design", link: "#", image: "	https://wp.ravextheme.com/redox/wp-content/uploads/2025/04/ax-project-11.webp", col: 3, row: 2 },
    { id: 6, title: "Selicon Cloud Cave", subtitle: "2025 — Design", link: "#", image: "	https://wp.ravextheme.com/redox/wp-content/uploads/2025/04/ax-project-12.webp", col: 1, row: 3 },
    { id: 7, title: "Mountain Upwork", subtitle: "2025 — Design", link: "#", image: "https://wp.ravextheme.com/redox/wp-content/uploads/2025/04/ax-project-13.webp", col: 3, row: 3 },
    { id: 8, title: "Blacky Motorola", subtitle: "2025 — Design", link: "#", image: "https://wp.ravextheme.com/redox/wp-content/uploads/2025/04/ax-project-14.webp", col: 4, row: 3 },
    { id: 9, title: "Panda Automap", subtitle: "2025 — Design", link: "#", image: "	https://wp.ravextheme.com/redox/wp-content/uploads/2025/04/ax-project-15.webp", col: 2, row: 4 },
    { id: 10, title: "Saudi Venture Capital", subtitle: "2025 — Design", link: "#", image: "	https://wp.ravextheme.com/redox/wp-content/uploads/2025/04/ax-project-16.webp", col: 3, row: 4 },
    { id: 11, title: "Rebrand Lawberry", subtitle: "2025 — Design", link: "#", image: "	https://wp.ravextheme.com/redox/wp-content/uploads/2025/04/ax-project-17.webp", col: 4, row: 4 },
    { id: 12, title: "Selicon Cloud Cave", subtitle: "2025 — Design", link: "#", image: "https://wp.ravextheme.com/redox/wp-content/uploads/2025/04/ax-project-18.webp", col: 3, row: 5 },
  ];

  return (
    <div className="px-5">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold mb-6">Selected</h2>
        <h2 className="text-3xl font-bold mb-6">Browse More (20)</h2>
        
      </div>

      {/* 4×4 grid */}
      <div className="grid grid-cols-4 gap-6 auto-rows-[200px] md:auto-rows-[240px]">
        {items.map((it) => (
          <HoverCard key={it.id} item={it} />
        ))}
      </div>
    </div>
  );
}
