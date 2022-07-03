import axios from "axios";

const Heart = ({images, buttonState, setButtonState}) => {

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
        <button onClick={()=>favorite(images)}>いいね</button>
    );
};

export default Heart;