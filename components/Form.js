import React, { useState } from "react";

const Form=(props)=>{
    const [isvalid, setIsvalid]=useState(false);
const [input, setInput]=useState("");
const onInput=(event)=>{
    event.preventDefault();
    setInput(event.target.value);   
}
const onSub=(event)=>{
    event.preventDefault();
    if(input.trim().length===0){ setIsvalid(true);  return;} else{setIsvalid(false); }
props.formip(input);
console.log(input)
}
    return <form onSubmit={onSub}>
        <input type="text" style={{font:isvalid?"bold":"bold",borderColor:isvalid?"green":"#ccc",background:isvalid?"salmon":"transparent"}} name="name" onChange={onInput}/>
        <input type="submit" name="submit" />
    </form>
}

export default Form;