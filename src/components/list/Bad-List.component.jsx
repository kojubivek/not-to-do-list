const BadList = ({
  entryList1,
  handleOnDelete,
  handleOnSwitch,
  handleOnCheck,
}) => {
  const totalHours = entryList1.reduce((acc, item) => acc + item.hour, 0);
  return (
    <div className="col text-center">
      <h2>Bad List</h2>
      <hr />

      <table className="table table-striped">
        <tbody id="bad-list">
          {entryList1.map((item, i) => {
            return (
              <tr key={item._id}>
                <th scope="row">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value={item._id}
                    id="flexCheckDefault"
                    onChange={handleOnCheck}
                  />
                </th>
                <td>{item.task}</td>
                <td>{item.hour}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      console.log("clicked");
                      return handleOnDelete(item._id);
                    }}
                  >
                    <i className="fa-regular fa-trash-can"></i> Delete
                  </button>{" "}
                  <button
                    onClick={() => handleOnSwitch(item._id, "entry")}
                    className="btn btn-success"
                  >
                    <i className="fa-sharp fa-solid fa-danger fa-left-long"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="row">
        <div className="col">
          The Total Time could have saved = {totalHours} hrs
        </div>
      </div>
    </div>
  );
};

export default BadList;
