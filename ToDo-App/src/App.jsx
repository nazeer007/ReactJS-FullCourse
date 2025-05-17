import { useEffect } from "react";
import { useState } from "react";
import classes from './styles/./style.module.css';
import ToDoItem from "./components/todo-item";


function App() {
  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchListOfTodos() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/todos");
      const result = await apiResponse.json();

      console.log(result);
      if(result?.todos && result?.todos.length > 0) {
        setTodoList(result?.todos);
        setLoading(false);
        setErrorMsg('');
      } else {
        setTodoList([]);
        setLoading(false);
        setErrorMsg('');
      }

    } catch(e) {
      console.log(e);
      setErrorMsg("Some error occured!");
    }
  }

  useEffect(()=>{
    fetchListOfTodos();
  }, []);

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>Simple ToDo App using Material UI</h1>
      <div>
        {
          todoList && todoList.length > 0 
          ? todoList.map((todoItem)=><ToDoItem key={todoItem.id} todo={todoItem}/>)
          : null
        }
      </div>
    </div>
  )
}

export default App
