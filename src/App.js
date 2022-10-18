import { useState } from "react";
import "./App.css";
import Form from "./components/form/Form.component";
import List from "./components/list/List.component";

const totalHoursPerWeek = 24 * 7;
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState([]);
  const handleOnCheck = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setId([...id, value]);
    } else {
      const tempArry = id.filter((item) => value !== item);

      setId(tempArry);
    }
  };

  const deleteAll = () => {
    console.log(id);
    if (!window.confirm("Are you sure you want to delete?")) {
      return;
    }

    const all = tasks.filter((item) => !id.includes(item._id));
    setTasks(all);
    setId([]);
  };

  const totalHours = tasks.reduce((acc, item) => acc + item.hour, 0);

  const taskEntry = (taskObj) => {
    if (totalHours + taskObj.hour > totalHoursPerWeek) {
      return alert("total hours exceeded");
    }
    setTasks([...tasks, taskObj]);
  };
  const handleOnDelete = (_id) => {
    if (!window.confirm("Are you sure you want to delete?")) {
      return;
    }
    const filteredArg = tasks.filter((item, index) => item._id !== _id);

    setTasks(filteredArg);
  };
  const handleOnSwitch = (_id, type) => {
    if (!window.confirm("Are you sure you want to switch?")) {
      return;
    }
    const typeChange = tasks.map((item, index) => {
      if (item._id === _id) {
        item.type = type;
      }
      return item;
    });
    setTasks(typeChange);
  };
  return (
    <>
      <div className="wrapper">
        <div className="container">
          {/* <!--top title-->> */}
          <div className="row">
            <div className="col text-center mt-5">
              <h1>Not to Do List</h1>
              <hr />
            </div>

            <Form taskEntry={taskEntry} />
          </div>

          <List
            tasks={tasks}
            handleOnDelete={handleOnDelete}
            handleOnSwitch={handleOnSwitch}
            handleOnCheck={handleOnCheck}
          />
          {id.length > 0 && (
            <div className="d-grid py-4">
              <button className="btn btn-lg btn-danger" onClick={deleteAll}>
                Delete selected tasks
              </button>
            </div>
          )}

          <div className="row">
            <div className="col">
              The Total Time allocated = {totalHours} Hrs
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
