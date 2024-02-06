import React from 'react'
import SingleTask from './SingleTask'


let arr=["do some cooking","read somebooks","watch movies","go to gym"]

const TaskContainer = () => {
  return (
    <div style={{border:"5px solid blue",marginTop:"50px"}}>

      {arr.map(function(ele, index){
        return <SingleTask task= {ele} taskno ={index+1}/>

      })}



        {/*<SingleTask task="task1"/>
        <SingleTask task= "go for a walk"/>
        <SingleTask task="do some exerices"/>
         <SingleTask task = "go to club"/>*/}
        
     </div>
  )
}

export default TaskContainer