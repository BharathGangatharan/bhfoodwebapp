import React,{useState,useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './RegisterPage.css'
import '../Home.css';
import { RegisterApi } from './Api/Api';
import { StoreUserData} from './Api/Storage';
import {isAuthenticated} from './Api/Auth';
import {Navigate} from 'react-router-dom';
import LoaderImg from '../../assets/images/loadingImage2.png';
import RegBack from '../../assets/images/Register_bg4.jpg'
import '../Home.css';
import {db} from './Firebase/Fire';
import {addDoc , collection} from 'firebase/firestore';
import { Link } from 'react-router-dom';

const RegisterPage = () => {

    const initialValues = {
        email:"",
        password:"",
        name:"",
        mobile:"",
        customErr:null
    }

    const [formValues,setFormValues] = useState(initialValues);
    const [formErrors,setFormErrors] = useState({});
    const [isloading,setIsLoading] = useState(false);


    const handleInput = (e) =>{
        const {name, value} = e.target;
        setFormValues({...formValues,[name]:value});
    }


    const handleSubmit =(e)=> {
        e.preventDefault();
        validateForm(formValues);

        const registerInfoRef = collection(db,'users');
        addDoc(registerInfoRef,{
            email:formValues.email,
            name:formValues.name,
            password:formValues.password,
            mobile:formValues.mobile
        }).
        then(response => {console.log(response)})
        .catch(err => {console.log(err)})
    }


    const validateForm = (values) =>{
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        let hasError = false;


        if (!values.name) {
            errors.name = "Name is required";
            hasError = true;

        }
        if (!values.email) {
            errors.email = "Email is required";
            hasError = true;

        } else if(!regex.test(values.email)) {
            errors.email = "This is not a valid email format";
            hasError = true;
        }
        if (!values.password) {
            errors.password = "Password is required";
            hasError = true;

        }else if(values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
            hasError = true;
        }


        if (hasError === false) {
            setIsLoading(true);
            RegisterApi(formValues).then((res)=>{
                StoreUserData(res.data.idToken);
                console.log(res)
            }).catch((err)=>{
                console.log(err)
                if (err.response.data.error.message == "EMAIL_EXISTS"){
                    setFormErrors({...formErrors,customErr:"Already this email has been registered!"});
                }
            }).finally(()=>{
                setIsLoading(false);
            });
        } else {
            if (hasError === true) {
                console.log('error-coming')
                return setFormErrors(errors);
            } else {
                return;
            }
        }
    }

    // useEffect(()=>{
    //     if(isAuthenticated()) {
    //         navigate('/login');
    //     }
    // },[checkSubmitted])


    if(isAuthenticated()) {
        return <Navigate to="/login" />
    }



    return (
        <div className="Reg-container">
            <div className="bg-image">
                <img src={RegBack} />
            </div>

            <div className="register_wrapper">
                <Form className="form_block" onSubmit={handleSubmit}>
                    <Form.Group >

                        <Form.Group className="input_block">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter a name" size="md" value={formValues.name} name="name" onChange={handleInput}/>
                            <span className="Error-Text">{formErrors.name}</span>
                        </Form.Group >
                        <Form.Group className="input_block">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter a email" size="md" value={formValues.email} name="email" onChange={handleInput} />
                            <span className="Error-Text">{formErrors.email}</span>
                        </Form.Group >
                        <Form.Group className="input_block">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" size="md" name="password" value={formValues.password}  onChange={handleInput} />
                            <span className="Error-Text">{formErrors.password}</span>                           
                        </Form.Group >
                        <Form.Group className="input_block">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control type="text" placeholder="Enter a mobile number" size="md" value={formValues.mobile}  name="mobile" onChange={handleInput} />
                        </Form.Group >

                    </Form.Group>

                    <span className="Error-Text">{formErrors.customErr}</span>
                    {
                        isloading ? <div className="loaderImageBlock"> 
                                    <img src={LoaderImg}/>
                                    </div> : ''
                    }
                    <Button type="submit" className="button">REGISTER</Button>
                </Form>
                <div className="login-bottom">Already Registered ? <span><Link to="/login">Login</Link></span></div>
            </div>
        </div>
    )
}

export default RegisterPage;
