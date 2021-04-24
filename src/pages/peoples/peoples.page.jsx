import React, { useEffect, useState } from "react";
import { getUserList, deleteUser } from "../../modules/users/usersActions";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Tabs,
  Tab,
  Table,
  ButtonGroup,
  Button,
  Pagination
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faEyeSlash,
  faTrashAlt,
  faEye
} from "@fortawesome/free-solid-svg-icons";

import "./peoples-page.css";

const PeoplePage = () => {
  const dispatch = useDispatch();
  const peoples = useSelector((state) => state.peoples);
  const [selectedUser, setSelectedUser] = useState();

  const tableHeader = ["Name", "Created On", "Action"];

  // console.log(formData);

  useEffect(() => {
    dispatch(getUserList(1, 10));
    setSelectedUser(peoples.users[0]);
  }, []);

  useEffect(() => {
    setSelectedUser(undefined);
  }, [peoples]);

  return (
    <div className="page">
      <div>
        <Row></Row>
        <Row>
          <Col md={9}>
            <div className="col-pane">
              <Tabs
                defaultActiveKey="members"
                transition={false}
                id="noanim-tab-example"
              >
                <Tab eventKey="members" title="Members">
                  <Table responsive="md" className="app-table" hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        {tableHeader.map((colName) => {
                          return <th key={colName}>{colName}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {peoples.users &&
                        peoples.users.map((user) => {
                          return (
                            <tr
                              key={user.id}
                              onClick={() => setSelectedUser(user)}
                            >
                              <td>{user.id}</td>
                              <td className="">{`${user.nameFirst} ${user.nameMiddle} ${user.nameLast}`}</td>
                              {/* <td className=""> {user.gender}</td> */}
                              <td className=""> {user.createdAt}</td>
                              <td>
                                <ButtonGroup size="sm">
                                  <Button size="sm" variant="outline-info">
                                    <FontAwesomeIcon icon={faPencilAlt} />
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline-warning"
                                    onClick={() =>
                                      dispatch(deleteUser(user.id, true))
                                    }
                                  >
                                    <FontAwesomeIcon
                                      icon={
                                        user.isDisabled ? faEye : faEyeSlash
                                      }
                                    />
                                  </Button>
                                  <Button size="sm" variant="outline-danger">
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                  </Button>
                                </ButtonGroup>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </Table>
                  <div className="align-content-end">
                    <Pagination>
                      <Pagination.First />
                      <Pagination.Prev />
                      <Pagination.Item>{1}</Pagination.Item>
                      {/* <Pagination.Ellipsis /> */}

                      <Pagination.Item>{2}</Pagination.Item>
                      <Pagination.Item>{3}</Pagination.Item>
                      <Pagination.Item active>{4}</Pagination.Item>
                      <Pagination.Item>{5}</Pagination.Item>
                      <Pagination.Item disabled>{6}</Pagination.Item>

                      {/* <Pagination.Ellipsis /> */}
                      <Pagination.Item>{7}</Pagination.Item>
                      <Pagination.Next />
                      <Pagination.Last />
                    </Pagination>
                  </div>
                </Tab>

                <Tab eventKey="staff" title="Staff"></Tab>
                {/* <Tab eventKey="contact" title="Contact" disabled></Tab> */}
              </Tabs>
            </div>
          </Col>
          <Col md={3}>
            {/* <Card style={{minHeight: '150px'}}>
              {selectedUser && (
                <Card.Body>
                  <Card.Title>{selectedUser.nameFirst}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link> 
                 <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              )}
            </Card> */}
            <div className="col-pane" style={{ minHeight: "150px" }}>
              {selectedUser && (
                <div>
                  <Table borderless responsive>
                    <tbody>
                      <tr>
                        <td>First Name :</td>
                        <td>{selectedUser.nameFirst}</td>
                      </tr>
                      <tr>
                        <td>Middle Name :</td>
                        <td>{selectedUser.nameMiddle}</td>
                      </tr>
                      <tr>
                        <td>Last Name:</td>
                        <td>{selectedUser.nameLast}</td>
                      </tr>
                      <tr>
                        <td>Gender</td>
                        <td>{selectedUser.gender}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PeoplePage;
