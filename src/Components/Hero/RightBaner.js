import hero from '../../images/heroImg.png';
import profile from '../../images/profileimg.png';
import rightArrow from '../../images/rightarrow.png';
import shadow from '../../images/shadow.png';
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import img4 from '../../images/img4.png'
import starbottom from '../../images/starbottom.png'
import star from '../../images/star.png';
import linkedin from '../../images/linkedin.png'
import twitter from '../../images/twitter.png'
import instagram from '../../images/instagram.png'
import m from '../../images/m.png'
import fueler from '../../images/fueler.svg';

function RightBaner(){
    return <>
        <div className="rightbanerContainer">
            <div className="heroImg">
                <img className='heroImages' src={hero} alt="" />
            </div>
            <div className="profileContainer">
                <div className="userContainer flex">
                    <div className="profileHead flex">
                        <div>
                        <img src={profile} alt="" />
                        </div>
                        <div>
                            <h4>Rose Marry</h4>
                            <p>Mumbai</p>
                        </div>
                    </div>
                    <div className="profileArrow">
                        <div>
                            <img src={rightArrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="feedbackContainer">
                <div className="feedback">
                    <div className="feedbackheader flex">
                    <h4>Our <span>Feedback</span></h4>
                    <img src={star} alt="" />
                    </div>
                    <div className="feedbackimg">
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                    </div>
                    <div className='feedbackfooter flex'>
                        <img src={starbottom} alt="" />
                        <p>4.8 (2002) reviews</p>
                    </div>
                </div>
            </div>
            <div className="social">
                <ul>
                    <li><img src={instagram} alt="" /></li>
                    <li><img src={twitter} alt="" /></li>
                    <li><img src={linkedin} alt="" /></li>
                    <li><img src={m} alt="" /></li>
                </ul>
            </div>
            <div className="poweredBy flex">
                <p>Powered By</p>
                <img src={fueler} alt="" />
                <p>Fueler</p> 
            </div>
            <img className='shadow' src={shadow} alt="" />
        </div>
    </>
}
export default RightBaner;