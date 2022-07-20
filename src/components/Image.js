import { Link } from "react-router-dom";
import styled from "styled-components";
const Image = (datas, state) => {
    // const {id, name, Heart, image_url} = results

    const n = `no` + datas.state
    // console.log(datas.datas[n])
    const {id, name, Heart, image_url} = datas.datas[n]
    const link = '/show/' + id
    return(
        <>
            <Link to={link}>
                <Div>
                    <Imagediv>{image_url && <Img src={image_url} />}</Imagediv>
                </Div>
                
                {/* {image_url && <Img src={image_url} />} */}
                {/* <Imagediv></Imagediv> */}
            </Link>
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
    height: 277px;
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
    left: 60px;
    width: 240px;
    height: 324px;
    /* UI Properties */
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border: 1px solid #9A9A9A;
    border-radius: 7px;
    opacity: 1;

    overflow: hidden;
`