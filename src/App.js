import './App.css';
import { useEffect, useState, useCallback } from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import axios from "axios";
import Results from './components/Results';
import Form from './components/Form';
import HeartBt from './components/HeartBt';
import Scroll from './components/Scroll';
import Show from './components/Show';

function App() {

  //サーバーからデータ取得用State
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

  const [images2, setImages2] = useState({
    id:"",
    name: "",
    comment: "",
    Heart: "",
    image: ""
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Results results={images} buttonState = {buttonState} setButtonState={setButtonState} setShowId={setShowId}/>
          <Scroll  buttonState = {buttonState} setButtonState={setButtonState} setShowId={setShowId}/>
          <Link to="/form">投稿する</Link>
        </Route>
        <Route exact path={"/form/"}>
          <Form/>
        </Route>
        {/* <Route exact path={"/show/"}> */}
          {/* <Show showId={showId} searchImage={(id)=>searchImage(id)} images2={images2}/> */}
        {/* </Route> */}
      </Switch>
    </BrowserRouter>
    // <div className="App"> 

    //   <Results results={images} buttonState = {buttonState} setButtonState={setButtonState}/>
    //   {/* <Heart images={images} buttonState = {buttonState} setButtonState={setButtonState}/> */}

    //   <Scroll  buttonState = {buttonState} setButtonState={setButtonState}/>
    //   <div>
    //     <Link to={"/home"}>ほー目</Link>
    //   </div>

    //   <BrowserRouter>
    //     <Routes>
    //       <Route path={"/"} element={<Home />} />
    //     </Routes>


    //   </BrowserRouter>
    //   {/* <Button getImage={getImage}/>
    //   <Results results={images}/>
    //   <Heart images={images} favorite={(images)=>favorite(images)}/>
    //   <Form setNm={setNm} setCom={setCom} selectImage={selectImage} sendFormData={sendFormData}/>
    //   <Search searchImage={searchImage} setId={setId}/>
    //   <Results results={images2}/>
    //   <Heart images={images2} favorite={(images)=>favorite(images)}/> */}

    // </div>
  );
}

export default App;
