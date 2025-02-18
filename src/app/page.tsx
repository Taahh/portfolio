"use client";
import { Cabin, Cairo, Inter } from "next/font/google";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { useRouter } from "next/navigation";

const CAIRO = Cairo({
  weight: "400",
  subsets: [
    "latin"
  ]
});

const CABIN_MEDIUM = Cabin({
  weight: "500",
  subsets: [
    "latin"
  ]
});

const CABIN_BOLD = Cabin({
  weight: "700",
  subsets: [
    "latin"
  ]
});

const INTER_BOLD = Inter({
  weight: "900",
  subsets: [
    "latin"
  ]
});

const skills: string[] = [
  "C#",
  "C++",
  "Java",
  "Kotlin",
  "Rust",
  "TypeScript",
  "JavaScript",
  "Lua",
  "HTML",
  "Sockets",
  "Full-Stack",
  "Backend",
  "Frontend",
  "System Design",
  "Gameplay Programming",
  "Agile Methodologies",
  "DevOps",
  "RESTful APIs",
  "Databases",
  "Networking",
  "Packets",
  "Data Analysis",
  "Git"
];

const items = {
  projects: [
    {
      name: "OurSearch",
      tags: [
        "React.JS",
        "Java",
        "Spring Boot",
        "Docker",
        "Firebase",
        "JSON"
      ],
      description:
        "A platform to conceptualize a multiplayer mode of playing LeetCode using Docker containers for code execution, authentication through Firebase, and Spring Boot for frontend to backend communication."
    },
    {
      name: "Top Down Game",
      tags: [
        "Arduino",
        "C++"
      ],
      description:
        "An embedded systems project using custom-drawn sprites to create a pixelated top-down game using C++ without Arduino library."
    },
    {
      name: "Crewmate",
      tags: [
        "Netty",
        "Kotlin",
        "UDP Sockets",
        "JSON"
      ],
      description:
        "A networking project that implemented Among Us's matchmaking server that communicates between the server and client using packets, also featuring plug-in support and custom API."
    }
  ],
  experiences: [
    {
      name: "Big Tech",
      tags: [
        "SWE Intern"
      ],
      description: "Description coming soon..."
    },
    {
      name: "University of California, Riverside",
      tags: [
        "Research Software Developer",
        "Next.JS",
        "PostgreSQL",
        "OAuth2",
        "TailwindCSS",
        "MongoDB"
      ],
      description:
        "Developed a full-stack Next.JS portal to assist researchers in managing their Data Management Plans, utilizing MongoDB for storage and Firebase + Next-Auth for Authentication, with automated deployment of requested GCP instances using CSV files and Bash Scripts."
    },
    {
      name: "Socksfor1, LLC",
      tags: [
        "Software Engineer",
        "Redis",
        "Linux",
        "Spigot",
        "Java",
        "MariaDB",
        "MongoDB",
        "Spring Boot"
      ],
      description:
        "Deployed a ticketing system to assist community staff to moderate a community of 60,000+ members, created in-game experiences for over 1,000+ players, and implemented load-balancing for matchmaking services for in-game experiences."
    }
  ]
};

export default function Home() {
  const router = useRouter();
  return (
    <div className="text-white ml-6 mt-6 w-full">
      <p className={`${CAIRO.className} text-white lg:text-2xl text-xl`}>
        taah.dev
      </p>
      <div className={"lg:ml-16 mt-12 flex flex-col lg:gap-y-4 gap-y-3 w-full"}>
        <p className={`lg:text-3xl text-2xl ${CABIN_MEDIUM.className}`}>
          hey! i&apos;m
        </p>
        <p className={`lg:text-5xl text-4xl ${CABIN_BOLD.className}`}>
          TAAHA SAYED
        </p>
        <p
          className={`lg:text-3xl text-2xl ${CABIN_MEDIUM.className} lg:ml-16 ml-8`}
        >
          a <span className="text-[#E95656]">full-stack</span> developer
        </p>
        <p className={`text-md lg:w-4/12 w-10/12`}>
          I am a current third-year Student Research Software Developer at the
          University of California, Riverside! I do freelance work and dabble in
          game development and networking projects.
        </p>
        <button
          className={`w-24 mt-2 bg-[#38609B] hover:bg-[#2f5691] transition-all delay-50 hover:scale-110 h-10 rounded-md flex items-center pl-4 gap-x-4`}
          onClick={() => router.push("https://ucr1337.taah.dev/Taahas_Resume.pdf")}
        >
          <Download />
          CV
        </button>
      </div>
      <div
        className={`lg:m-0 mt-12 flex flex-col w-full lg:items-center gap-y-6`}
      >
        <p className={`${INTER_BOLD.className} text-4xl`}>CONCEPTS</p>
        <div className="bg-[#D9D9D9] block lg:w-1/2 w-10/12 h-[11px]"></div>
        <ul className="flex flex-wrap gap-x-4 lg:w-5/12 w-10/12 justify-center gap-y-2">
          {skills.map((val, key) => {
            return <li key={key}>{val}</li>;
          })}
        </ul>
      </div>
      <div className="lg:flex justify-between mt-12 mb-24">
        <div
          className={`flex flex-col lg:items-start lg:w-4/12 w-full gap-y-6 mr-12`}
        >
          <p className={`${INTER_BOLD.className} text-4xl`}>PROJECTS</p>
          <div className="bg-[#D9D9D9] block lg:w-full w-10/12 h-[11px]"></div>
          <ul className="flex flex-col w-full gap-y-4">
            {items.projects.map((val, key) => {
              return (
                <div key={key} className="flex flex-col gap-y-4">
                  <h1 className={`${INTER_BOLD.className} text-2xl`}>
                    {val.name}
                  </h1>
                  <ul className="flex gap-x-2 lg:flex-nowrap flex-wrap lg:gap-y-0 gap-y-2 lg:w-full w-9/12">
                    {val.tags.map((val1, key1) => {
                      return (
                        <li
                          key={key1}
                          className="w-18 bg-gray-700 px-3 h-8 flex items-center rounded-md"
                        >
                          {val1}
                        </li>
                      );
                    })}
                  </ul>
                  <p className="lg:w-full w-10/12">{val.description}</p>
                </div>
              );
            })}
          </ul>
        </div>
        <div
          className={`flex flex-col lg:items-start lg:w-4/12 w-full gap-y-6 mr-12 lg:mt-0 mt-12`}
        >
          <p className={`${INTER_BOLD.className} text-4xl`}>EXPERIENCES</p>
          <div className="bg-[#D9D9D9] block lg:w-full w-10/12 h-[11px]"></div>
          <ul className="flex flex-col w-full gap-y-4">
            {items.experiences.map((val, key) => {
              return (
                <div key={key} className="flex flex-col gap-y-4">
                  <h1 className={`${INTER_BOLD.className} text-2xl`}>
                    {val.name}
                  </h1>
                  <ul className="flex gap-x-2 flex-wrap gap-y-2 lg:w-full w-11/12">
                    {val.tags.map((val1, key1) => {
                      return (
                        <li
                          key={key1}
                          className="w-18 bg-gray-700 px-3 h-8 flex items-center rounded-md"
                        >
                          {val1}
                        </li>
                      );
                    })}
                  </ul>
                  <p className="lg:w-full w-10/12">{val.description}</p>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-4 mb-5">
        <FaYoutube
          size={60}
          onClick={() => router.push("https://youtube.com/taahh")}
          className="bg-[#904128] transition-all delay-50 hover:scale-105 hover:bg-[#7d361f] cursor-pointer p-2 flex items-center rounded-2xl"
        />
        <FaLinkedin
          size={60}
          onClick={() => router.push("https://linkedin.com/in/taaha-sayed")}
          className="bg-[#904128] transition-all delay-50 hover:scale-105 hover:bg-[#7d361f] cursor-pointer p-2 flex items-center rounded-2xl"
        />
        <FaGithub
          size={60}
          onClick={() => router.push("https://github.com/taahh")}
          className="bg-[#904128] transition-all delay-50 hover:scale-105 hover:bg-[#7d361f] cursor-pointer p-2 flex items-center rounded-2xl"
        />
      </div>
    </div>
  );
}
