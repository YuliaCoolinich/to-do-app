import { useState } from 'react'
import { useSelector } from 'react-redux'
import InputTaskPanel from '../InputTaskPanel'
import SortingPanel from '../SortingPanel'
import TasksList from '../TasksList'
import { ALL, CURRENT, COMPLETED } from '../../constants/taskStatuses'

function getFilteredTaskList(tasksList, filter) {
  switch (filter) {
    case (ALL): { return tasksList }
    case (CURRENT): { return tasksList.filter((task) => !task.completed) }
    case (COMPLETED): { return tasksList.filter((task) => task.completed) }
    default: { throw new Error('Incorrect task status is used') }
  }
}
function getMetaText(taskCount, filter) {
  const taskText = taskCount === 1 || taskCount === 0 ? 'task' : 'tasks'
  switch (filter) {
    case (ALL): {
      return `Total count of tasks is ${taskCount}.`
    }
    case (CURRENT): {
      return `You have ${taskCount} ${taskText} to complete.`
    }
    case (COMPLETED): {
      return `You have already completed ${taskCount} ${taskText}.`
    }
    default: {
      throw new Error('Incorrect task status is used')
    }
  }
}
const TodoContainer = () => {
  const [filter, setFilter] = useState(ALL)
  const tasksList = useSelector((state) => state.taskList)
  let filteredTaskList, metaText
  try {
    filteredTaskList = getFilteredTaskList(tasksList, filter)
    metaText = getMetaText(filteredTaskList.length, filter)
  } catch (error) {
    console.error(error.message)
  }

  return (
   <>
     <InputTaskPanel />
     <SortingPanel
       filter={filter}
       changeFilter={setFilter}
       metaText={metaText}
      />
     <TasksList tasksList={filteredTaskList} />
   </>
  )
}

export default TodoContainer
