import styled from "styled-components"
import gold from '../gold.png'
import silver from '../silver.png'
import bronze from '../bronze.png'
const Crown = (state) => {
    var img=''
    const State=state.state
    if(State==1)img=gold
    else if(State==2) img=silver
    else img=bronze
    return(
        <Img>
        <ImgCrown src={img} alt="crown" />
        </Img>
    )
}
export default Crown;

const Img = styled.div`
    position:absolute;
    /* Layout Properties */
    top: 7px;
    left: 75px;
    /* width: 36px;
    height: 50px; */
    /* UI Properties */
    opacity: 1;

    z-index: 1;
`

const ImgCrown = styled.img`
    object-fit:contain;
    width:36px;
    height:28px
`