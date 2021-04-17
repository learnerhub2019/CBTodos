import React, { useState, useEffect } from "react";
import UserApi from "./../../api/users";
import { addUsers } from "../../modules/users/usersActions";
import { useDispatch } from "react-redux";
import { Row, Col, Tabs, Tab } from "react-bootstrap";

const PeoplePage = ({ todos, handleAddTodos }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(formData);
    const fetchUserData = async () => {
      const users = await UserApi.getUserList();
      dispatch(addUsers(users));
      console.log(users);
    };
    // const userList = await UserApi.getUserList();
    fetchUserData();
    // dispatch(fetchUsers(userList));
  }, []);

  return (
    <div className="page">
      <Row></Row>
      <Row>
        <Col>
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
          >
            <Tab eventKey="home" title="Members"></Tab>
            <Tab eventKey="profile" title="Staff"></Tab>
            {/* <Tab eventKey="contact" title="Contact" disabled></Tab> */}
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};

export default PeoplePage;
