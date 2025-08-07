
function Task({task, onRemove}) {

    return (
        <li>
          <span>{task.text}</span>
          <button onClick = {onRemove}>Remove</button>
        </li>
    );
}

export default Task;