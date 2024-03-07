import { Typography } from '@mui/material/'
import { styled } from '@mui/material/styles'
import { deepPurple } from '@mui/material/colors'

export default styled(Typography)(({ color, textAlign, width }) => ({
  'color': color ?? deepPurple[900],
  'overflowWrap': 'break-word',
  'width': width ?? '100%',
  'textAlign': textAlign ?? 'start',
  'padding': '10px',
}))
