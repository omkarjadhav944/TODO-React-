import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItems from "./components/ToDoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    // console.log(`New Item Added ${itemName} Date: ${itemDate}`);

    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, duedate: itemDate },
    ]);
    
    // setTodoItems((currValue) => {
    //   const newTodoItems = [
    //     ...currValue,
    //     { name: itemName, duedate: itemDate },
    //   ];
    //   return newTodoItems;
    // });
  };

  // const handleNewItem = (itemName, itemDate) => {
  //   // console.log(`New Item Added ${itemName} Date: ${itemDate}`);
  //   const newTodoItems = [...todoItems, { name: itemName, duedate: itemDate }];
  //   setTodoItems(newTodoItems);
  // };

  const handleDeleteButton = (todoName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoName);
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      <div className="container text-center">
        <AppName />
        <AddToDo onNewItem={handleNewItem} />
        {todoItems.length === 0 ? <WelcomeMessage /> : ""}
        <TodoItems item={todoItems} deletebutton={handleDeleteButton} />
      </div>
    </center>
  );
}

export default App;
