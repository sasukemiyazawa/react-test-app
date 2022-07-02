const Heart = ({images, favorite}) => {
    return(
        <button onClick={()=>favorite(images)}>いいね</button>
    );
};

export default Heart;