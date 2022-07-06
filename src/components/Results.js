import { Link } from "react-router-dom";
import HeartBt from "./HeartBt";
const Results = ({results, buttonState, setButtonState, setShowId}) => {
    const {id, name, Heart, image_url} = results
    setShowId(id)
    return(
        <div>
            <Link to="/show">
            {image_url && <div><img src={image_url}/></div>}
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