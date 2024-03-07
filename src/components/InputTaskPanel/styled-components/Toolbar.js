import { Toolbar as MuiToolbar } from '@mui/material/'
import { styled } from '@mui/material/styles'
import { deepPurple } from '@mui/material/colors'

export default styled(MuiToolbar)(() => ({
  'flexGrow': 1,
  'justifyContent': 'center',
  'backgroundColor': deepPurple[500],
}))
