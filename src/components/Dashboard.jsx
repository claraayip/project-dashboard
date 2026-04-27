import ProjectCard from "./ProjectCard";

export default function Dashboard({ projects }) {
  const allTasks = projects.flatMap((p) => p.tasks);

  const total = allTasks.length;
  const done = allTasks.filter(t => t.status === "Done").length;
  const progress = allTasks.filter(t => t.status === "In Progress").length;
  const todo = allTasks.filter(t => t.status === "To Do").length;

  return (
    <>
      {/* HEADER */}
      <div className="header">
        <h2>Hi, Volunteer 👋</h2>
        <p>Kelola kegiatan sosialmu hari ini</p>
      </div>

      {/* STATS */}
      <div className="stats">
        <div className="stat-box">Total Task: {total}</div>
        <div className="stat-box">Done: {done}</div>
        <div className="stat-box">In Progress: {progress}</div>
        <div className="stat-box">To Do: {todo}</div>
      </div>

      {/* PROJECT */}
      <div className="grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}