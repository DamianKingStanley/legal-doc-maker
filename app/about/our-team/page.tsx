import Image from "next/image";
import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "King Damian",
    position: "Founder & CEO",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      github: "https://github.com/johndoe",
      instagram: "https://instagram.com/johndoe",
    },
  },
  {
    name: "Olaiya Mary",
    position: "Chief Technology Officer (CTO)",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/janesmith",
      twitter: "https://twitter.com/janesmith",
      github: "https://github.com/janesmith",
      instagram: "https://instagram.com/janesmith",
    },
  },
  {
    name: "Michael Johnson",
    position: "Senior Developer",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
      twitter: "https://twitter.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      instagram: "https://instagram.com/michaeljohnson",
    },
  },
  {
    name: "Emily Davis",
    position: "Junior Developer",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/emilydavis",
      twitter: "https://twitter.com/emilydavis",
      github: "https://github.com/emilydavis",
      instagram: "https://instagram.com/emilydavis",
    },
  },
  {
    name: "Sarah Lee",
    position: "UI/UX Designer",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/sarahlee",
      twitter: "https://twitter.com/sarahlee",
      github: "https://github.com/sarahlee",
      instagram: "https://instagram.com/sarahlee",
    },
  },
  {
    name: "David Wang",
    position: "Product Manager",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/davidwang",
      twitter: "https://twitter.com/davidwang",
      github: "https://github.com/davidwang",
      instagram: "https://instagram.com/davidwang",
    },
  },
  {
    name: "Olaiya Mary",
    position: "Content Writer",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/janesmith",
      twitter: "https://twitter.com/janesmith",
      github: "https://github.com/janesmith",
      instagram: "https://instagram.com/janesmith",
    },
  },
  {
    name: "Sophia Carter",
    position: "Marketing Manager",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/sophiacarter",
      twitter: "https://twitter.com/sophiacarter",
      github: "https://github.com/sophiacarter",
      instagram: "https://instagram.com/sophiacarter",
    },
  },
  {
    name: "Lucas Martin",
    position: "HR Manager",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/lucasmartin",
      twitter: "https://twitter.com/lucasmartin",
      github: "https://github.com/lucasmartin",
      instagram: "https://instagram.com/lucasmartin",
    },
  },
];

const OurTeam = () => {
  return (
    <section className="our-team bg-white ">
      <div className="relative w-full h-[400px]">
        <Image
          src="/images/our-team.png"
          alt="App Development"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover z-0"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 bg-black bg-opacity-40 p-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Our Team</h1>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-card bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {member.name}
              </h2>
              <p className="text-lg text-gray-500 mb-4">{member.position}</p>

              <div className="social-icons flex space-x-4">
                {member.socialLinks.linkedin && (
                  <a
                    href={member.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaLinkedin size={24} />
                  </a>
                )}
                {member.socialLinks.twitter && (
                  <a
                    href={member.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600"
                  >
                    <FaTwitter size={24} />
                  </a>
                )}
                {member.socialLinks.github && (
                  <a
                    href={member.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-gray-600"
                  >
                    <FaGithub size={24} />
                  </a>
                )}
                {member.socialLinks.instagram && (
                  <a
                    href={member.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-700"
                  >
                    <FaInstagram size={24} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
