import TodoApi from '../api/api'

import { GET_TODOS } from '../constants/action-types';
import { ADD_TODO } from '../constants/action-types';
import { EDIT_TODO } from '../constants/action-types';
import { DELETE_TODO } from '../constants/action-types';

const dispatchAction = (dispatch, type, payload) => {
  dispatch({
    type: type,
    payload: payload
  });
};

export function showTodos() {
  return dispatch => {
    TodoApi.get("todos")
      .then(response => dispatchAction(dispatch, GET_TODOS, response.data));
  }
}

export function addTodoFun(payload) {
  return dispatch => {
    TodoApi.post("todos", payload)
      .then(response => dispatchAction(dispatch, ADD_TODO, response.data));
    
  }
}

export function editTodoFun(payload) {
  return dispatch => {
    TodoApi.patch("todos/" + payload.id, payload.params)
      .then(response => dispatchAction(dispatch, EDIT_TODO, response.data));
  }
}

export function deleteTodoFun(payload) {
  return dispatch => {
    TodoApi.delete("todos/" + payload.id)
      .then(response => dispatchAction(dispatch, DELETE_TODO, payload));
  }
}

