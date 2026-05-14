"use client";

import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({title, description, image, tech, onClick}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group overflow-hidden rounded-[30px] border border-white/75 bg-[rgba(255,252,247,0.82)] text-left shadow-[0_22px_55px_rgba(17,37,63,0.1)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(17,37,63,0.16)]"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"/>
        <div
          className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white backdrop-blur">
          Case Study
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div>
          <h3
            className="font-[family:var(--font-space-grotesk)] text-2xl font-semibold tracking-[-0.04em] text-slate-950">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tech.slice(0, 3).map((item) => (
            <span
              key={item}
              className="rounded-full border border-[rgba(24,33,47,0.08)] bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-[rgba(24,33,47,0.08)] pt-4">
          <span className="text-sm font-semibold text-slate-900">View project details</span>
          <span
            className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white group-hover:bg-teal-700">
            Open
          </span>
        </div>
      </div>
    </button>
  );
};

export default ProjectCard;
