import BadList from "./Bad-List.component";
import TaskList from "./Task-List.component";

const List = ({ tasks, handleOnDelete, handleOnSwitch }) => {
  const entryList = tasks.filter((item) => item.type === "entry");
  const entryList1 = tasks.filter((item) => item.type === "bad");

  return (
    <div className="row mt-5">
      <TaskList
        entryList={entryList}
        handleOnDelete={handleOnDelete}
        handleOnSwitch={handleOnSwitch}
      />

      <BadList
        entryList1={entryList1}
        handleOnDelete={handleOnDelete}
        handleOnSwitch={handleOnSwitch}
      />
    </div>
  );
};

export default List;
