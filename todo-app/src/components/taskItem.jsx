import { useState } from "react";

const TaskItem = ({ task, deleteTask, toggleComplete, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.name);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleUpdate = () => {
    if (!newTask.trim() || !newDescription.trim()) return;
    editTask(task.id, newTask, newDescription);
    setIsEditing(false);
  };

  return (
    <li className={task.completed ? "completed" : ""}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <span onClick={() => toggleComplete(task.id)}>{task.name}</span>
          <p>{task.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
