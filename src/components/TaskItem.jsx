export default function TaskItem({ task }) {
  let statusClass = "task todo";
  let badgeClass = "badge todo";

  if (task.status === "Done") {
    statusClass = "task done";
    badgeClass = "badge done";
  } else if (task.status === "In Progress") {
    statusClass = "task progress";
    badgeClass = "badge progress";
  }

  return (
    <div className={statusClass}>
      <div>
        <strong>{task.title}</strong>
      </div>

      <span className={badgeClass}>{task.status}</span>
    </div>
  );
}