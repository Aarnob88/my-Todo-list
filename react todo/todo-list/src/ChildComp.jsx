import React from 'react';
import "./Child.css";


 function ChildComp({sendDataToParent}) {
    const [data, setData] = React.useState("");
    
    function handleClick() {
        sendDataToParent(data);
    }
  return (
    <div>
        <input type='text' value={data} onChange={(e)=> setData(e.target.value)}/>
        <button onClick={handleClick}>Data to Parent</button>
    </div>
  )
}

export default ChildComp;
