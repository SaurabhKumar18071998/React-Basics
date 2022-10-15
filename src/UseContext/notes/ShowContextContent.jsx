import React, { useContext ,useEffect} from "react";
import NoteContext from "./noteContext";

const ShowContextContent = () => {

    const a = useContext(NoteContext);

    useEffect(()=>{
     a.update();
    })

    return(
        <React.Fragment>
            <h1>This is about {a.state.name} and he is in class {a.state.class} </h1>
        </React.Fragment>
    )
};

export default ShowContextContent;