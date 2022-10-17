const TaskList = ({ entryList, handleOnDelete, handleOnSwitch }) => {
  return (
    <div className="col text-center">
      <h2>Task List</h2>
      <hr />

      <table className="table table-striped table-hover">
        <tbody id="task-list">
          {entryList.map((item, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{item.task}</td>
                <td>{item.hour}</td>
                <td>
                  <button className="btn btn-danger  ">
                    <i
                      className="fa-regular fa-trash-can"
                      onClick={() => handleOnDelete(item._id)}
                    ></i>{" "}
                    Delete
                  </button>
                  <button
                    onClick={() => handleOnSwitch(item._id, "bad")}
                    className="btn btn-success"
                  >
                    <i className="fa-sharp fa-solid fa-right-long"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
