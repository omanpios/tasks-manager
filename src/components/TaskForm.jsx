import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-500 p-10 mb-5 rounded-xl"
      >
        <h1 className="text-white pb-2 font-bold text-2xl">Create your task</h1>

        <input
          placeholder="Set your task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="rounded-md bg-slate-200 p-3 w-full mb-2"
        />
        <textarea
          placeholder="Describe your task"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="rounded-md bg-slate-200 p-3 w-full mb-2"
        />
        <button className="bg-blue-400 rounded-md pl-4 pr-4 py-1 mt-4 hover:bg-blue-700 text-white">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
