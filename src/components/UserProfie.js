import React,{useState} from 'react';
import './Profile.css';
import ProfilePic from '../assets/images/profile-img.png';
import {Link} from 'react-router-dom';
import {Navigate} from 'react-router-dom';

const UserProfie = (props) => {
    const [checkLogOutPro,setCheckLogOutPro] = useState(false)

    const userName = props.userData.data.name;
    const userEmail = props.userData.data.email;
    const userMobile = props.userData.data.mobile
    localStorage.setItem('userName',userName)

    const signoffHandler = () => {

        setTimeout(()=>{
            localStorage.removeItem('idToken');
            localStorage.removeItem('idTokenLogin');
            localStorage.removeItem('userName');
            localStorage.removeItem('ModalClose');
            localStorage.removeItem('myItems');
            setCheckLogOutPro(true);
        },2000)
    }

    if(checkLogOutPro){
        return <Navigate to="/login"/>
    }

    return (
        <div className="userBlock_container">
            <div className="userBlock">
                <div className="UserMainBlock_left">
                    <div className="content">
                        <div className="img-content">
                            <img src={ProfilePic} alt="profile-pic"/>
                        </div>
                        <div className="img-content-right">
                            Hello,<br/>
                            <h5>{userName}</h5>
                        </div>
                    </div>
                    <div className="my-details">
                        <h5>My Stuff</h5>
                        <div className="my-details-links">
                            <Link to="/save-Later">Wish List</Link>
                            <Link to="/cart">My Cart</Link>
                            <a className="btn btn-primary" onClick={signoffHandler}>Logut</a>
                        </div>
                    </div>
                </div>
                <div className="UserMainBlock_right">
                    <div className="personal_name">
                        <h5>Name</h5>
                        <div className="detail">{userName}</div>
                    </div>
                    <div className="personal_email">
                        <h5>Email</h5>
                        <div className="detail">{userEmail}</div>
                    </div>
                    <div className="personal_number">
                        <h5>Mobile No</h5>
                        <div className="detail">{userMobile}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfie;
