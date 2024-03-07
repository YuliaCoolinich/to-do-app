import { Grid, Box } from '@mui/material/'
import Item from '../base-components/PaperBase'
import Checkbox from '../base-components/Checkbox'
import Typography from '../base-components/Typography'

const itemsList = [{
  'id': '01',
  'text': 'Task #1',
  'completed': true,
}, {
  'id': '02',
  'text': 'Lorem Ipsum is simply dummy text of the printing industry.',
  'completed': false,
}]

const onCheckHandler = (itm) => !itm.completed

const TasksList = () => {
  return (
    <Grid container width='auto' spacing={1} justifyContent='space-around'>
        <Grid item xs={6}>
            <Box sx={{ 'p': 4 }}>
                {itemsList.map((itm) => (
                    <Item key={itm.id} elevation={24}>
                        <Checkbox
                          checked={itm.completed}
                          onClick={() => onCheckHandler(itm)}
                        />
                          <Typography
                            variant='h5'
                            component={'span'}
                            width='80%'
                            >
                            {itm.completed ? <s>itemList.text</s> : itm.text}
                          </Typography>
                    </Item>
                ))}
            </Box>
        </Grid>
    </Grid>
  )
}
export default TasksList
