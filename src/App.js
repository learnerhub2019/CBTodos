import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { HeaderComponent, SideMenu, RoutesComponent } from "./components";
import "./styles.css";
// import _ from 'lodash';
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "./modules/todos/todosActions";
// import { NotFoundPage } from "./pages/utils/not-found.page";

export default function App() {
  // const { todos } = useSelector((state) => state.todos.items);

  const { isSideBarOpen } = useSelector((state) => state.utils);
  // const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((todos) => {
        dispatch(addTodos(todos));
      });
  });

  return (
    <>
      <div className="App" data-testid="app">
        <Router>
          <SideMenu />
          <div
            id="content"
            className={`page-content ${isSideBarOpen ? "active" : ""}`}
          >
            <HeaderComponent />
            <Container fluid className="page-container">
              <Switch>
                <RoutesComponent />
                {/* <Route path="*">
                  <NotFoundPage />
                </Route> */}
              </Switch>
            </Container>
          </div>
        </Router>
      </div>
    </>
  );
}
