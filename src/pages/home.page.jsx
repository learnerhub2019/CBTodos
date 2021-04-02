import React from "react";
import { Row, Col, ListGroup, Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./home.css";

import { addTodo, delteTodo } from "../modules/todos/todosActions";

export default () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);
  console.log(todos);

  // const handleEditDetails = () => {};

  const addNewTodo = () => {
    dispatch(addTodo({ id: 1, title: "todo1" }));
    console.log("todo added");
  };

  const deleteTodo = (todoId) => {
    console.log(todoId);
    dispatch(delteTodo( parseInt(todoId) ) );
  };

  return (
    <>
      <Row>
        <Col xs={6}>
          <h4 className="td-page-header text-danger">Dashboard</h4>
        </Col>
        <Col xs={6}>
          <Button
            variant="primary"
            className="float-right"
            size="sm"
            onClick={addNewTodo}
          >
            Add Todo
          </Button>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form.Group>
            </Form.Row>
          </Form>
        </Col>
      </Row>
      <Row className="h-100">
        <Col xs={12} lg={4}>
          {/* <div className="todo-breadcrum">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
            </Breadcrumb>
          </div> */}

          <ListGroup className="overflow-auto h-100">
            {todos.length ? (
              todos.map((todo) => (
                <ListGroup.Item
                  action
                  key={todo.id}
                  value={todo.id}
                  className="d-flex justify-content-between align-items-center"
                  onClick={(e) => deleteTodo(e.target.value)}
                  variant={todo.completed ? "success" : ""}
                >
                  {todo.title}
                  <span className="badge badge-primary badge-pill">
                    {todo.amount}
                  </span>
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item className="d-flex align-item-center">
                No Record found
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
      <CustomModel
        // data={data}
        // show={show}
        title="Edit todo"
        // onHide={() => setShow(false)}
      />
    </>
  );
};

const CustomModel = ({ show, onHide, title, data }) => {
  console.dir(data);
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Dialog> */}
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>{/* {data.text}
          {data.amount} */}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
      {/* </Modal.Dialog> */}
    </Modal>
  );
};
