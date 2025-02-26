import { PlusCircle } from '@phosphor-icons/react'

import styles from './NewTaskForm.module.css'
import { ChangeEvent, useState } from 'react';

interface NewTaskFormProps {
    onNewTask: (taskName: string) => void; 
}

export function NewTaskForm({onNewTask}: NewTaskFormProps) {

    const [taskValue, setTaskValue] = useState('');

    function handleCreateTask(event: React.FormEvent) {
        event.preventDefault();
        onNewTask(taskValue);
        setTaskValue('');
    }
    
    function handleChangeValue(event: ChangeEvent<HTMLInputElement>) {
        setTaskValue(event.target.value);
    }

    return (
        <form className={styles.newTaskFormWrapper} onSubmit={handleCreateTask}>
            <input type="text" placeholder='Adicione uma nova tarefa' value={taskValue} onChange={handleChangeValue} required/>
            <button type='submit'>
                <strong>Criar</strong>
                <PlusCircle width={16}/>
            </button>
        </form>
    )
}