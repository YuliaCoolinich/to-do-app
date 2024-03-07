import { Box, Stack, Chip } from '@mui/material'
// import { Chip } from '@mui/material-next'
import Typography from '../base-components/Typography'
import { deepPurple } from '@mui/material/colors'
import { ALL, CURRENT, COMPLETED } from '../../constants/taskStatuses'

const SortingPanel = ({ filter, changeFilter, metaText }) => {
  const Chips = [{
    'name': ALL,
    'onClick': () => changeFilter(ALL),
  }, {
    'name': CURRENT,
    'onClick': () => changeFilter(CURRENT),
  }, {
    'name': COMPLETED,
    'onClick': () => changeFilter(COMPLETED),
  },
  ]
  return (
    <Box margin={3}>
        <Typography
          textAlign='center'
          key={'task-list-meta-data'}
          color={deepPurple[200]}>
            {metaText}
        </Typography>
        <Stack
        direction='row'
        spacing={2}
        width='auto'
        justifyContent='center'
        >
          {Chips?.map((chip) => {
            return (<Chip
             label={chip.name}
             key={chip.name}
             onClick={chip.onClick}
             variant={chip.name === filter ? 'filled' : 'default' }
             color={chip.name === filter ? 'secondary' : 'default' }
            />)
          })}
        </Stack>
    </Box>
  )
}

export default SortingPanel
