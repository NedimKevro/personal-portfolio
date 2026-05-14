import {useState} from "react";
import ProjectCard from "@/app/components/Project-Section/ProjectCard";
import ProjectModal from "@/app/components/Project-Section/ProjectModal";

type Project = {
  title: string;
  description: string;
  image: string;
  github?: string;
  tech: string[];
  images: string[];
};

const ProjectsSection = ({projects}: { projects: Project[] }) => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleCardClick = (idx: number) => {
    setSelected(idx);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} onClick={() => handleCardClick(idx)}/>
        ))}
      </div>

      {selected !== null && (
        <ProjectModal
          isOpen={true}
          closeModal={() => setSelected(null)}
          {...projects[selected]}
        />
      )}
    </>
  );
};

export default ProjectsSection;
