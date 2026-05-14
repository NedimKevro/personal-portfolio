"use client";

import React, {useEffect, useState} from "react";
import {Menu, X} from "lucide-react";

const sections = ["about", "projects", "contact"];

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      if (window.scrollY > 12) {
        setMenuOpen(false);
      }
    };

    const handleClose = () => setMenuOpen(false);

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleClose);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleClose);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-6">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-3 transition-all md:px-6 ${
          scrolled
            ? "border-white/70 bg-[rgba(255,252,247,0.9)] shadow-[0_18px_50px_rgba(17,37,63,0.12)] backdrop-blur-xl"
            : "border-[rgba(24,33,47,0.08)] bg-[rgba(255,252,247,0.72)] backdrop-blur-lg"
        }`}
      >
        <a href="#about" className="flex items-center gap-3">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#11253f,#0f766e)] shadow-[0_10px_24px_rgba(17,37,63,0.22)]">
            <img
              src="/dev-icon-1.png"
              alt="Nedim Logo"
              width={26}
              height={26}
              className="object-contain"
            />
          </div>
          <div>
            <p className="font-[family:var(--font-space-grotesk)] text-lg font-semibold tracking-tight text-slate-900">
              Nedim Kevro
            </p>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Frontend Developer</p>
          </div>
        </a>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-2 rounded-full border border-[rgba(24,33,47,0.08)] bg-white/70 p-1">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className="block rounded-full px-4 py-2 text-sm font-medium capitalize text-slate-700 hover:bg-slate-900 hover:text-white"
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(17,37,63,0.16)] hover:bg-teal-700 md:inline-flex"
        >
          Let&apos;s talk
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex rounded-full border border-[rgba(24,33,47,0.12)] bg-white/80 p-2 text-slate-900 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>

      {menuOpen && (
        <div className="mx-auto mt-3 max-w-6xl md:hidden">
          <div
            className="rounded-[28px] border border-white/70 bg-[rgba(255,252,247,0.96)] p-4 shadow-[0_22px_50px_rgba(17,37,63,0.14)] backdrop-blur-xl">
            <nav aria-label="Mobile">
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium capitalize text-slate-800 hover:bg-slate-900 hover:text-white"
                    >
                      {section}
                      <span className="text-xs uppercase tracking-[0.22em]">go</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
