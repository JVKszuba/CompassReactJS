
function Task({task, onRemove, onToggle}) {

    return (
        <li>
          <span onClick = {onToggle} style={{textDecoration: task.done ? "line-through" : "none"}}>{task.text}</span>
          <button onClick = {onRemove}>Remove</button>
        </li>
    );
}

export default Task;