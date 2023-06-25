import {React,useState,useEffect,useContext} from 'react';
import { Link } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
import './Header.css';
import '../General.css';
import { Button } from 'react-bootstrap';
import {Navigate} from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../General.css';
import {CartCont} from './context';


const Header = (props) => {

    const {cart} = useContext(CartCont);

    const [isMobileView,setMobileView] = useState(false);
    const [dropDownShow,setDropDownShow] = useState(false)
    const [checkLogOut,setCheckLogOut] = useState(false)
    

    // const LOGGED_NAME = localStorage.getItem('userName');
    // console.log(LOGGED_NAME)

   
    //let COUNT = localStorage.getItem('myItems');

    const sidebarOpen = () => {
        setMobileView(!isMobileView);
    }


    const dropDownHandler = () =>{
        setDropDownShow(!dropDownShow)
    }

    const signOutHandler = () => {
        toast.warning(<span>User Logged Out Successfully!</span>,{  
        })

        setTimeout(()=>{
            localStorage.removeItem('idToken');
            localStorage.removeItem('idTokenLogin');
            localStorage.removeItem('userName');
            localStorage.removeItem('ModalClose');
            localStorage.removeItem('myItems');
            setCheckLogOut(true)
        },2000)
    }

    const handLeMouseLeave = ()=>{
        setDropDownShow(false)
    }


    if(checkLogOut){
        return <Navigate to="/login"/>
    }


    return (
        <div className="PParentHeaderContainer">
            <div className="PHeaderContainer" >
                <div className="logo_block">
                <Link to="/"><h1>Pizza Castle</h1></Link>        
                </div>
                <div className="PHeaderNavigate">
                    <ul>
                        <li><Link to="/"><h5>Home</h5></Link></li>
                        <li><Link to="/foods"><h5>Foods</h5></Link></li>
                        {/* <li><Link to="/product"><h5>Product</h5></Link></li> */}
                        <li>
                            <Link to="/save-Later">
                                <h5 className="badgeContainer">
                                    Saved Items
                                </h5>
                            </Link>
                        </li>
                        <li><Link to="/contact"><h5>Contact</h5></Link></li>
                    </ul>
                    <div className="Pprofilesect">
                        <span><Link to="/cart"><i class="ri-shopping-cart-fill"></i>
                        <Badge pill className="bagePill">{cart.length}</Badge>{' '}
                        </Link></span>
                        <span><i class="ri-account-circle-line" onClick={dropDownHandler}></i></span>
                        {
                            dropDownShow ?(
                            <div className="dropDown-container">
                                <div className="dropDown-container-main"></div>
                                <div className="view-Account" onMouseLeave={handLeMouseLeave}>
                                    <Link to='/personal-details'>View Account</Link>
                                    <a class="logoutBtn" onClick={signOutHandler}>
                                    <ToastContainer 
                                        position={"top-right"}
                                        passOnFocusLoss={false}
                                        toastStyle={{height:"10px"}}
                                        autoClose={3000}                   
                                    />
                                    Sign out</a>
                                </div>
                            </div>
                            ):''
                        }   

                    </div>
                </div> 
                <div className="User_Name User_Name_Desktop">
                    {/* <h3>{LOGGED_NAME}</h3> */}
                    <h3>{props.passName == '' ?'':props.passName.data.name}</h3>
                </div>
                <Button variant="light" className="Ham_Button" onClick={sidebarOpen}>
                    <i class="ri-menu-3-fill"></i>
                </Button>

                {
                    isMobileView ? <div className="sidebar">
                    <span className="mob-hamburger" onClick={sidebarOpen} ><i class="ri-close-line"></i></span> 

                    <div className="User_Name">
                        <h3>{props.passName == '' ?'':props.passName.data.name}</h3>
                    </div>
                    <ul>
                        <li><Link to="/"><h5>Home</h5></Link></li>
                        <li><Link to="/foods"><h5>Foods</h5></Link></li>
                                                <li>
                            <Link to="/save-Later">
                                <h5 className="badgeContainer">
                                    Saved Items
                                </h5>
                            </Link>
                        </li>
                        <li><Link to="/contact"><h5>Contact</h5></Link></li>
                    </ul>
                    <div className="Pprofilesect">
                        <span><Link to="/cart"><i class="ri-shopping-cart-fill"></i>
                        <Badge pill className="bagePill">{cart.length}</Badge>
                        </Link></span>
                        <span>
                        <Link to='/personal-details'><i class="ri-account-circle-line"></i></Link></span>
                    </div>
                    </div> : ''
                }
                
            </div>
        </div>
    )
}

export default Header;
