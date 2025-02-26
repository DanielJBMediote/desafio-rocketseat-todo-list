
import { v4 as uuidv4  } from 'uuid'
import { useState } from 'react'
import { Header } from './components/Header'
import { List } from './components/List'
import { NewTaskForm } from './components/NewTaskForm'
import { Task } from './components/Task'
import './globals.css'

// const defaultTasks: Task[] = [
//   {id: uuidv4(), name: 'Estudar React', isDone: false},
//   {id: uuidv4(), name: 'Estudar TypeScript', isDone: false},
//   {id: uuidv4(), name: 'Estudar CSS', isDone: false},
//   {id: uuidv4(), name: 'Estudar HTML', isDone: true},
//   {id: uuidv4(), name: 'Estudar JavaScript', isDone: true},
// ]


export function App() {

  const [tasks, setTask] = useState<Task[]>([]);


  function handleAddTask(taskName: string) {
    setTask(prevTask => {
      return [
        ...prevTask,
        {
          id: uuidv4(),
          name: taskName,
          isDone: false
    }]})
  }

  function handleRemoveTask(taskId: string) {
    setTask(prevTask => {
      return prevTask.filter(task => task.id !== taskId)
    })
  }

  function handleMarkTaskAsDone(taskId: string) {
    setTask(prevState => {
      return prevState.map(task => {
        if (task.id == taskId) {
          return { ...task, isDone: !task.isDone}
        } else {
          return task
        }
      })
    })
  }

  return (
    <div className="appContainer">
      <Header />
      <NewTaskForm onNewTask={handleAddTask}/>
      <List tasks={tasks} onRemoveTask={handleRemoveTask} onMarkAsDone={handleMarkTaskAsDone}/>
    </div>
  )
}
