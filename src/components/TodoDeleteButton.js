import React from 'react';

// Redux
import { connect } from 'react-redux';
import { deleteTodoFun } from '../js/actionsCreator/index';

// Bootstrap
import Button from 'react-bootstrap/Button';

function TodoDeleteButton({id, deleteTodo}) {
  return (
   <Button 
      variant="danger" 
      className="ml-2" 
      onClick={() => deleteTodo(id)}
    >Delete</Button>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: id => dispatch(deleteTodoFun({id: id}))
  };
};


export default connect(null, mapDispatchToProps)(TodoDeleteButton);
