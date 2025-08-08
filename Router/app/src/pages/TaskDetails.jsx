import { useParams } from "react-router-dom";

function TaskDetails() {

    const {taskId} = useParams();

    return (
        <div>
            <h2>Task {taskId} Detail</h2>
        </div>
    );
}

export default TaskDetails;