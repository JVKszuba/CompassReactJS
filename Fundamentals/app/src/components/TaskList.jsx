function TaskList({tasks}) {

    if (!tasks) {

        return (
            <div>
                <p>No tasks to show</p>
            </div>
        );
    }

    return (
        <div>
            {tasks.map((task) => (<li key = {task.id}>{task.text}</li>))}
        </div>
    );
}

export default TaskList;