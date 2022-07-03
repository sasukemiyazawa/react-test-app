import Scroll from "./Scroll";

const Scrolls = () => {
    const scrolls = () => {
        for(var i=0; i<2; i++){
            console.log(i)
            return <li><Scroll i={i}/></li>
        }
    }
    
    return(
        <>
        {scrolls()}
        </>
    );
}

export default Scrolls;
