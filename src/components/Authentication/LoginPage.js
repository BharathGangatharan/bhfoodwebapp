import React,{useState,useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import LeftImage from '../../assets/images/login-left2.jpg';
import './LoginPage.css';
import { FiMail } from "react-icons/fi";
import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { LoginApi } from './Api/Api';
import { StoreUserDataLogin} from './Api/Storage';
import {isAuthenticatedLogin} from './Api/Auth';
import {Link,Navigate} from 'react-router-dom';
import LoaderImg from '../../assets/images/loadingImage2.png';



const LoginPage = () => {

    const initialValues = {
        email:"",
        password:"",
        customErr:null
    }

    const [formValues,setFormValues] = useState(initialValues);
    const [formErrors,setFormErrors] = useState({});
    const [eye,setEye] = useState(false);
    const[showPwd,setShowPwd] = useState('password');
    const [isloading,setIsLoading] = useState(false);


    const changeToText = ()=>{
        setShowPwd('text');
        setEye(true);
    }

    const changeToPwd = () =>{
        setShowPwd('password');
        setEye(false);
    }


    const handleInput = (e) =>{
        const {name, value} = e.target;
        setFormValues({...formValues,[name]:value});
    }

    const handleSubmit =(e)=> {
        e.preventDefault();
        validateForm(formValues);
    }


    const validateForm = (values) =>{
        const errors = {};
        let hasError = false;

        if (!values.email) {
            errors.email = "Email is required";
            hasError = true;

        }
        if (!values.password) {
            errors.password = "Password is required";
            hasError = true;

        }


        if (hasError === false) {
            setIsLoading(true);
            LoginApi(formValues).then((res)=>{
                console.log('login',res)
                StoreUserDataLogin(res.data.idToken);
            }).catch((err)=>{
                console.log(err);
                if (err.response.data.error.message == "INVALID_PASSWORD"){
                    setFormErrors({...formErrors,customErr:"Invalid Login Credentials"});
                } else if (err.response.data.error.message == "EMAIL_NOT_FOUND"){
                    setFormErrors({...formErrors,customErr:"This email is not Registered"});
                }
            }).finally(()=>{
                setIsLoading(false);
            });
        } else {
            if (hasError === true) {
                return setFormErrors(errors);
            } else {
                return;
            }
        }

    }

    if(isAuthenticatedLogin()) {
        return <Navigate to="/" />
    }

    return (
        <div className="Login-container">
            <div className="Login-left-image">
                <img src={LeftImage} />
            </div>
            <div className="Login_wrapper">
                <Form className="form_block" onSubmit={handleSubmit}>
                    <Form.Group >
                        <Form.Label>Email address</Form.Label>
                        <div className="email-block">
                            <Form.Control type="email" placeholder="Enter a email" size="md" value={formValues.email} name="email" onChange={handleInput}/>
                            <FiMail className="email-icon"/>
                            <span className="Error-Text">{formErrors.email}</span>
                        </div>
                        <Form.Label>Password</Form.Label>
                        <div className="pwd-block">
                            <BiLock className="pwd-lock"/>
                            <Form.Control type={showPwd} placeholder="Password" size="md" value={formValues.password} name="password" onChange={handleInput}/>
                            <span className="Error-Text">{formErrors.password}</span>
                            
                            {
                                eye ?  <AiFillEye className="pwd-icon" onClick={changeToPwd} /> : <AiFillEyeInvisible className="pwd-icon" onClick={changeToText}/>
                            }
                            
                        </div>
                    </Form.Group>
                    <span className="Error-Text">{formErrors.customErr}</span>
                     {
                        isloading ? <img src={LoaderImg} className="loaderImageBlock" />: ''
                    }  
                    <Button type="submit" className="button">LOGIN</Button>
                </Form>
                <p>Create New Account? <Link to="/register" className="login-register">Register</Link></p>
            </div>
        </div>
    )
}

export default LoginPage;
