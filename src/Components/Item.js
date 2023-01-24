import { toast } from "react-toastify";

const Item = ({ id, text, isCompleted, todos, setTodos }) => {
  //   const handleInput = () => {};
  const deleteTodo = (todoId) => {
    const filteredTodo = todos.filter((arrayTodo) => arrayTodo.id !== todoId);
    setTodos([...filteredTodo]);
    toast.error("Task has been deleted permanently!");
  };

  const editTodo = (todoId) => {
    const newPrompt = prompt("Do you want to change?", text);
    const filteredTodo = todos.find((arrayTodo) => arrayTodo.id === todoId);
    filteredTodo.text = newPrompt;
    setTodos([...todos]);
  };

  return (
    <li className="list-group-item d-flex align-items-center">
      <input
        className="me-3 form-check-input"
        // onChange={handleInput}
        checked={isCompleted}
        type="checkbox"
      />
      <span>
        {id}. {text}
      </span>
      <button
        className="btn btn-warning ms-auto me-3"
        onClick={() => editTodo(id)}
      >
        EDIT
      </button>
      <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
        DELETE
      </button>
    </li>
  );
};

export default Item;
