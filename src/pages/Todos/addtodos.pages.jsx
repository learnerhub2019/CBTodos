import React, { useState, useEffect } from "react";
import "./todos.css";

export default ({ todos, handleAddTodos }) => {
  const [formData, setFromData] = useState([]);

  useEffect(() => {
    // console.log(formData);
  });

  const onChangeHanle = (e) => {
    let { id, value } = e.target;
    setFromData({ ...formData, [id]: value });
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    console.log(formData);
    // setTodos(["todo1", "todo2"]);
    // setFromData({});
    // setTodos();
    handleAddTodos(formData);
  };

  return (
    <div className="page">
      <h4>Add New </h4>
      <div className="todo-form">
        <form onSubmit={onSubmitHandle}>
          <div className="form-group">
            <label> Todo</label>
            <input
              className="form-control"
              type="text"
              id="title"
              onChange={onChangeHanle}
            />
          </div>
          <div className="form-group">
            <label> Date</label>
            <input
              className="form-control"
              type="text"
              id="todo_date"
              name="todo_date"
              onChange={onChangeHanle}
            />
          </div>

          <button className="form-btn">Add</button>
        </form>
      </div>
      <div className="todo-list">
        { todos.length && (
          <ul className="list-group">
            {todos.todos.map((todo) => (
              <li className="list-group-items">
                {todo.title ? todo.title : <span className="">Not title</span>}
                {todo.todo_date ? (
                  <span className="sub-title">{todo.todo_date}</span>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
