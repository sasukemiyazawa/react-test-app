import Results from "./Results";
import { useState, useEffect } from "react";
import axios from "axios";
const Scroll = ({buttonState, setButtonState, setShowId}) => {
    
    const [datas, setDatas]  = useState({
        no1: {},
        no2: {},
        no3: {}
    })

    const getData = (options) => {
        axios.get(`http://localhost:3001/api/v1/tokos${options}`)
            .then(res => {
            console.log(res)
            setDatas({
                no1: res.data.data[0],
                no2: res.data.data[1],
                no3: res.data.data[2]
            })
        })
    }
    useEffect(()=>{
        getData("/")
    },[buttonState])
    return(
    <div className="box">
    <Results results={datas.no1} buttonState={buttonState} setButtonState={setButtonState} setShowId={setShowId}/>
    <Results results={datas.no2} buttonState={buttonState} setButtonState={setButtonState} setShowId={setShowId}/>
    <Results results={datas.no3} buttonState={buttonState} setButtonState={setButtonState} setShowId={setShowId}/>
    </div>
   );
}

export default Scroll;
