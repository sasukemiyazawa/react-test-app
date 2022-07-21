import { Link } from "react-router-dom";
import styled from "styled-components";
import Crown from "./Crown";
const Image = ({datas, state}) => {

    const n = `no` + state
    // console.log(datas.datas[n])
    const {id, name, Heart, image_url} = datas[n]
    const link = '/show/' + id
    return(
        <>
            
                <Div>
                    <Crown state={state}/>
                    <Bar>{state}位</Bar>
                    <Imagediv>
                        <Link to={link}>
                            {image_url && <Img src={image_url} />}
                        </Link>
                    </Imagediv>
                </Div>
                
                {/* {image_url && <Img src={image_url} />} */}
                {/* <Imagediv></Imagediv> */}
            
            {/* {console.log(nm)} */}
        </>
    )
}

export default Image;

const Imagediv = styled.div`
   /* Layout Properties */
   position:relative;
    top: 45px;
    width: 240px;
    height: 279px;
    left: -1px;
    /* UI Properties */
    /* background: transparent url('img/cristina-gottardi-9TaYFMMapbA-unsplash.png') 0% 0% no-repeat padding-box; */
    border: 1px solid #9A9A9A;
    border-radius: 0px 0px 7px 7px;
    opacity: 1;
    overflow:hidden;
`

const Img = styled.img`
    /* top: 109px;
    left: 60px;
    width: 240px;
    height: 324px; */
    /* UI Properties */
    /* background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border: 1px solid #9A9A9A;
    border-radius: 7px;
    opacity: 1; */

    /* overflow:hidden; */
    height:100%;
    width:100%; 
    object-fit:cover;
`
const Div = styled.div`
    /* Layout Properties */
    position:relative;
    top: 0px;
    /* left: 60px; */
    width: 240px;
    height: 324px;
    /* UI Properties */
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border: 1px solid #9A9A9A;
    border-radius: 7px;
    opacity: 1;

    overflow: hidden;
    margin:auto;
`

const Bar = styled.div`
    position:absolute;

    top: 11px;
    left: 123px;
    /* width: 132px;
    height: 21px; */
    text-align: center;
    font: normal normal bold 15px/21px Noto Sans JP;
    letter-spacing: 0px;
    color: #9A9A9A;
    opacity: 1;
    z-index: 1;
`

