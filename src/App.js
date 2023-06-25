import {Routes,Route,useLocation} from 'react-router-dom';
import React,{useState,useEffect,useContext,useRef} from 'react';
import Home from '../src/components/Home';
import Contact from '../src/components/Contact';
import Foods from '../src/components/Foods';
import Header from './components/Header'
import ScrollT from './components/ScrollT'
import Product from './components/Product';
import SaveForLater from './components/SaveForLater';
import EmptyItem from './components/EmptyItem';
import Register from './components/Authentication/RegisterPage';
import Login from './components/Authentication/LoginPage';
import Account from './components/Account';
import Cart from './components/Cart';
import EmptyCart from './components/NoCartItems';
import Footer from './components/Footer';

import { userDetailApi } from "./components/Authentication/Api/Api";
import { isAuthenticatedLogin } from "./components/Authentication/Api/Auth";
import { db } from "./components/Authentication/Firebase/Fire";
import { getDocs, collection } from "firebase/firestore";
import {CartCont} from './components/context';



function App() {

  const {cart} = useContext(CartCont);
  const ref = useRef();
  const location = useLocation();
  const [userFName, setUserFName] = useState([]);
  const [deleteItmF,setDeleteItmF] = useState([]);

  // var reg = location.pathname =='/register';
  // var login = location.pathname =='/login';

  const showUserCommonHandler = (nameValue)=>{
    console.log(nameValue);
  }


  function getRegisteredDataFName() {
    const registerInfoRefFName = collection(db, "users");
    getDocs(registerInfoRefFName)
      .then((res) => {
        const userDisplayFName = res.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        checkLoggedInUserFName(userDisplayFName)
      })
      .catch((err) => {
        console.log(err);
      });
  }

function checkLoggedInUserFName(userDisplayFName) {
    if (isAuthenticatedLogin()) {
        userDetailApi().then((response) => {
          var loggedEmailFName = response.data.users[0].email
          userDisplayFName.filter((each)=>{ return each.data.email == loggedEmailFName}).map((eacI)=>{
            setUserFName(eacI)
            localStorage.setItem('userNameForHeader',eacI)
        })
        });
    }
}




  useEffect(() => {
    if(isAuthenticatedLogin()){
        getRegisteredDataFName();
    }
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    ref.current.scrollTo(0, 0)
  }, []);



const deletedItmHandler = (deletedItm)=>{
  setDeleteItmF(deletedItm)
}


  return (
      <>
      {
        isAuthenticatedLogin() ? <Header passName={userFName} />:null
      }
      <span ref={ref}></span>
       <Routes>
          <Route path='/' element={localStorage.getItem('idTokenLogin')!=null ? < Home /> : <Login />} exact/>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/foods' element={<Foods/>} />
          <Route path='/personal-details' element={<Account showUserCommon={showUserCommonHandler}/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={cart != '' ? <Cart deletedItm={deletedItmHandler} /> : <EmptyCart/>} />
          <Route path='/product/:id' element={<Product />} ></Route>
          {
            ((localStorage.getItem('myItems') != null) && (JSON.parse(localStorage.getItem('myItems')) != '')) ? <Route path='/save-Later' element={<SaveForLater/>} /> : <Route path='/save-Later' element={<EmptyItem/>} />
          }
        
      </Routes>

      {
        isAuthenticatedLogin() ? <Footer />:null
      }
  
      <ScrollT/>
      </>
  );
}

export default App;
