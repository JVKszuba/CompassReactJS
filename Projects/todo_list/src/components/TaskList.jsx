import Task from "./Task.jsx";

function TaskList({tasks, onRemoveTask, onToggleTask}) {

    if (tasks.length === 0) {

        return <h3>No tasks registered</h3>;
    }

    return (
        <ul>
            {tasks.map((task) => (
                <Task
                    key = {task.id}
                    task = {task}
                    onRemove = {() => onRemoveTask(task.id)}
                    onToggle = {() => onToggleTask(task.id)}
                />
            ))}
        </ul>
    );
}

export default TaskList;