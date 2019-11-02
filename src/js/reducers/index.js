import { GET_TODOS } from '../constants/action-types'
import { ADD_TODO } from '../constants/action-types'
import { EDIT_TODO } from '../constants/action-types'
import { DELETE_TODO } from '../constants/action-types'

const initialState = {
  todos: []
};

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        todos: action.payload
      }
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat(action.payload) 
      }
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo._id === action.payload._id) {
            todo.done = !todo.done
          }
          return todo;
        })
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload.id)
      }
    default:
      return state;
  }
};

export default todosReducer;
