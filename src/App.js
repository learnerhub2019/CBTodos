import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { HeaderComponent, SideMenu, RouterComponent } from "./components";
import "./styles.css";
// import _ from 'lodash';
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
// import { addTodos, fetchTodos } from "./modules/todos/todosActions";

export default function App() {
  // const { todos } = useSelector((state) => state.todos.items);
  const { isSideBarOpen } = useSelector((state) => state.utils);
  // const dispatch = useDispatch();

  console.log("app is " + isSideBarOpen);

  useEffect(() => {
    // dispatch(fetchTodos());
          // if( !state ) {
      //   fetch("https://jsonplaceholder.typicode.com/todos")
      //   .then((response) => response.json())
      //   .then((todos) => {
      //     // dispatch( addTodos(todos) );
      //     return {
      //       items: [...payload]
      //     };
      //   });
      // }
  }, []);

  return (
    <div className="App">
      <Router>
        <SideMenu />
        <div
          id="content"
          className={`page-content ${isSideBarOpen ? "active" : ""}`}
        >
          <HeaderComponent />
          <Container fluid className="page-container">
            <Switch>
              <RouterComponent />
            </Switch>
          </Container>
        </div>
      </Router>
    </div>
  );
}
