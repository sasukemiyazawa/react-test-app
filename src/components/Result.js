import { Link } from "react-router-dom";
import HeartBt from "./HeartBt";
const Result = ({results, buttonState, setButtonState, setShowId}) => {
    const {id, name, Heart, comment, image_url} = results
    return(
        <div className="result">
            <div className="title">
                <h2>本日の作品</h2>
            </div>
            <Link to="/show" onClick={() => {setShowId(id)}}>
            {image_url && <div className="img"><img src={image_url}/></div>}
            </Link>
            <div>
                <div className="circle"><img className="icon" src="icon2.jpg" /></div>
                {name && 
                <div className="nowrap">
                    <p>{name}</p><p>さんの作品</p>
                </div>}
                {comment && <div className="nowrap"><p>「{comment}」</p></div>}
                <div className="nowrap2">
                    <HeartBt images={results} buttonState={buttonState} setButtonState={setButtonState} setShowId={setShowId}/>
                </div>
            </div>
            
        </div>
    );
};

export default Result;