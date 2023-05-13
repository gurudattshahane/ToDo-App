export default function Task({title, body}) {
  return (
    <div className="task">
      <h3 className="task-title">{title}</h3>
      <pre className="task-body">{body}</pre>
    </div>
  );
}
