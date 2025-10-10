import React from "react";

const team = [
  {
    name: "James David",
    role: "CEO & Founder",
    image: "	https://wp.ravextheme.com/redox/wp-content/uploads/2025/04/team-1.webp",
  },
  {
    name: "Brenda C. Janet",
    role: "Lead Developer",
    image: "	https://wp.ravextheme.com/redox/wp-content/uploads/2025/04/team-2.webp",
  },
  {
    name: "Martin Carlos",
    role: "Lead Designer",
    image: "https://wp.ravextheme.com/redox/wp-content/uploads/2025/04/team-3.webp",
  },
  {
    name: "Garry J. Coburn",
    role: "Project Manager",
    image: "https://wp.ravextheme.com/redox/wp-content/uploads/2025/04/team-4.webp",
  },
];

const Team = () => {
  return (
    <div className="bg-[#faf7f5] h-screen py-32   ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md group "
          >
            {/* Image with hover zoom */}
            <div className="overflow-hidden ">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {/* Text */}
            <div className="p-4 ">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
