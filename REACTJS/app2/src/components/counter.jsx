import React from 'react'

import { UseState } from 'react';

export const counter = () => {
    // let val = 1;
    const [val, setVal] = useState(1);
    function incHandler() {
        //val++;
        setVal(val + 1)
        console.log(val);
    }
    return (
        <div>
            <p style={{ color: "white", fontSize: "70px" }}>counter</p>

            <h2 style={{ color: "white", fontSize: "70px" }}>

                {val} </h2>
            <button style={{ padding: "30ox" }} onClick={incHandler}>inc</button>
            <button style={{ padding: "30px" }}>dec</button>
        </div>
    )
}
export default counter