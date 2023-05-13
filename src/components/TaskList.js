import './TaskList.css';
import Task from './Task';

export default function TaskList(){
    return (
        <div className="task-list-container">
            <div className="task-list__heading">
                <h2>Tasks</h2>
            </div>
            <div className="task-list">
                {/* Example task */}
                <Task title="Title" body="Description"/>
            </div>
        </div>    
    );
}