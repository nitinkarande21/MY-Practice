// functional componant 
//only one jsx can be returned from component
  import InputContainer from "./components/InputContainer"
  import TaskContainer from "./components/TaskContainer"
  import  Counter  from "./components/counter"

function App() {
  let styleObj = { widht: "400px", height: "500px", backgroundColor: "black" }

  return (
    <div style={styleObj}>
         
         <InputContainer/>
          <TaskContainer/>
          <Counter/>

    </div>

  )
}

export default App