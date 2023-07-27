import { useState } from "react";

const TodoApp = ({createNewTask}) => {
  const [todos, setTodos] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(todos)
    setTodos('')
  }

  return (
    <div className="TodoApp">
      <form onSubmit={handleSubmit} className="my-2 row">
        <div className="col-9">
          <input
            type="text"
            placeholder="Ingrese tarea"
            value={todos}
            onChange={(e) => setTodos(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-3">
          <button className="btn btn-primary btn-sm">Agregar tarea</button>
        </div>
      </form>
    </div>
  );
}

export default TodoApp;
