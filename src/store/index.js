import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './tasks'

const store = configureStore({
  'reducer': {
    'taskList': tasksReducer,
  },
})

export default store
