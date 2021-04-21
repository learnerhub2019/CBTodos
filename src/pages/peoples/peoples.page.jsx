import React, { useEffect } from "react";
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
  Spinner
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faEyeSlash,
  faTrashAlt,
  faEye
} from "@fortawesome/free-solid-svg-icons";

const PeoplePage = () => {
  const dispatch = useDispatch();
  const peoples = useSelector((state) => state.peoples);

  const tableHeader = ["Name", "Gender", "Created On", "Action"];

  // console.log(formData);

  useEffect(() => {
    dispatch(getUserList(1, 50));
  }, []);

  return (
    <div className="page">
      {peoples.loading && (
        <Row className="justify-content-center">
          <Col className="justify-content-center">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      )}
      {!peoples.loading && (
        <div className="hide">
          <Row></Row>
          <Row>
            <Col>
              <Tabs
                defaultActiveKey="members"
                transition={false}
                id="noanim-tab-example"
              >
                <Tab eventKey="members" title="Members">
                  <Table responsive="md">
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
                            <tr key={user.id}>
                              <td>{user.id}</td>
                              <td
                                className={user.isDisabled ? "text-muted" : ""}
                              >{`${user.nameFirst} ${user.nameMiddle} ${user.nameLast}`}</td>
                              <td
                                className={user.isDisabled ? "text-muted" : ""}
                              >
                                {" "}
                                {user.gender}
                              </td>
                              <td
                                className={user.isDisabled ? "text-muted" : ""}
                              >
                                {" "}
                                {user.createdAt}
                              </td>
                              <td>
                                <ButtonGroup size="sm">
                                  <Button size="sm" variant="outline-info">
                                    <FontAwesomeIcon icon={faPencilAlt} />
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline-warning"
                                    onClick={() =>
                                      dispatch(deleteUser(user.id))
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
                </Tab>

                <Tab eventKey="staff" title="Staff"></Tab>
                {/* <Tab eventKey="contact" title="Contact" disabled></Tab> */}
              </Tabs>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default PeoplePage;
