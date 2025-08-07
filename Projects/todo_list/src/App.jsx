import {useEffect, useState} from "react";

import TaskList from "./components/TaskList.jsx";
import TaskInput from "./components/TaskInput.jsx";

function App() {

    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

    useEffect(() => {

        localStorage.setItem("tasks", JSON.stringify(tasks));

    }, [tasks]);

    const addTask = (text) => {

        setTasks([...tasks, {id: Date.now(), text: text, done: false}]);

        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    const removeTask = (id) => {

        setTasks(tasks.filter((task) => task.id !== id));
    }

    const toggleTask = (id) => {

        setTasks(tasks.map((task) => task.id === id ? {...task, done: !task.done} : task));
    }

  return (
    <>
      <h1>To-Do List</h1>
      <TaskInput onAddTask = {addTask} />
      <TaskList tasks = {tasks} onRemoveTask = {removeTask} onToggleTask = {toggleTask} />
    </>
  )
}

export default App
