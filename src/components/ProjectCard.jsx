import TaskList from "./TaskList";

export default function ProjectCard({ project, filter, role }) {
  const total = project.tasks.length;
  const done = project.tasks.filter((t) => t.status === "Done").length;
  const progress = Math.round((done / total) * 100);

  return (
    <div className="card">
      <h2>{project.name}</h2>
      <p>Tim: {project.team.join(", ")}</p>

      <p>Progress: {progress}%</p>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {role === "admin" && (
        <button className="add-btn">+ Tambah Task</button>
      )}

      <TaskList tasks={project.tasks} filter={filter} />
    </div>
  );
}