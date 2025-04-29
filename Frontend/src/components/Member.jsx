import React from "react";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Product Manager",
    image: "", // Replace with actual path
  },
  {
    name: "Mark Smith",
    role: "Frontend Developer",
    image: "https://via.placeholder.com/280x369",
  },
  {
    name: "Sophie Turner",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/280x369",
  },
  {
    name: "John Doe",
    role: "Backend Developer",
    image: "https://via.placeholder.com/280x369",
  },
];

const Member = () => {
  return (
    <div className="flex flex-col items-center gap-16 px-4 py-24 max-w-[1440px] w-full mx-auto">
      {/* Upper Container */}
      <div className="flex flex-col items-center gap-10 w-full">
        <h2 className="text-[#E63F31] text-center font-semibold text-[36px] leading-[44px] tracking-[-0.72px] font-['Plus Jakarta Sans']">
          Meet our team
        </h2>
        <p className="text-[#475467] text-center font-normal text-[20px] leading-[30px] font-['Plus Jakarta Sans'] max-w-3xl">
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers you to do your best work.
        </p>
      </div>

      {/* Lower Container */}
      <div className="flex flex-wrap justify-center gap-10 w-full px-4">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="w-[280px] h-[369px] rounded-[12px] bg-cover bg-center flex flex-col justify-end text-white p-4 relative overflow-hidden"
            style={{ backgroundImage: `url(${member.image})` }}
          >
            <div className="absolute inset-0 bg-black/40 z-0 rounded-[12px]" />
            <div className="z-10 relative">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Member;
