import { Paper as MuiPaper } from '@mui/material/'
import { styled } from '@mui/material/styles'

export default styled(MuiPaper)(({ theme }) => ({
  ...theme.typography.body2,
  'color': theme.palette.text.secondary,
  'height': 60,
  'lineHeight': '60px',
  'margin': '15px',
  'display': 'flex',
  'flexDirection': 'row',
  'flexWrap': 'wrap',
  'justifyContent': 'start',
  'alignContent': 'center',
  'padding': '1em',
}))
