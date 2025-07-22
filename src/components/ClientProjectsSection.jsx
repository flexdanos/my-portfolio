"use client";
import React from "react";
import { motion } from "framer-motion";

const ClientProjectsSection = () => {
  const clientProjects = [
    {
      id: 1,
      title: "Hospital Management System (HBMS)",
      technologies: ["React", "Django", "PostgreSQL"],
      duration: "14 months"
    },
    {
      id: 2,
      title: "Learning Management System (LMS)",
      technologies: ["React", "Node", "Express", "MongoDB"],
      duration: "6 months"
    },
    {
      id: 3,
      title: "Easy Movers Services",
      technologies: ["Next.js", "TypeScript", "Emailjs"],
      duration: "4 months"
    },
    {
        id: 4,
        title: "Kolula",
        technologies: ["React", "Node", "PostgreSQL", "RduxToolkit" ],
        duration: "13 months"
      },
      {
        id: 5,
        title: "Imperial shuttle",
        technologies: ["React", "Node", "PostgreSQL", "RduxToolkit" ],
        duration: "10 months"
      },
      {
        id: 6,
        title: "Komet",
        technologies: ["Nextjs", "Neon", "postgress db", "Geminia api" ],
        duration: "1 months"
      },
      {
        id: 7,
        title: "safe Report",
        technologies: ["Nextjs", "storyblok", "commence tools", "Magnolia" ],
        duration: "1 months"
      },
      {
        id: 8,
        title: "PickNDrop",
        technologies: ["React Native", "Django", "PostgreSQL", "RduxToolkit" ],
        duration: "1 months"
      },
  ];

  return (
    <section id="client-projects" className="py-16">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Client Projects
      </h2>
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-center text-gray-300 mb-8">
          I've had the privilege of working on several enterprise-level projects for prestigious clients. Due to confidentiality agreements, I cannot display the full details or screenshots of these projects. However, I can share some key information about my contributions:
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {clientProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-700/50 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-400">
                Duration: {project.duration}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientProjectsSection;
