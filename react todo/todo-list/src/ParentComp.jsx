import React from 'react';
import "./Parent.css";
import ChildComp from './ChildComp';

function ParentComp() {
    const [childData, setChildData] = React.useState("");

    function handleChildData(data) {
        setChildData(data);
    }
  return (
    <div>
        <h4>Child Data: {childData}</h4>
        <ChildComp sendDataToParent = {handleChildData}/>
    </div>
  )
}

export default ParentComp