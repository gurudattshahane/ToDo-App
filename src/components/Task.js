export default function Task({ Title, Body, isEditable, onSave }) {
  return (
    <div className="task">
      {isEditable ? (
        <>
          <input className="task-title" placeholder="Title" />
          <textarea
            className="task-body"
            placeholder="Add more details..."
          ></textarea>
          <button className="save-btn" onClick={onSave}>
            Save
          </button>
        </>
      ) : (
        <>
          <h3 className="task-title">{Title}</h3>
          <pre className="task-body">{Body}</pre>
        </>
      )}
    </div>
  );
}
