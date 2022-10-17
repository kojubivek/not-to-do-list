import { useState } from "react";
import "./App.css";
import Form from "./components/form/Form.component";
import List from "./components/list/List.component";
import { v4 as uuidv4 } from "uuid";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const taskEntry = (taskObj) => {
    taskObj._id = uuidv4();
    setTasks([...tasks, taskObj]);
  };
  const handleOnDelete = (_id) => {
    if (!window.confirm("Are you sure you want to delete?")) {
      return;
    }
    const filteredArg = tasks.filter((item, index) => {
      return item._id !== _id;
    });

    setTasks(filteredArg);
  };
  const handleOnSwitch = (_id, type) => {
    if (!window.confirm("Are you sure you want to switch?")) {
      return;
    }
    const typeChange = tasks.map((item, index) => {
      if (item._id !== _id) {
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
          />
          <div className="row">
            <div className="col">
              The Total Time allocated =<span id="totalHours"> 0 </span> hr
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
