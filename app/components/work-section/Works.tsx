import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "LodeStar Links",
      gitLink: "https://github.com/abhichall/codeForGoodHackathon",
      about:
        "J.P Morgan Hackathon Winner - In works with non-profit organization to provide in-home care for youth in underpriveldged communities.",
      stack: [
        "next.js",
        "openai API",
        "deepgram API",
        "tailwindcss",
        "shad",
        "express",
      ],
      img: "/ll.png",
    },
    // {
    //   title: "Shortly",
    //   gitLink: "https://github.com/adex-hub/url-shortening-api-landing",
    //   about:
    //     "A link shortener for a fictional company that effectively shortens links and stores them. No matter how many links you shorten, you can revisit the site anytime to view and manage your previously shortened links.",
    //   stack: ["next.js", "typescript", "framer motion", "tailwindcss"],
    //   img: "/shortly.svg",
    // },
    // {
    //   title: "Where in the world",
    //   gitLink: "https://github.com/adex-hub/where-in-the-world",
    //   about:
    //     "A fun tool for checking information about any country in the world such as the country’s native name, currency, population,  border countries etc. It features dynamic routing for each country and theme switch.",
    //   stack: ["react", "react-router", "javascript", "tailwindcss"],
    //   img: "/witw.svg",
    // },
    // {
    //   title: "Multi-step form",
    //   gitLink: "https://github.com/adex-hub/multi-step-form-main",
    //   about:
    //     "This site features a clean, user-friendly multi-step form for subscribing to a gaming service. Users input personal info, select a plan (monthly or yearly), choose add-ons (online service, larger storage, customizable profile), and review the summary before confirming.",
    //   stack: ["html", "sass", "javascript", "ms clarity"],
    //   img: "/multistep.svg",
    // },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
