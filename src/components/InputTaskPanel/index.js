import { AppBar, IconButton } from '@mui/material/'
import { Add as AddIcon } from '@mui/icons-material/'
import Toolbar from './styled-components/Toolbar'
import TaskInput from './styled-components/TaskInput'
import InputBase from '../base-components/InputBase'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'
import { tasksAction } from '../../store/tasks'

const TASK_TEXT_MAX_COUNT = 10

export default function InputTaskPanel() {
  const [taskText, setTaskText] = useState('')
  const dispatch = useDispatch()

  const onChangeHandler = (event) => {
    setTaskText(event.target.value)
  }

  const isButtonDisabled = taskText.length === 0

  const onClickHandler = () => {
    if (taskText === '') {
      return
    }
    if (taskText.length > TASK_TEXT_MAX_COUNT) {
      alert(`Please enter text with length upon to ${TASK_TEXT_MAX_COUNT}`)
      setTaskText('')
      return
    }
    dispatch(tasksAction.add({
      'id': uniqid(),
      'text': taskText,
      'completed': false,
    }))
    setTaskText('')
  }

  return (
    <AppBar position='static'>
      <Toolbar>
        <TaskInput>
          <InputBase
            placeholder='Input task text'
            value={taskText}
            onChange={onChangeHandler}
          />
        </TaskInput>
        <IconButton
          size='large'
          color='inherit'
          onClick={onClickHandler}
          disabled={isButtonDisabled}
        >
          <AddIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
