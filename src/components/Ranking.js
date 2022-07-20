import { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import Image from "./Image";
import { ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import { color } from "@mui/system";
import Crown from "./Crown";
import HeartBt from "./HeartBt";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Ranking = () => {

    const [state, setState] = useState(1)

    const [datas, setDatas] = useState({
        no1: {},
        no2: {},
        no3: {}
    })

    const getDatas = (options, id) => {
        axios.get(`http://localhost:3001/api/v1/tokos${options}`)
        .then(res => {
          console.log(res)
          setDatas({
            no1: res.data.data[0],
            no2: res.data.data[1],
            no3: res.data.data[2]
          })
        })
       .catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"));
    }

    const changeState_p = () => {
      if(state<3) setState(state+1)
      else setState(1)
    }

    const changeState_m = () => {
        if(state==1) setState(3)
        else setState(state-1)
    }

    const [buttonState, setButtonState] = useState(0)

    const Arrow_r = (props) => {
      const { className, style, onClick } = props;
      return(
        <>
        <IconButton_r 
          onClick={()=>{
            changeState_p()
            onClick()
          }}
          style={{
            ...style, 
            position: "absolute",
            top: "144px",
            left: "273px",
          }}>
            <ArrowRightIcon color="primary" fontSize="large"/>
        </IconButton_r>
        </>
      )
    }

    const Arrow_l = (props) => {
      const { className, style, onClick } = props;
      return(
        <IconButton_l 
          onClick={()=>{
            changeState_m()
            onClick()
          }}
          style={{
            ...style, 
            position: "absolute",
            top: "144px",
            left: "-37px",
          }}>
        <ArrowLeftIcon color="primary" fontSize="large" /></IconButton_l>
      )
      
    }

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      nextArrow: <Arrow_r/>,
      prevArrow: <Arrow_l/>
    };
    
    useEffect(()=>{
        getDatas("/heart")
    },[buttonState])

    return (

        <ThemeProvider theme={theme}>
        <Div>
          <StyledTypography>投稿者：{datas["no"+state].name}</StyledTypography>

          <StyledHeartBt images={datas["no"+state]} buttonState={buttonState} setButtonState={setButtonState} />

          <Container>
            <SliderWrapper>
              <StyledSlider {...settings}>
                  <div><Image datas={datas} state={1}/></div>
                  <div><Image datas={datas} state={2}/></div>
                  <div><Image datas={datas} state={3}/></div>
              </StyledSlider>
            </SliderWrapper>
          </Container>

          <div>
          <Bar>{state}位</Bar>
          <Crown state={state}/>  
          </div>

        </Div>
        

        </ThemeProvider>
        
    );
  }
  
  export default Ranking;


//以下スタイル指定
const Div = styled.div`
    height:470px;
`
const Bar = styled.div`
    position:absolute;

    top: 126px;
    left: 145px;
    width: 132px;
    height: 21px;
    text-align: center;
    font: normal normal bold 15px/21px Noto Sans JP;
    letter-spacing: 0px;
    color: #9A9A9A;
    opacity: 1;
    z-index: 1;
`

const IconButton_r = styled(IconButton)`
    
    position:absolute;
    top: 259px;
    left: 315px;
    width: 25px;
    height: 25px;

    background: '#F5F5F5';
    border: 1px solid '#A5A5A5';
`

const IconButton_l = styled(IconButton)`
    position:absolute;
    top: 259px;
    left: -14px;
    width: 25px;
    height: 25px;
    background: #F5F5F5 0% 0% no-repeat padding-box;
    border: 1px solid #A5A5A5;
    opacity: 1;
`

const StyledTypography = styled.h1`
  position:absolute;
  top: 471px;
  left: 70px;
  width: 81px;
  height: 13px;
  text-align: left;
  font: normal normal bold 9px/13px Noto Sans JP;
  letter-spacing: 0px;
  color: #9A9A9A;
  opacity: 1;
`

const StyledHeartBt = styled(HeartBt)`
  position:absolute;
  top: 480px;
  left: 200px;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const SliderWrapper = styled.div`
  width: calc(100% - 50px);
  /* position:fixed;
  top: 120px;
  left: 40px;
  width: 300px;
  height: 400px;

  border: 1px solid black; */
  /* width: calc(100% - 50px); */

  /* .slick-prev:before,
  .slick-next:before {
    color: black;
  } */
`
const StyledSlider = styled(Slider)`
  
  &.slick-slider{

    position:relative;
    top:74px;

    /* Layout Properties */
    /* top: 109px;
    left: 60px;
    width: 240px;
    height: 324px; */
    /* UI Properties */
    /* background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border: 1px solid #9A9A9A;
    border-radius: 7px;
    opacity: 1;

    overflow: hidden; */

    /* border: solid 1px black; */
  }
  .slick-slide{
    height: 100%;
    position:relative;
    left:-33px;
  }
  .slick-list{
    /* height: 277px; */
    height: 100%;
  }
`


const theme = createTheme({
    palette: {
      primary: {
        main: '#A5A5A5',
        contrastText: '#FFFFFF',
      },
      background: {
        default: '#F5F5F5'
      },
      text: {
        primary: '#FFFFFF'
      }
    },
    SliderWrapper: {
      
    }
  });
  
