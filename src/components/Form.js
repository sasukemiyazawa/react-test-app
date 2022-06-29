const Form = ({setNm, setCom, selectImage, sendFormData}) => {
    return(
        <div>
        <input type="text" placeholder="なまえ" onChange={(e) => setNm(e.target.value)}/>
        <input type="text" placeholder="こめんと" onChange={(e) => setCom(e.target.value)}/>
        <input type="file" onChange={(e) => selectImage(e)}/>
        <button onClick={sendFormData}>作成</button>
      </div>
    );
};

export default Form;