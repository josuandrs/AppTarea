export const VisibilityControl = ({isChecked, setShowCompleted, cleanTasks }) => {
  
  const handleDelete = () => {
    if(window.confirm('Estas seguro de querer eliminarlo?')){
        cleanTasks()
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setShowCompleted(e.target.checked)}
      />{" "}
      <label>Mostrar Tareas Realizadas</label>
      <button onClick={handleDelete} className="btn btn-primary btn-sm m-2">
        Eliminar
      </button>
    </div>
  );
};
