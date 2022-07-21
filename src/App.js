import './App.css';
import { useEffect, useState, useCallback } from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import axios from "axios";
import Result from './components/Result';
import Results from './components/Results';
import Form from './components/Form';
import HeartBt from './components/HeartBt';
import Scroll from './components/Scroll';
import Show from './components/Show';
import Header from './components/Header'
import SubTitle from './components/SubTitle';
import Ranking from './components/Ranking';
import styled from 'styled-components';
import Button from './components/Button';

function App() {

  const [state, setState] = useState(1)

  const [datas, setDatas] = useState({
    no1: {},
    no2: {},
    no3: {}
})

  const getDatas = (options, id) => {
    axios.get(`http://localhost:3001/api/v1/tokos${options}`)
      .then(res => {
        console.log(res)
        setDatas({
          no1: res.data.data[0],
          no2: res.data.data[1],
          no3: res.data.data[2]
        })
      })
   .catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"));
  }

  //いいねボタンが押される度変化するState
  const [buttonState, setButtonState] = useState(0);


  //最初と、buttonStateが変化する度更新
  useEffect(()=>{
    getDatas("/heart", 0)//いいね最多データを取得
  }, [buttonState])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Header />
          <SubTitle />
          <Ranking setState={setState} datas={datas}/>
          <StyledHeartBt images={datas["no"+state]} buttonState={buttonState} setButtonState={setButtonState}/>
        </Route>
        <Route exact path={"/form/"}>
          <Form/>
        </Route>
        <Route exact path={"/show/:id"}>
          <Show />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;


const StyledHeartBt = styled(HeartBt)`
  position:relative;
  /* top: 336px;
  left: 160px; */
`