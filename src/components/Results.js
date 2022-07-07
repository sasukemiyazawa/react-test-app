import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeartBt from "./HeartBt";
const Results = ({results, buttonState, setButtonState, setShowId}) => {
    const {id, name, Heart, image_url} = results
    const [showButton, setShowButton] = useState()
    // useEffect(()=>{
    //     // setShowId(id)
    //     // setShowButton(false)
    // },[showButton])
    return(
        <div>
            <Link to="/show" onClick={() => {setShowId(id)}}>
            {image_url && <div><img src={image_url}/></div>}
            {/* {setShowId(id)} */}
            </Link>
            {/* <div>{id}</div> */}
            {name && <div>{name}さんの作品</div>}
            {/* {Heart &&  */}
                <div>
                    <HeartBt images={results} buttonState={buttonState} setButtonState={setButtonState}/>
                </div>
            {/* } */}
        </div>
    );
};

export default Results;