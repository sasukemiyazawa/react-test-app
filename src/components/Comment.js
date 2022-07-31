import styled from "styled-components";
const Comment = ({data}) => {
    return(
        <Div>
        <Com>{data.comment}</Com>
        </Div>
    )
}
export default Comment;

const Div = styled.div`

    position: relative;
    top: 22px;

    width: calc(100% - 100px);
    height: 70px;
    margin: auto;
    background-color: #E9E9E9;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Com = styled.h1`
    text-align: center;
    font: normal normal bold 12px/17px Noto Sans JP;
    letter-spacing: 0px;
    color: #9A9A9A;
    opacity: 1;
    /* margin: auto; */
    justify-content: center;
`