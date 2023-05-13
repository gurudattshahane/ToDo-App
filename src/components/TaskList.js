import './TaskList.css';
import Task from './Task';
import taskData from '../data/exampleTasks';

export default function TaskList(){
    return (
        <div className="task-list-container">
            <div className="task-list__heading">
                <h2>Tasks</h2>
            </div>
            <div className="task-list">
                {/* Used dummy task data for initialization*/}
                {
                    taskData.map((task, index)=>(
                        <Task key={task.id} title={task.title} body={task.body} />
                    ))
                }
            </div>
        </div>    
    );
}