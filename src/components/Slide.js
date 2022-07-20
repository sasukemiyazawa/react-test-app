import styled from "styled-components";
import Crown from "./Crown";
import Image from "./Image";
const Slide = (props) => {
    const {state, datas} = props
    return(
        <>
            <Bar>{state}位</Bar>
            <Crown state={state}/>
            <Image datas={datas} state={state}/>
        </>
    )
}

export default Slide;
const Bar = styled.div`
    position:absolute;

    top: 11px;
    left: 66px;
    width: 132px;
    height: 21px;
    text-align: center;
    font: normal normal bold 15px/21px Noto Sans JP;
    letter-spacing: 0px;
    color: #9A9A9A;
    opacity: 1;
`