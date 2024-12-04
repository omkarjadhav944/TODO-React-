import { useRef } from "react";
// import { useState, useRef } from "react";
import styles from "./AddToDo.module.css";
import { MdLibraryAdd } from "react-icons/md";
function AddToDo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [duedate, setDueDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleTodoName = (event) => {
  //   setTodoName(event.target.value);
  //   // noOfUpdates.current += 1;
  // };
  // const handleTododate = (event) => {
  //   setDueDate(event.target.value);
  //   // console.log(`No of Updates are: ${noOfUpdates.current}`);
  // };

  const handleAddButtonClicked = (event) => {
    // console.log(event);
    event.preventDefault(); // prevent from submission
    //bubble-up data to parent
    const todoName = todoNameElement.current.value;
    const duedate = dueDateElement.current.value;
    dueDateElement.current.value = "";
    todoNameElement.current.value = "";
    console.log(`${todoName} and ${duedate}`);

    onNewItem(todoName, duedate);
    // setDueDate("");
    // setTodoName("");
  };

  return (
    <>
      <form
        action=""
        onSubmit={handleAddButtonClicked}
        className={`row ${styles.kgRow}`}
      >
        <div className="col-4">
          <input
            ref={todoNameElement}
            className={styles.inputBox}
            type="text"
            placeholder="Enter ToDo Here"
            // onChange={handleTodoName}
            // value={todoName}
          />
        </div>
        <div className="col-4">
          <input
            ref={dueDateElement}
            type="date"
            name=""
            id=""
            // onChange={handleTododate}
            // value={duedate}
          />
        </div>
        <div className="col-4">
          <button
            className={`${styles.kgButton} btn btn-success`}
            // onClick={handleAddButtonClicked}
            // type="button"
          >
            <MdLibraryAdd />
          </button>
        </div>
      </form>
    </>
  );
}

export default AddToDo;
