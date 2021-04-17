import React from "react";
import { Row } from "react-bootstrap";
// import { ListGroup } from "react-bootstrap";
import "./style.css";


const DsLinkedListPage = () => {
  return (
    <>
      {/* <ListGroup
        horizontal="sm"
        className="my-2 listgroup"
      >
        <ListGroup.Item>This ListGroup</ListGroup.Item>
        <ListGroup.Item>renders horizontally</ListGroup.Item>
        <ListGroup.Item>on 'sm'</ListGroup.Item>
        <ListGroup.Item>and above!</ListGroup.Item>
      </ListGroup>
      <ListGroup horizontal="sm" className="my-2">
        <ListGroup.Item>This ListGroup</ListGroup.Item>
        <ListGroup.Item>renders horizontally</ListGroup.Item>
        <ListGroup.Item>on 'sm'</ListGroup.Item>
        <ListGroup.Item>and above!</ListGroup.Item>
      </ListGroup> */}
      <Row className="linked-list justify-content-md-center">
        <ul className="node">
          <li> value </li>
          <li> Next </li>
        </ul>
      </Row>
    </>
  );
};

export default DsLinkedListPage;
