import React from 'react';

// Components
import TodoDeleteButton from './TodoDeleteButton'
import TodoEditButton from './TodoEditButton'

// Redux
import { connect } from 'react-redux';

function TodoList({todos}) {
  return (
    <tbody>
      {todos.map((todo, index) =>
        <tr key={index}>
          <td>{todo.name}</td>
          <td>{todo.description}</td>
          <td className="text-center w-25"> 
            <TodoEditButton id={todo._id} done={todo.done} />
            <TodoDeleteButton id={todo._id}/>
          </td>
        </tr> 
      )}
    </tbody>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};


export default connect(mapStateToProps)(TodoList);
