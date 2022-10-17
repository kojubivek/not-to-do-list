const BadList = ({ entryList1, handleOnDelete, handleOnSwitch }) => {
  return (
    <div className="col text-center">
      <h2>Bad List</h2>
      <hr />

      <table className="table table-striped">
        <tbody id="bad-list">
          {entryList1.map((item, i) => {
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
          The Total Time could have saved =<span id="totalBadHours">0 </span> hr
        </div>
      </div>
    </div>
  );
};

export default BadList;
