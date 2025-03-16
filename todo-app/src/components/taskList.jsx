import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, toggleComplete, editTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
