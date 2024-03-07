import { Grid, Box } from '@mui/material/'
import Item from '../base-components/PaperBase'
import Checkbox from '../base-components/Checkbox'
import Typography from '../base-components/Typography'
import { useDispatch } from 'react-redux'
import { tasksAction } from '../../store/tasks'

const TasksList = ({ tasksList }) => {
  const dispatch = useDispatch()
  const onCheckHandler = (id) => {
    dispatch(tasksAction.statusChange({ id }))
  }
  return (
    <Grid container width='auto' spacing={1} justifyContent='space-around'>
        <Grid item xs={6}>
            <Box sx={{ 'p': 4 }}>
                {tasksList?.length === 0
                  ? <Typography
                    variant='body1'
                    component={'span'}>
                      No tasks yet
                  </Typography>
                  : tasksList?.map((itm) => (
                    <Item key={itm.id} elevation={24}>
                        <Checkbox
                          checked={itm.completed}
                          onClick={() => onCheckHandler(itm.id)}
                        />
                          <Typography
                            variant='h5'
                            component={'span'}
                            width='80%'
                            onClick={() => onCheckHandler(itm.id)}
                            cursor='pointer'
                            >
                            {itm.completed ? <s>{itm.text}</s> : itm.text}
                          </Typography>
                    </Item>
                  ))}
            </Box>
        </Grid>
    </Grid>
  )
}
export default TasksList
