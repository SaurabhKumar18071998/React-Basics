import React from "react";

const Greet = (props) =>{
    let {username} = props;
    return(
        <h1>Hello {username}</h1>
    )
};

export default Greet;