import { Link } from "react-router-dom";
import HeartBt from "./HeartBt";
import styled from "styled-components";
import { Button } from "@mui/material";
// import {bg} from "../icon3.jpg"

const Result = ({results, buttonState, setButtonState, setShowId}) => {
    const {id, name, Heart, comment, image_url} = results
    return(
        <Resultdiv>
            <Title>本日の作品</Title>
            <Link to="/show" onClick={() => {setShowId(id)}}>
            {image_url && <DivImg><Img src={image_url}/></DivImg>}
            </Link>
            <Details>
                <div className="circle"></div>
                {name && 
                <div className="nowrap">
                    <p>{name}</p><p>さんの作品</p>
                </div>}
                {comment && <div className="nowrap"><p>「{comment}」</p></div>}
                {/* <div className="nowrap2">
                    <HeartBt images={results} buttonState={buttonState} setButtonState={setButtonState}/>
                </div> */}

                <StyledButton>いいね×{results.Heart}</StyledButton>
            </Details>
            
        </Resultdiv>
    );
};

export default Result;

//以下スタイル指定
const Resultdiv = styled.div`
    width: 100%;
    height: 70%;
`
const Title = styled.h4`
    height: 10%;
    margin: 10px;
    text-align: center;
`
const DivImg = styled.div`
    height: 85%;
    border-top: 1px solid black;
    text-align: center;
    border-bottom: 1px solid black;
`
const Img = styled.img`
    height: 100%;
    object-fit: contain;
`

const Details = styled.div`
`


const Circle = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: solid 2px black;
    margin-top: 10px;
    display: inline-block;

    background-image: url("../icon3.jpg");
    background-size: cover;
`

const StyledButton = styled(Button)`
    background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
    border-radius: 3px;
    border: 0;
    color: white;
    height: 48px;
    padding: 0 30px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
`