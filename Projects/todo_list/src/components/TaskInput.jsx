import {useState} from "react";

function TaskInput({onAddTask}) {

    const [input, setInput] = useState('')

    const handleSubmit = (e) => {

        e.preventDefault();

        if (input.trim()) {

            onAddTask(input.trim());
            setInput('');
        }
    }

    return (
        <form onSubmit = {handleSubmit}>
          <input
              type = "text"
              value = {input}
              onChange={(e) => setInput(e.target.value)}
              placeholder = "Add a new task..."
          />
          <button type = "submit">Add Task</button>
        </form>
    );
}

export default TaskInput;