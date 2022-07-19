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
                <Imagediv>{image_url && <Img src={image_url} />}</Imagediv>
            </Link>
            {/* {console.log(nm)} */}
        </>
    )
}

export default Image;

const Imagediv = styled.div`
    position:fixed;
    top: 156px;
    left: 60px;
    width: 240px;
    height: 277px;

    border: 1px solid #9A9A9A;
    border-radius: 0px 0px 7px 7px;
    opacity: 1;
`

const Img = styled.img`
    height:100%;
    width:100%;
    object-fit:cover;
`