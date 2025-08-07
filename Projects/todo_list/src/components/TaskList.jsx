import Task from "./Task.jsx";

function TaskList({tasks, onRemoveTask}) {

    return (
        <ul>
          {tasks.map((task) => (
              <Task
                  key = {task.id}
                  task = {task}
                  onRemove = {() => onRemoveTask(task.id)}
              />
          ))}
        </ul>
    );
}

export default TaskList;