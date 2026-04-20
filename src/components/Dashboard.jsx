import ProjectCard from "./ProjectCard";

export default function Dashboard({ projects, filter, role }) {
  return (
    <div className="grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          filter={filter}
          role={role}
        />
      ))}
    </div>
  );
}