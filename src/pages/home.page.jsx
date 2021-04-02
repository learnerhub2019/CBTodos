import React, { useContext } from "react";
import { Row, Col, ListGroup, Modal, Button, Form } from "react-bootstrap";
import "./home.css";

export default () => {
  const [show, setShow] = React.useState(false);
  const [data, setData] = React.useState(0);

  const transactions = [];
  // const handleEditDetails = (id) => {
  //   let transactionId = id - 1;
  //   setShow(true);
  //   setData({
  //     ...transactions[transactionId]
  //   });
  // };

  return (
    <>
      <Row>
        <Col xs={6}>
          <h4 className="td-page-header text-danger">Dashboard</h4>
        </Col>
        <Col xs={6}>
          <Button variant="primary" className="float-right" size="sm">
            Add transaction
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
            {transactions.length ? (
              transactions.map((transaction) => (
                <ListGroup.Item
                  action
                  key={transaction.id}
                  value={transaction.id}
                  className="d-flex justify-content-between align-items-center"
                  onClick={(e) => handleEditDetails(e.target.value)}
                >
                  {transaction.text}
                  <span className="badge badge-primary badge-pill">
                    {transaction.amount}
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
        data={data}
        show={show}
        title="Edit Transaction"
        onHide={() => setShow(false)}
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
        <p>
          {data.text}
          {data.amount}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
      {/* </Modal.Dialog> */}
    </Modal>
  );
};
