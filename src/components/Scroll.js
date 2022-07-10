import Results from "./Results";
import { useState, useEffect } from "react";
import axios from "axios";
const Scroll = ({buttonState, setButtonState, setShowId}) => {
    
    const [datas, setDatas]  = useState({
        no1: {},
        no2: {},
        no3: {},
        no4: {},
        no5: {}
    })

    const getData = (options) => {
        axios.get(`http://localhost:3001/api/v1/tokos${options}`)
            .then(res => {
            console.log(res)
            setDatas({
                no1: res.data.data[0],
                no2: res.data.data[1],
                no3: res.data.data[2],
                no4: res.data.data[3],
                no5: res.data.data[4]
            })
        })
    }
    useEffect(()=>{
        getData("/")
    },[buttonState])
    return(
        <>
        <div className="title2"><h4>新規投稿</h4></div>
        <div className="box">
            <Results results={datas.no1} buttonState={buttonState} setButtonState={setButtonState} setShowId={setShowId}/>
            <Results results={datas.no2} buttonState={buttonState} setButtonState={setButtonState} setShowId={setShowId}/>
            <Results results={datas.no3} buttonState={buttonState} setButtonState={setButtonState} setShowId={setShowId}/>
            <Results results={datas.no4} buttonState={buttonState} setButtonState={setButtonState} setShowId={setShowId}/>
            <Results results={datas.no5} buttonState={buttonState} setButtonState={setButtonState} setShowId={setShowId}/>
        </div>   
        </>
    
   );
}

export default Scroll;
