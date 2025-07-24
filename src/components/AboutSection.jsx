"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="pl-2 list-disc">
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React Js/Ts</li>
        <li>Next Js/Ts</li>
        <li>React Native</li>
        {/* <li>Angular</li> */}
        <li>Node</li>
        <br></br>
        <li>Agile Methodology</li>
        <li>slack</li>
        <li>Git</li>
        <li>Vite</li>
        <li>npm</li>
        <li>Tailwind</li>
        <li>Postman</li>
        <li>Redux Toolkit</li>
        <li>Material UI</li>
        <li>Storyblok</li>
        <li>Neon</li>
        <li>Magnolia</li>
        <li>shadcn ui</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="pl-2 list-disc">
        <li>Takoradi Technical University</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="pl-2 list-disc">
        <li>AWS Cloud Practitioner</li>
        <li>fundamental Web Development </li>
        <li>Bachelor of Technology (Software Engineering)</li>
        <li>completion a hardware and networking camp</li>
      </ul>
    ),
  },
  {
    title: "Achievements/Awards",
    id: "awards",
    content: (
      <ul className="pl-2 list-disc">
        <li>Level 300 student of the year</li>
        <li>Deputy Organizer for the year</li>
        <li>Certificate of participating in Takoradi Technical University Hackathon</li>
        <li>La Plage Meta Verse Africa Digital Ambassador</li>
        <li>Certificate of Completion AWS Skill Builder Learner Guide</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="Professional portrait of Felix Osei Danso" />
        <div className="flex flex-col h-full mt-4 text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold text-white">About Me</h2>
          <p className="text-base lg:text-lg">
            I software developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript,TypeScript, React, Redux, Node.js, HTML, CSS, 
            and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("awards")}
              active={tab === "awards"}
            >
              {" "}
              Achievements/Awards{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
