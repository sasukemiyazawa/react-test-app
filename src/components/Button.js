import React from "react";
import { useHistory } from "react-router-dom";

const Button = () => {

    let history = useHistory();

    function handleClick() {
        history.push("/form");
    }

    return(
        <>
        <div className="border"></div>
        <div className="button008"><a onClick={handleClick}>とうこう</a></div>
        </>
    )
}

export default Button;