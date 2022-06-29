const Search = ({searchImage, setId}) => {
    return(
        // <button onClick={searchImage}>データ取得(id)</button>
        <>
            <input type="text" placeholder="id" onChange={e => setId(e.target.value)} />
            <button onClick={searchImage}>データ取得(id)</button>
        </>
    );
};

export default Search;