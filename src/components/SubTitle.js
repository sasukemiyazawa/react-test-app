import styled from "styled-components";

const SubTitle = () => {
    return (
      <Subtitle>総合ランキング</Subtitle>
    );
}
export default SubTitle;

const Subtitle = styled.h1`

    position:relative;
    /* Layout Properties */
    top: 70px;
    left: 111px;
    width: 132px;
    height: 21px;
    /* UI Properties */
    text-align: center;
    font: normal normal bold 15px/21px Noto Sans JP;
    letter-spacing: 0px;
    color: #9A9A9A;
    opacity: 1;
`