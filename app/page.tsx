"use client";

import React from "react";
import ContactForm from "@/app/components/ContactMe-Section/ContactForm";
import {Header} from "@/app/components/Header";
import ProjectsSection from "@/app/components/Project-Section/ProjectSection";
import {projectData} from "@/app/components/Project-Section/projects";

const stats = [
  {value: "2+", label: "Production projects shipped"},
  {value: "5", label: "Core technologies across the stack"},
  {value: "100%", label: "Focus on clean UI and clarity"},
];

const specialties = [
  "Responsive interfaces",
  "Design systems",
  "Dashboard UX",
  "Frontend architecture",
];

export default function Home() {
  return (
    <div className="relative overflow-x-hidden text-slate-900">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.72),transparent_56%)]"/>
      <Header/>

      <main className="px-4 pb-12 pt-24 md:px-6 md:pt-28">
        <section id="about" className="mx-auto flex min-h-screen max-w-6xl scroll-mt-28 items-center md:scroll-mt-32">
          <div className="grid w-full gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-8">
              <div
                className="inline-flex items-center gap-3 rounded-full border border-white/70 bg-[rgba(255,252,247,0.88)] px-4 py-2 text-sm text-slate-700 shadow-[0_12px_30px_rgba(17,37,63,0.08)] backdrop-blur">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"/>
                Available for freelance and product-focused frontend work
              </div>

              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.34em] text-teal-700">Nedim Kevro</p>
                <h1
                  className="max-w-4xl font-[family:var(--font-space-grotesk)] text-5xl font-bold leading-none tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl">
                  Building polished interfaces that feel clear, fast, and premium.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
                  I&apos;m a frontend developer focused on clean implementation, scalable UI systems, and digital
                  products
                  that turn complex workflows into intuitive experiences.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(17,37,63,0.18)] hover:bg-teal-700"
                >
                  Explore projects
                </a>
                <a
                  href="/NedimKevroCV.pdf"
                  download
                  className="inline-flex items-center justify-center rounded-full border border-[rgba(24,33,47,0.14)] bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-900 hover:border-slate-900 hover:bg-white"
                >
                  Download CV
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[28px] border border-white/75 bg-[rgba(255,252,247,0.82)] p-5 shadow-[0_16px_35px_rgba(17,37,63,0.08)] backdrop-blur"
                  >
                    <p
                      className="font-[family:var(--font-space-grotesk)] text-3xl font-bold tracking-[-0.04em] text-slate-950">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 translate-x-5 translate-y-5 rounded-[32px] bg-[linear-gradient(145deg,rgba(15,118,110,0.18),rgba(226,155,68,0.18))] blur-2xl"/>
              <div
                className="relative overflow-hidden rounded-[32px] border border-white/75 bg-[rgba(255,252,247,0.84)] p-7 shadow-[0_28px_70px_rgba(17,37,63,0.12)] backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Current focus</p>
                    <h2
                      className="mt-2 font-[family:var(--font-space-grotesk)] text-3xl font-bold tracking-[-0.04em] text-slate-950">
                      Modern frontend craft
                    </h2>
                  </div>
                  <div
                    className="rounded-full border border-[rgba(24,33,47,0.08)] bg-white/80 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-500">
                    2026
                  </div>
                </div>

                <p className="mt-6 text-base leading-7 text-slate-700">
                  I enjoy translating product goals into interfaces that look sharp, feel effortless, and stay
                  maintainable
                  as the product grows.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {specialties.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[rgba(24,33,47,0.08)] bg-white/80 px-4 py-4 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[28px] bg-slate-950 p-6 text-white">
                  <p className="text-sm uppercase tracking-[0.28em] text-white/60">What I care about</p>
                  <p className="mt-3 font-[family:var(--font-space-grotesk)] text-2xl font-semibold tracking-[-0.04em]">
                    Thoughtful visuals, reliable implementation, and experiences people enjoy using.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl scroll-mt-28 py-14 md:scroll-mt-32 md:py-20">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">Selected work</p>
              <h2
                className="mt-3 font-[family:var(--font-space-grotesk)] text-4xl font-bold tracking-[-0.05em] text-slate-950 sm:text-5xl">
                Interfaces designed to handle real product workflows.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-600">
              A snapshot of the product experiences I&apos;ve built, from operational dashboards to conversion-oriented
              landing pages.
            </p>
          </div>
          <ProjectsSection projects={projectData}/>
        </section>

        <section id="contact" className="mx-auto max-w-6xl scroll-mt-28 py-14 md:scroll-mt-32 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div
              className="rounded-[32px] border border-white/75 bg-[rgba(255,252,247,0.82)] p-8 shadow-[0_24px_60px_rgba(17,37,63,0.1)] backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">Contact</p>
              <h2
                className="mt-4 font-[family:var(--font-space-grotesk)] text-4xl font-bold tracking-[-0.05em] text-slate-950">
                Let&apos;s build something that feels sharp and useful.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-700">
                If you&apos;re working on a product, redesign, or frontend-heavy experience, I&apos;d be happy to hear
                what
                you&apos;re building.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-[rgba(24,33,47,0.08)] bg-white/85 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Best for</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Product UI, portfolio redesigns, landing pages, dashboard interfaces, and frontend polish.
                  </p>
                </div>
                <div className="rounded-2xl border border-[rgba(24,33,47,0.08)] bg-slate-950 p-4 text-white">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/60">Response style</p>
                  <p className="mt-2 text-sm leading-6 text-white/80">
                    Clear communication, thoughtful execution, and attention to the details users actually notice.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="rounded-[32px] border border-white/75 bg-[rgba(255,252,247,0.82)] p-3 shadow-[0_24px_60px_rgba(17,37,63,0.1)] backdrop-blur-xl sm:p-4">
              <ContactForm/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
