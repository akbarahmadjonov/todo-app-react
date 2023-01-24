import TodoForm from "./Components/Form/List";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <TodoForm />
      <div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
