export default function CreateTaskButton({children, onSmash}) {
    return (
        <button onClick={onSmash}>{children}</button>
    );
}