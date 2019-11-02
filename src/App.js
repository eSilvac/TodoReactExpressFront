import './App.css';
import React, { Component } from 'react';

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

class App extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={6}>
            <h1 className="text-center mb-3">Todo List</h1>
            <TodoForm />
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col>
	    <Table bordered>
	      <thead>
		<tr>
		  <th>Name</th>
		  <th>Description</th>
		  <th></th>
		</tr>
	      </thead>
              <TodoList />
	    </Table>  
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
