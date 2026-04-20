import TaskItem from "./TaskItem";

export default function TaskList({ tasks, filter }) {
  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((t) => t.status === filter);

  return (
    <div>
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}