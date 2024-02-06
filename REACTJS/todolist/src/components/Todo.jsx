import React from 'react'


export const Todo = (props) => {
    let inputval = "";
  return (
    <div style={{border:"5px solid blue",backgroundColor:"gray",width:"300px",height:"300px"}}>
        

        <input onChange={function(event){
            inputval= event.target.value

        }}/>
        <button onClick={function(){
            props.setArr({...props.task,inputval})

        }}>Add</button>

        <div>
            {props.task.map(function(ele){
                return <p style={{margin:"20px",color:"blck",fontWeight:"800px",fontSize:"24px"}}>
                    {ele}
                    </p>
            })}
        </div>

    </div>
  )
}
export default Todo