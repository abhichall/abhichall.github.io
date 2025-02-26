"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/jpmc.jpg",
    jobTitle: "Incoming Software Engineering Intern",
    company: "J.P Morgan Chase & Co",
    jobType: "Internship",
    duration: "June 2025 - August 2025",
    stuffIDid: [],
  },
  {
    companyImg: "/jnj.jpeg",
    jobTitle: "Software Engineering Intern",
    company: "Johnson & Johnson",
    jobType: "Internship",
    duration: "July 2024 - January 2025",
    stuffIDid: [
      "Designed and optimized 8+ relational database schemas, reducing query response time by 40% and improving application performance by implementing efficient indexing strategies and normalized table structures using PostgreSQL",
      "Developed 5 RESTful API endpoints using Node.js and Express, handling concurrent user requests per minute with a  50%% uptime, resulting in a 30% reduction in client-server latency",
      "Developed and deployed secure authentication features using JWT (JSON Web Token) to safeguard user data and enhance security",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-linear-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
