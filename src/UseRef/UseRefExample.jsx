import React, {useRef, useEffect, useState} from "react";

const UseRefExample = () => {

    const [inputValue,setInputValue] = useState("");
    const count = useRef(0);

    useEffect(()=>{
        count.current += 1;
    })
    return(
        <React.Fragment>
            <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
      <h1>Render Count: {count.current}</h1>
        </React.Fragment>
    )

};

export default UseRefExample;