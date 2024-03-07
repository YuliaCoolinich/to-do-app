import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const tasksSlice = createSlice({
  'name': 'tasks',
  initialState,
  'reducers': {
    add(state, action) {
      state.push(action.payload)
    },
    statusChange(state, action) {
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, 'completed': !task.completed }
        }
        return task
      })
    },
  },
})

export const tasksAction = tasksSlice.actions
export default tasksSlice.reducer
