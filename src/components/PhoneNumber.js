import React, { useState, useEffect } from 'react';


const PhoneNumber = ({number}) => {
  const [counter, setCounter] = useState(2);  
  useEffect( () => {
        
    // On first render, counter will be 0
    // The condition will be false and setTimeout() won't start
    if(counter)
        var timer = setTimeout( () => setCounter(counter - 1), 350);
        
    return () => clearTimeout(timer);   

}, [counter]);

 return (   
    <a href={`tel:${number}`} target="_blank" rel="noopener noreferrer" className={`telephone ${counter ? "not-active" : "is-active"}`} >
      {number}
      </a>  
 )  
}


export default PhoneNumber
