import React from 'react'

const SingleTask = (props) => {

    let task= props.task
    return (

        <div style={{ marginTop: "10px", textAlign: "center", border: "5px solid pink", color: "white" }}>
        
        {task} 
        
        </div>
        
    )

}

export default SingleTask