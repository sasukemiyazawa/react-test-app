import HeartBt from "./HeartBt";
const Results = ({results, buttonState, setButtonState}) => {
    const {id, name, Heart, image_url} = results
    return(
        <div>
            {image_url && <div><img src={image_url}/></div>}
            {/* <div>{id}</div> */}
            {name && <div>{name}さんの作品</div>}
            {Heart && <div>いいね：{Heart}</div>}
            <HeartBt images={results} buttonState={buttonState} setButtonState={setButtonState}/>
        </div>
    );
};

export default Results;