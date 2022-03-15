import calvin from '../../images/calvin.png';
import allen from '../../images/allen.png';
import louis from '../../images/louis.png';
import shopIcon from '../../images/shopIcon.png';

function LeftBanner(){
    return <>
        <div className="leftbannerContainer">
            <div className="leftbannerHeading">
            <h1>Best <span>quality is our first</span> priority
                <img src={shopIcon} alt="" />
            </h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo facere aliquid natus nemo? Itaque, totam aliquid natus nemo? Itaque, totam.</p>
            <button className="dardBtn">Shop Now</button>
            <button className="lightBtn">Explore</button>
            </div>

            <div className="topBrandsText">
                <p>Top Brands-</p>
            </div>
            
            <div className="topBrandsContainer flex">
                <div className='allen'>
                    <img src={allen} alt="" />
                </div>
                <div className="calvin">
                    <img src={calvin} alt="" />
                </div>
                <div className="louis">
                    <img src={louis} alt="" />
                </div>
            </div>
        </div>
    </>
}
export default LeftBanner;