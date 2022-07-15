import { Link } from "react-router-dom";
import { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
const Form = () => {

     //formのイベントパラメータ設定
    const [nm, setNm] = useState('')
    const [com, setCom] = useState('')
    const [label, setLabel] = useState('')
    //画像だけ追加の操作が必要
    const selectImage = useCallback((e) => {
      const selectImage = e.target.files[0]
      setLabel(selectImage)
    }, [])

    //画像のプレビュー機能
    const [imgSrc, setImgSrc] = useState('')
    const previewFile = (e) => {
      const file = e.target.files[0]
      const reader = new FileReader();

      reader.addEventListener("load", ()=>{
        setImgSrc(reader.result)
      }, false)

      if (file) {
        reader.readAsDataURL(file);
      }
    }

    //遷移用
    let history = useHistory();

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
          history.push("/");
        })
        .catch(err => alert("エラーが発生しました"));
      }

    return(
      <div className="form">
        <h1>投稿画面です。</h1>
        <input type="text" placeholder="なまえ" onChange={(e) => setNm(e.target.value)}/>
        <input type="text" placeholder="こめんと" onChange={(e) => setCom(e.target.value)}/>
        <input type="file" onChange={(e) => {
          previewFile(e)
          selectImage(e)
        }
       }/>
        <button onClick={sendFormData}>作成</button>
        <Link to="/">もどる</Link>

        <br/>
        <>
        <img src={imgSrc} alt="プレビュー"/>
        </>
      </div>
    );
};

export default Form;



 // データ送信（更新）
  //  const updatemData = async (id) => {
  //   const url = `http://localhost:3001/api/v1/tokos/${id}`
  //   const data = await createFormData()
  //   const config = {
  //     headers: {
  //       'content-type': 'multipart/form-data',
  //     }
  //   }
  //   axios.patch(url, data, config)
  //   .then(res => {
  //     console.log(res);
  //   })
  //   .catch(err => alert("エラーが発生しました"));
  // }