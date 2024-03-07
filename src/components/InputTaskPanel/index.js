import { AppBar, IconButton } from '@mui/material/'
import { Add as AddIcon } from '@mui/icons-material/'
import Toolbar from './styled-components/Toolbar'
import TaskInput from './styled-components/TaskInput'
import InputBase from '../base-components/InputBase'

export default function InputTaskPanel() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <TaskInput>
          <InputBase placeholder='Input task text' />
        </TaskInput>
        <IconButton size='large' color='inherit'>
          <AddIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
