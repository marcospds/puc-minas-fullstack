export function DeleteItem({ onDelete, task }) {
    function handleOnDelete() {
        onDelete(task);
    }

    return (
        <input type="button" value="🗑️" onClick={handleOnDelete} style={{ border: 'none', background: 'transparent', cursor: 'pointer', fontSize: '15px' }} />
    )
}