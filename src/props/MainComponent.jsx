import React, {useState} from "react";
import Greet from "./Greet";

const MainComponent = () => {
    const [username , setusername] = useState("Saurabh");
    return (
        <React.Fragment>
            <Greet username = {username}/>
        </React.Fragment>
    )
};

export default MainComponent;