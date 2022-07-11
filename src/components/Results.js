import { Link } from "react-router-dom";
import HeartBt from "./HeartBt";
const Results = ({results, buttonState, setButtonState, setShowId}) => {
    const {id, name, Heart, image_url} = results
    return(
        <div className="results">
            <Link to="/show" onClick={() => {setShowId(id)}}>
            {image_url && <div className="img2"><img src={image_url}/></div>}
            </Link>
            <div>
                <div className="circle"></div>
                {name && 
                <div className="nowrap3">
                    <p>{name}</p><p>さんの作品</p>
                </div>}
                <div className="nowrap4">
                    <HeartBt images={results} buttonState={buttonState} setButtonState={setButtonState}/>
                </div>
            </div>
        </div>
    );
};

export default Results;