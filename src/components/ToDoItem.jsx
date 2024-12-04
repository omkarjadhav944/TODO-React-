import styles from "./ToDoItem.module.css";
import { MdDeleteForever } from "react-icons/md";

function ToDoItem({ todoName, todoDate, deletebutton }) {
  return (
    <>
      <div className={`row ${styles.kgRow}`}>
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-4 text-center">
          <button
            onClick={() => {deletebutton(todoName);}}
            type="button"
            className={`${styles.kgButton} btn btn-danger`}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </>
  );
}

export default ToDoItem;
