import { useState } from "react";
import Todo from "./components/Todo";

function App() {

  //let arr=["task1", "task2", "task3", "task4"]

  const [arr,setArr] = useState([])
  return (
    <div style={{ border: "5px solid red", width: "500px", height: "400px", backgroundColor: "pink", display: "flex",justifyContent:"center",alignItems:"center" }}>
      <Todo task={arr} setArr={setArr} />
    </div>

  );
}

export default App;
