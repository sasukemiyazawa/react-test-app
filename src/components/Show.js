import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import HeartBt from "./HeartBt";
import styled from "styled-components";
const Show = () => {

    const showId = useParams()

    const [images, setImages] = useState({})

    const [buttonState, setButtonState] = useState(0)

    const getData = (id) => {
        axios.get(`http://localhost:3001/api/v1/tokos/${id}`)
            .then(res => {
            console.log(res)
            setImages(res.data.data)
        })
    }

    useEffect(()=>{
        getData(showId.id)
    },[buttonState])

    return(
        <>
        <div>
        <h1>詳細画面です。</h1>
        {images.image_url && <div><Img src={images.image_url}/></div>}
        {images.name && <div>名前：{images.name}</div>}
        {<div>コメント：{images.comment}</div>}
        {<div>いいね数：{images.Heart}</div>}
        <HeartBt images={images} buttonState={buttonState} setButtonState={setButtonState}/>
        </div>
        <Link to="/">もどる</Link>
        </>
    )
}

export default Show;

const Img=styled.img`
    width:100%;
    object-fit:contain;
`
