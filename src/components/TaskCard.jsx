import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-2 rounded-xl">
      <h2 className="text-xl capitalize font-bold">{task.title}</h2>
      <p className="text-gray-400 text-sm">{task.description}</p>{" "}
      <button
        className="bg-blue-400 rounded-md pl-4 pr-4 py-1 mt-4 hover:bg-blue-700"
        onClick={() => deleteTask(task.id)}
      >
        Complete task
      </button>
    </div>
  );
}

export default TaskCard;
