
import { Check, Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'
import { useState } from 'react';


export interface Task {
    id: string;
    name: string;
    isDone: boolean;
}

interface TaskProps {
    task: Task
    onRemoveTask: (taskId: string) => void;
    onMarkAsDone: (taskId: string) => void;
}

export function Task({task, onRemoveTask, onMarkAsDone}: TaskProps) {

    const [isChecked, setIsChecked] = useState(task.isDone);

    function handleCheck() {
        setIsChecked(!isChecked);
        onMarkAsDone(task.id);
    }

    function handleRemoveTask() {
        onRemoveTask(task.id);
    }

    return (
        <li>
            <div className={styles.taskContent}>
                <div className={styles.inputCheckbox}>
                    <input type="checkbox" checked={isChecked}/>
                    <label htmlFor="checkbox">
                        <div 
                            onClick={handleCheck} 
                            className={isChecked ? styles.inputChecked : styles.inputUnckeded}
                        >
                            {isChecked ? <Check weight="bold" /> : <></>}
                        </div>
                    </label>
                </div>
                <p className={task.isDone ? styles.taskDone : styles.taskNotDone}>{task.name}</p>
            </div>
            <button type='button' onClick={handleRemoveTask}>
                <Trash />
            </button>
        </li>
    )
}