import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HeartBt from "./HeartBt";
const Show = (showId) => {

    const [images, setImages] = useState({})

    const getData = (id) => {
        axios.get(`http://localhost:3001/api/v1/tokos/${id}`)
            .then(res => {
            console.log(res)
            setImages(res.data.data)
        })
    }

    useEffect(()=>{
        getData(showId.showId)
    },[])
    // const {id, name, Heart, image_url} = images2
    return(
        <>
        <div>
        {images.image_url && <div><img src={images.image_url}/></div>}
        {images.name && <div>{images.name}さんの作品</div>}
        {/* <HeartBt images={images2}/> */}
        </div>
        <Link to="/">もどる</Link>
        </>
    )
}

export default Show;