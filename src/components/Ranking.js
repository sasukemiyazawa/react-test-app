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

const Ranking = ({setState, datas}) => {

    const Arrow_r = (props) => {
      const { className, style, onClick } = props;
      return(
        <IconButton_r 
          onClick={()=>{
            onClick()
          }}
          style={{
            ...style, 
            position: "relative",
            top: "-353px",
            left: "273px",
          }}>
            <ArrowRightIcon color="primary" fontSize="large"/>
        </IconButton_r>
        )
    }

    const Arrow_l = (props) => {
      const { className, style, onClick } = props;
      return(
        <IconButton_l 
          onClick={()=>{
            onClick()
          }}
          style={{
            ...style, 
            position: "relative",
            top: "144px",
            left: "-30px",
          }}>
        <ArrowLeftIcon color="primary" fontSize="large" /></IconButton_l>
      )
    }

    const settings = {
      dots: true,
      infinite: true,
      
      arrows: true,
      nextArrow: <Arrow_r/>,
      prevArrow: <Arrow_l/>,
      beforeChange: (current, next)=>setState(next+1),
      
      // autoplay: true,
      speed: 500,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    
    return (

        <ThemeProvider theme={theme}>
        <Div>

          <Container>
            <SliderWrapper>
              <StyledSlider {...settings}>
                  <div>
                    <Image datas={datas} state={1}/>
                    <StyledTypography>投稿者：{datas["no"+1].name}</StyledTypography>
                  </div>
                  
                  <div>
                    <Image datas={datas} state={2}/>
                    <StyledTypography>投稿者：{datas["no"+2].name}</StyledTypography>
                  </div>

                  <div>
                    <Image datas={datas} state={3}/>
                    <StyledTypography>投稿者：{datas["no"+3].name}</StyledTypography>
                  </div>
              </StyledSlider>
            </SliderWrapper>
          </Container>
        </Div>
        </ThemeProvider>
        
    );
  }
  
  export default Ranking;


//以下スタイル指定
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
});

const Div = styled.div`
    height:470px;
    position:relative;
    top:73px;
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  height:100%
`
const SliderWrapper = styled.div`
  width: calc(100% - 50px);
  .slick-prev:before,
  .slick-next:before {
    color: black;
  }
`
const StyledSlider = styled(Slider)`
  &.slick-slider {
    position:relative;
    height:100%
  }
  .slick-list {
    height: 100%;
  }
  .slick-track {
    height:100%;
  }
  .slick-slide {
    height: 100%;
    position:relative;
  }
  .slick-dots {
    position:absolute;
    bottom: 71px;
  }
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
  top: 331px;
  left: 49px;
  width: 81px;
  height: 13px;
  text-align: left;
  font: normal normal bold 9px/13px Noto Sans JP;
  letter-spacing: 0px;
  color: #9A9A9A;
  opacity: 1;
`