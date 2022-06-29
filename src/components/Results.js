const Results = ({results}) => {
    return(
        <>
            <div>{results.name}</div>
            <div><img src={results.image}/> </div>

        </>
    );
};

export default Results;