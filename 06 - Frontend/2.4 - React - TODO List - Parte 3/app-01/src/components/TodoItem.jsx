import { DeleteItem } from "./DeleteItem";

export function TodoItem({ task, onCheck, onDelete }) {

    function handleOnChange(event) {
        onCheck({ ...task, isCompleted: event.target.checked });
    }

    return (
        <div className="task-item">
            <input type="checkbox" checked={task.isCompleted} onChange={handleOnChange} /> {task.name}
            <DeleteItem onDelete={onDelete} task={task} />
        </div>
    )
} 