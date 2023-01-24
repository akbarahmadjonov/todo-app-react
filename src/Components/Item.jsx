import { toast } from "react-toastify";

const Item = ({ id, text, isCompleted, todos, setTodos }) => {
  //   const handleInput = () => {};
  const deleteTodo = (todoId) => {
    const filteredTodo = todos.filter((arrayTodo) => arrayTodo.id !== todoId);
    setTodos([...filteredTodo]);
    toast.error("Yoo!, Task has been deleted permanently!");
  };

  const editTodo = (todoId) => {
    const newPrompt = prompt("Do you want to change?", text);
    const filteredTodo = todos.find((arrayTodo) => arrayTodo.id === todoId);
    filteredTodo.text = newPrompt;
    setTodos([...todos]);
    toast.info("Yoo!, Task has been edited!");
  };

  const handeCheck = (inputId) => {
    const filteredInputId = todos.find(
      (todosInputVal) => todosInputVal.id == inputId
    );
    console.log(filteredInputId);
    filteredInputId.isCompleted = !filteredInputId.isCompleted;
    setTodos([...todos]);

    toast.success("Yoo!, Task has been checked!");
    if (!filteredInputId.isCompleted) {
      toast.info("Yoo!, Task has been unchecked!");
    }
  };

  return (
    <li className="list-group-item d-flex align-items-center">
      <input
        className="me-3 form-check-input"
        checked={isCompleted}
        type="checkbox"
        onChange={() => handeCheck(id)}
      />
      <span
        className={
          isCompleted
            ? "text-decoration-line-through text-success fw-bold"
            : "fw-bold"
        }
      >
        {id}. {text}
      </span>
      <button
        className="btn btn-success ms-auto me-3"
        onClick={() => editTodo(id)}
      >
        <i className="fas fa-pen"></i> EDIT
      </button>
      <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
        <i className="fas fa-trash"></i> DELETE
      </button>
    </li>
  );
};

export default Item;
