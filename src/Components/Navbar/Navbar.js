import logo from '../../images/logo.png';
import search from '../../images/Search.png';
import bag from '../../images/Bag.png';
import user from '../../images/userDp.png';
import vector from '../../images/Vector.png'
import '../Style.css';

function Navbar(){
    return <>
        <div className="container">
            <nav className="navbar flex">
                <div className="logo-container flex">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="searchBar">
                        <img src={search} alt="" />
                        <input type="text" placeholder='Search'/>
                    </div>
                </div>
                <div className="navLinks">
                    <ul className='flex'>
                        <li><a href="">New Arrival</a></li> 
                        <li><a href="">Categories</a></li>            
                        <li><a href="">Dress</a></li> 
                        <li><a href="">Sale</a></li> 
                    </ul>
                </div>
                <div className="cart-container flex">
                    <div className="cart flex">
                        <img src={bag} alt="" />
                        <p>Cart</p>
                    </div>
                    <div className="myaccount flex">
                        <img src={user} alt="" />
                        <img src={vector} alt="" />
                    </div>
                </div>
            </nav>
        </div>
    </>
}
export default Navbar;