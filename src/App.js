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

import Button from './components/Button';

function App() {

  //データ取得用State
  const [images, setImages] = useState({
    id: "",
    name: "",
    comment: "",
    Heart: "",
    image_url: ""
  });

  //いいねボタンが押される度変化するState
  const [buttonState, setButtonState] = useState(0);

  //詳細画面へ遷移するときに情報を見たいidを保存するState
  const [showId, setShowId] = useState("");

  //データ取得
  const getImage = (options, id) => {
    axios.get(`http://localhost:3001/api/v1/tokos${options}`)
    .then(res => {
      console.log(res)
      setImages({
        id: res.data.data[id].id,
        name: res.data.data[id].name,
        comment: res.data.data[id].comment,
        Heart: res.data.data[id].Heart,
        image_url: res.data.data[id].image_url
      })
    })
   .catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"));
  }

  //最初と、buttonStateが変化する度更新
  useEffect(()=>{
    getImage("/heart", 0)//いいね最多データを取得
  }, [buttonState])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Header />
          <SubTitle />
          <Ranking />
          {/* <Scroll  buttonState = {buttonState} setButtonState={setButtonState} setShowId={setShowId}/> */}

          {/* <Result results={images} buttonState = {buttonState} setButtonState={setButtonState} setShowId={setShowId}/> */}
          
          {/* <Button component={Link} to="/form"></Button> */}
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
