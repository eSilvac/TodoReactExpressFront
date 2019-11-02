import React, { Component } from 'react';

// Redux
import { addTodoFun } from '../js/actionsCreator/index';
import { connect } from 'react-redux';

// Bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class TodoForm extends Component {
  constructor() {
    super();
    this.myChangeHandler = this.myChangeHandler.bind(this);
    
    this.state = {
      name: "",
      description: "",
      done: false
    }
  }

  myChangeHandler(event) {
    const inputValue = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    this.setState({[event.target.name]: inputValue});
  }

  mySubmitHandler(event) {
    event.preventDefault();
    const newTodo = this.state;
    this.props.addTodo(newTodo);
    this.setState({ name: "", description: "", done: false });
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.mySubmitHandler.bind(this)}>
          <Form.Group >
            <Form.Control name="name" onChange={this.myChangeHandler} type="text" placeholder="New Todo Tittle" value={this.state.name}/>
          </Form.Group>

          <Form.Group>
            <Form.Control name="description" onChange={this.myChangeHandler} as="textarea" rows="3" placeholder="New todo description" value={this.state.description} />
          </Form.Group>

          <Form.Group>
            <Form.Check name="done" type="checkbox" onChange={this.myChangeHandler} label="Completed" checked={this.state.checked} />
          </Form.Group>

          <Button variant="success" type="submit">
            Create
          </Button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addTodoFun(todo))
  };
};

export default connect(null, mapDispatchToProps)(TodoForm);
