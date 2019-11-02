import React from 'react';

// Redux
import { connect } from 'react-redux';
import { editTodoFun } from '../js/actionsCreator/index';

// Bootstrap
import Button from 'react-bootstrap/Button';

function TodoEditButton({id, done, editTodo}) {
  return (
    <Button variant={done ? "outline-success" : "outline-warning"} onClick={() => editTodo(id, {done: !done})}>{done ? "Uncomplete" : "Complete"}</Button>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    editTodo: (id, params) => dispatch(editTodoFun({id: id, params: params}))
  };
};


export default connect(null, mapDispatchToProps)(TodoEditButton);
