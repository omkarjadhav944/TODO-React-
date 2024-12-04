import ToDoItem from "./ToDoItem";
import styles from "./ToDoItem.module.css";

const TodoItems = ({ item, deletebutton }) => {
  return (
    <div className={styles.itemContainer}>
      {item.map((item, index) => (
        <ToDoItem
          key={index}
          todoDate={item.duedate}
          todoName={item.name}
          deletebutton={deletebutton}
        />
      ))}
    </div>
  );
};
export default TodoItems;
