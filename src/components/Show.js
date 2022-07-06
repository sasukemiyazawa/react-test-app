import { useEffect } from "react";
import { Link } from "react-router-dom";
import HeartBt from "./HeartBt";
const Show = (showId, searchImage, images2) => {
    useEffect(()=>{
        searchImage(showId)
    },[])
    // const {id, name, Heart, image_url} = images2
    return(
        <>
        <div>
        {images2.image_url && <div><img src={images2.image_url}/></div>}
        {images2.name && <div>{images2.name}さんの作品</div>}
        {/* <HeartBt images={images2}/> */}
        </div>
        <Link to="/">もどる</Link>
        </>
    )
}

export default Show;