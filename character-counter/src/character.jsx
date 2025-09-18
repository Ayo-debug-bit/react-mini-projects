import { useState } from "react";
import "./App.css";

 function CharacterCounter(){
    const [val, setVal]=useState('');
    
    const handleChange = (e) => {
        setVal(e.target.value);
    };
        
    
    return(
        <div className="counter">
            <h1>Character Counter</h1>
            <h3>Characters count: {val.length}</h3>
            <input type="text" 
            value={val}
            onChange={handleChange}
            placeholder="Type in your input.." />
        </div>
    );
 }
 export default CharacterCounter;