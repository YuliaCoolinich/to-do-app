import { InputBase as MuiInputBase } from '@mui/material/'
import { styled } from '@mui/material/styles'

export default styled(MuiInputBase)(({ theme }) => ({
  'color': 'inherit',
  'width': '100%',
  '& .MuiInputBase-input': {
    'padding': theme.spacing(1, 1, 1, 0),
    'paddingLeft': '1em',
    'transition': theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      'width': '50ch',
      '&:focus': {
        'width': '52ch',
      },
    },
  },
}))
