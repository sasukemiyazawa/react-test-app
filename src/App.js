import './App.css';
import { useEffect, useState, useCallback } from "react";
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import axios from "axios";
import Results from './components/Results';
import Button from './components/Button';
import Form from './components/Form';
import Search from './components/Search';
import HeartBt from './components/HeartBt';
import Scroll from './components/Scroll';

function App() {

  const [buttonState, setButtonState] = useState(0);

  //サーバーからデータ取得用State
  const [images, setImages] = useState({
    id: "",
    name: "",
    comment: "",
    Heart: "",
    image_url: ""
  });

  const [images2, setImages2] = useState({
    id:"",
    name: "",
    comment: "",
    Heart: "",
    image: ""
  });
  
  //formの入力データのid
  const [id, setId] = useState("")
  //formのイベントパラメータ設定
  const [nm, setNm] = useState('')
  const [com, setCom] = useState('')
  const [label, setLabel] = useState('')
  //画像だけ追加の操作が必要
  const selectImage = useCallback((e) => {
    const selectImage = e.target.files[0]
    setLabel(selectImage)
  }, [])

  //送信データ作成
  const createFormData = () => {
    const formData = new FormData();
    if (!label) return
    formData.append('toko[name]', nm)
    formData.append('toko[comment]', com)
    formData.append('toko[image]', label);
    return formData;
  }

  //データ送信（新規登録）
  const sendFormData = async () => {
    const url = 'http://localhost:3001/api/v1/tokos/'
    const data = await createFormData()
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      }
    }
    axios.post(url, data, config)
    .then(res => {
      console.log(res);
    })
    .catch(err => alert("エラーが発生しました"));
  }

  // データ送信（更新）
   const updatemData = async (id) => {
    const url = `http://localhost:3001/api/v1/tokos/${id}`
    const data = await createFormData()
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      }
    }
    axios.patch(url, data, config)
    .then(res => {
      console.log(res);
    })
    .catch(err => alert("エラーが発生しました"));
  }

  //データ取得(options)
  const getImage = (options) => {
    axios.get(`http://localhost:3001/api/v1/tokos${options}`)
      .then(res => {
        console.log(res)
        setImages({
          id: res.data.data[0].id,
          name: res.data.data[0].name,
          comment: res.data.data[0].comment,
          Heart: res.data.data[0].Heart,
          image_url: res.data.data[0].image_url
        })
      })
      .catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"));
  }

  //データ取得(id)
  const searchImage = () => {
    axios.get(`http://localhost:3001/api/v1/tokos/${id}`)
      .then(res => {
        console.log(res)
        setImages2({
          id: res.data.data.id,
          name: res.data.data.name,
          comment: res.data.data.comment,
          Heart: res.data.data.Heart,
          image: res.data.data.image_url
        })
      })
      .catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"));
  }

  // //最初に一度だけ呼ばれる
  useEffect(()=>{
    getImage("/heart")//いいね最多データを取得
  }, [buttonState])

  return (
    <div className="App"> 

      <Results results={images} buttonState = {buttonState} setButtonState={setButtonState}/>
      {/* <Heart images={images} buttonState = {buttonState} setButtonState={setButtonState}/> */}

      <Scroll  buttonState = {buttonState} setButtonState={setButtonState}/>
    
      {/* <Button getImage={getImage}/>
      <Results results={images}/>
      <Heart images={images} favorite={(images)=>favorite(images)}/>
      <Form setNm={setNm} setCom={setCom} selectImage={selectImage} sendFormData={sendFormData}/>
      <Search searchImage={searchImage} setId={setId}/>
      <Results results={images2}/>
      <Heart images={images2} favorite={(images)=>favorite(images)}/> */}

    </div>
  );
}

export default App;
