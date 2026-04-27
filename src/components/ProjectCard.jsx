import TaskList from "./TaskList";

export default function ProjectCard({ project }) {
  // hitung progress
  const total = project.tasks.length;
  const done = project.tasks.filter(t => t.status === "Done").length;
  const progress = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <div className="card">
      <h3>{project.name}</h3>
      <p>Tim: {project.team.join(", ")}</p>

      {/* PROGRESS BAR */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p>Progress: {progress}%</p>

      <button className="add-btn">+ Tambah Task</button>

      <TaskList tasks={project.tasks} />
    </div>
  );
}