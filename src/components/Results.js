const Results = ({results}) => {
    const {id, name, Heart, image} = results
    return(
        <>
            {image && <div><img src={image}/></div>}
            {/* <div>{id}</div> */}
            {name && <div>{name}さんの作品</div>}
            {Heart && <div>いいね：{Heart}</div>}
        </>
    );
};

export default Results;