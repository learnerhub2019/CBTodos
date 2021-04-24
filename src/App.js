import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { HeaderComponent, SideMenu, RoutesComponent } from "./components";
import "./styles.css";
// import _ from 'lodash';
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
// import { addTodos } from "./modules/todos/todosActions";
import RequestMessageToast from "./components/common/request-messages/request-message-toast";
// import { NotFoundPage } from "./pages/utils/not-found.page";

export default function App() {
  // const { todos } = useSelector((state) => state.todos.items);

  const stateUtils = useSelector((state) => state.utils);
  // const { currentUser } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then((todos) => {
  //       dispatch(addTodos(todos));
  //     });
  // });

  return (
    <>
      <div className="App" data-testid="app">
        <Router>
          <SideMenu />
          <div
            id="content"
            className={`page-content ${
              stateUtils.isSideBarOpen ? "active" : ""
            }`}
          >
            <HeaderComponent />
            <Container fluid className="page-container">
              <Switch>
                <RoutesComponent />
                {/* <Route path="*">
                  <NotFoundPage />
                </Route> */}
              </Switch>
              <RequestMessageToast
                show={true}
                title="Request Status"
                subtitle="Request SubTitle"
                body="include body here"
              />
            </Container>
          </div>
        </Router>
      </div>
    </>
  );
}
