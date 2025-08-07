import {useState} from "react";

import TaskList from "./components/TaskList.jsx";
import TaskInput from "./components/TaskInput.jsx";

function App() {

    const [tasks, setTasks] = useState([]);

    const addTask = (text) => {

        setTasks([...tasks, {id: Date.now(), text: text, done: false}]);
    }

    const removeTask = (id) => {

        setTasks(tasks.filter((task) => task.id !== id));
    }

  return (
    <>
      <h1>To-Do List</h1>
      <TaskInput onAddTask = {addTask} />
      <TaskList tasks = {tasks} onRemoveTask = {removeTask} />
    </>
  )
}

export default App
