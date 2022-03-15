import LeftBanner from "./LeftBanner";
import RightBaner from "./RightBaner";
import heroBg from '../../images/heroBg.png';
import '../Style.css';
function Main(){
    return <>
        <div className="heroSection">
        <div className="container herobg">
            <div className="heroContainer">
                <LeftBanner />
                <RightBaner />
            </div>
        </div>
        <div className="herobackground">
            <img src={heroBg} alt="" />
        </div>
        </div>
    </>
}
export default Main;