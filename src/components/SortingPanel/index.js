import { Box, Stack, Chip } from '@mui/material'
// import { Chip } from '@mui/material-next'
import Typography from '../base-components/Typography'
import { deepPurple } from '@mui/material/colors'

const SortingPanel = () => {
  return (
    <Box margin={3}>
        <Typography
          textAlign='center'
          color={deepPurple[100]}>
            You have N task
        </Typography>
        <Stack
        direction='row'
        spacing={2}
        width='auto'
        justifyContent='center'
        >
            <Chip
            label='All'
            onClick={() => console.log('filter all tasks')}
            variant='filled'
            color='secondary'
            />
            <Chip
            label='Current'
            onClick={() => console.log('filter current tasks')}
            color='default'
            />
            <Chip
            label='Completed'
            onClick={() => console.log('filter completed tasks')}
            color='default'
            />
        </Stack>
    </Box>
  )
}

export default SortingPanel
