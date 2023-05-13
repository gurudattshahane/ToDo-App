import './TaskList.css';

export default function TaskList(){
    return (
        <div className="task-list-container">
            <div className="task-list__heading">
                <h2>Tasks</h2>
            </div>
            <div className="task-list">
                {/* Example task */}
                <div className="task">
                    <h3 className='task-title'>Title</h3>
                    <pre className='task-body'>Description</pre>
                </div>
            </div>
        </div>    
    );
}