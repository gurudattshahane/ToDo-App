import './TaskList.css';
import Task from './Task';
import taskData from '../data/exampleTasks';
import CreateTaskButton from './CreateTaskButton';
import { useState } from 'react';

export default function TaskList(){

    const [Tasks, setTasks] = useState(taskData);
    const [isEditable, setEditable] = useState(false);
    function createTask(e){
        if(isEditable) return;

        setEditable(true);
        Tasks.splice(0,0, {id: Tasks.length + 1, title: "Title", body: "Add task here..."});
        setTasks([...Tasks]);
        console.log(Tasks);
        console.log('Added Task');
    }
    function saveTask(e){
        if(!isEditable) return;
        let title = document.querySelector('input.task-title').value;
        let body = document.querySelector('textarea.task-body').value;
        if(title === '' || body === '') return;
        setEditable(false);
        Tasks[0].title = title;
        Tasks[0].body = body;
        setTasks([...Tasks]);
    }

    return (
        <div className="task-list-container">
            <div className="task-list__heading">
                <h2>Tasks</h2>
                <CreateTaskButton onSmash={createTask}>Create Task</CreateTaskButton>
            </div>
            <div className="task-list">
                {/* Used dummy task data for initialization*/}
                {
                    Tasks.map((task, index)=>(
                        <Task key={task.id} Title={task.title} Body={task.body} isEditable={index === 0?isEditable: false} onSave={saveTask}/>
                    ))
                }
            </div>
        </div>    
    );
}