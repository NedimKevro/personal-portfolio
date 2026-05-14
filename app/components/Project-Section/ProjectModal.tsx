import {Dialog, Transition} from "@headlessui/react";
import React, {Fragment} from "react";
import {ArrowUpRight, X} from "lucide-react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import "swiper/css";

interface ProjectModalProps {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  description: string;
  images: string[];
  github?: string;
  tech: string[];
}

export default function ProjectModal({
  isOpen,
  closeModal,
  title,
  description,
  images,
  github,
  tech,
}: ProjectModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"/>
        <div className="fixed inset-0 overflow-y-auto px-4 py-6 md:px-6 md:py-10">
          <div className="mx-auto flex min-h-full max-w-5xl items-center justify-center">
            <Dialog.Panel
              className="w-full overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,#10223a_0%,#162a45_100%)] text-left text-white shadow-[0_30px_90px_rgba(0,0,0,0.35)] transition-all">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">Project spotlight</p>
                  <Dialog.Title as="h3"
                                className="mt-2 font-[family:var(--font-space-grotesk)] text-2xl font-bold tracking-[-0.04em] md:text-3xl">
                    {title}
                  </Dialog.Title>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
                >
                  <X size={20}/>
                </button>
              </div>

              <div className="grid gap-8 px-5 py-6 md:px-8 md:py-8 lg:grid-cols-[1.25fr_0.75fr]">
                <div className="space-y-5">
                  <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
                    <Swiper
                      modules={[Navigation, Pagination]}
                      navigation={{
                        nextEl: ".project-swiper-next",
                        prevEl: ".project-swiper-prev",
                      }}
                      pagination={{clickable: true}}
                      spaceBetween={16}
                      slidesPerView={1}
                    >
                      {images.map((src, i) => (
                        <SwiperSlide key={src}>
                          <img
                            src={src}
                            alt={`${title} screenshot ${i + 1}`}
                            className="h-full max-h-[460px] w-full object-cover"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <button
                      type="button"
                      className="project-swiper-prev rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
                    >
                      Prev
                    </button>
                    <button
                      type="button"
                      className="project-swiper-next rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
                    >
                      Next
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-sm leading-7 text-white/74">{description}</p>

                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/50">Tech stack</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/12 bg-white/6 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/75"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/50">Project summary</p>
                    <p className="mt-3 text-sm leading-7 text-white/72">
                      A frontend build centered on clarity, responsive layout behavior, and an interface that keeps the
                      product workflow easy to understand.
                    </p>
                  </div>

                  {github ? (
                    <a
                      href={github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-teal-300"
                    >
                      View GitHub Repository
                      <ArrowUpRight size={16}/>
                    </a>
                  ) : (
                    <p className="text-sm text-white/55">Source code is available on request.</p>
                  )}
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
