const Results = ({results}) => {
    return(
        <>
            <div>{results.id}</div>
            <div>{results.name}</div>
            <div>{results.Heart}</div>
            <div><img src={results.image}/> </div>
        </>
    );
};

export default Results;