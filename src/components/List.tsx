
import styles from './List.module.css'
import { Task } from './Task'
import Clipboard from '../assets/clipboard.svg'

interface ListProps {
    tasks: Task[];
    onRemoveTask: (taskId: string) => void;
    onMarkAsDone: (taskId: string) => void;
}

export function List({ tasks, onRemoveTask, onMarkAsDone }: ListProps) {

    const taskLength = tasks.length;
    const taskDone = tasks.filter(task => task.isDone).length;

    const taskDoneLabel = taskLength > 0 ? `${taskDone} de ${taskLength}` : '0'


    return (
        <div className={styles.listWrapper}>
            <div className={styles.listHeader}>
                <div className={styles.listTaskInfo}>
                    <strong>Tarefas criadas</strong>
                    <span>{taskLength}</span>
                </div>
                <div className={styles.listTaskDone}>
                    <strong>Concluídas</strong>
                    <span>{taskDoneLabel}</span>
                </div>
            </div>
            <ul>
                {tasks.length === 0 ? (

                    <div className={styles.emptyTask}>
                        <img src={Clipboard} />
                        <div>
                            <strong>Você ainda não tem tarefas cadastradas</strong>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    </div>
                    
                ) :
                    tasks.map((task) => (
                        <Task
                            key={task.id}
                            task={task}
                            onRemoveTask={onRemoveTask}
                            onMarkAsDone={onMarkAsDone}
                        />
                    ))
                }
            </ul>
        </div>
    )
}