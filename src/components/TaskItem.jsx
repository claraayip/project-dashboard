export default function TaskItem({ task }) {
  let badgeClass = "badge todo";

  if (task.status === "Done") badgeClass = "badge done";
  else if (task.status === "In Progress") badgeClass = "badge progress";

  return (
    <div className="task">
      <span>{task.title}</span>
      <span className={badgeClass}>{task.status}</span>
    </div>
  );
}