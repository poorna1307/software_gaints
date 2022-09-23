import Slider from "./Slider";

// import  from './Slider'
function Home(){
    return(
        <>
        <div >
        {/* <video autoPlay loop muted style={{height:"100vh", width:"100vw"}}>
            <source src={earth} type="video/mp4" ></source>
        </video> */}
        <h1 className="m-5 text-center">National Aeronautics and Space Administration</h1>
        <Slider />
        </div>
        </>
    )
}
export default Home;