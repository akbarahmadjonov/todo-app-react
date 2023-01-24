import { useState } from "react";
import { useRef } from "react";
import Item from "../Item";

const Form = () => {
  const [todos  , setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  let elInput = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!elInput.current.value) {
      return false;
    }

    setTodos([
      ...todos,
      {
        id: todos.at(-1)?.id + 1 || 1,
        isCompleted: false,
        text: elInput.current.value,
      },
    ]);
    elInput.current.value = "";
  };

  localStorage.setItem("todos", JSON.stringify(todos));

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center mt-5"></div>
      <div className="row flex-column">
        <form
          onSubmit={handleSubmit}
          className="col-12 col-lg-6 text-center mt-5 mx-auto rounded js-form"
        >
          <div>
            <h1 className="display-3 fw-bold mb-3">Todo App</h1>
          </div>
          <div className="input-group">
            <input
              ref={elInput}
              className="form-control js-input"
              type="text"
              placeholder="Enter any task"
              autoFocus="true"
            />
            <button className="btn btn-primary p-3">
              <i className="fas fa-plus-circle fs-3"></i>
            </button>
          </div>
          <span className="text-danger d-none js-error">
            Enter a text greater than 3 words
          </span>
        </form>
        <ul className="w-50 mx-auto list-group col-12 col-lg-12 mt-5 list-group mx-auto">
          {todos.map((todo) => (
            <Item
              id={todo.id}
              isCompleted={todo.isCompleted}
              text={todo.text}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Form;
