import { Typography } from '@mui/material/'
import { styled } from '@mui/material/styles'
import { deepPurple } from '@mui/material/colors'

export default styled(Typography)(({ color, textAlign, width, cursor }) => ({
  'color': color ?? deepPurple[900],
  'overflowWrap': 'break-word',
  'width': width ?? '100%',
  'textAlign': textAlign ?? 'start',
  'padding': '10px',
  'cursor': cursor ? 'pointer' : 'text',
}))
