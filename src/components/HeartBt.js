import axios from "axios";

const HeartBt = ({images, buttonState, setButtonState}) => {

    // いいね機能
    const favorite = (images) => {
        axios.get(`http://localhost:3001/api/v1/tokos/${images.id}/favorite`)
        .then(res => {
            console.log(res)
            setButtonState(buttonState + 1);
        })
        .catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"));
    }


    return(
        <button className="heart-button" onClick={()=>favorite(images)}>いいね×{images.Heart}</button>
    );
};

export default HeartBt;