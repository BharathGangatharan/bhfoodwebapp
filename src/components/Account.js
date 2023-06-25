import { useEffect, useState } from "react";
import { userDetailApi } from "./Authentication/Api/Api";
import { isAuthenticatedLogin } from "./Authentication/Api/Auth";
import { db } from "./Authentication/Firebase/Fire";
import { getDocs, collection } from "firebase/firestore";
import UserProfie from './UserProfie'
import './Profile.css'

const Account = (props) => {
  const [user, setUser] = useState([]);

  function getRegisteredData() {
    const registerInfoRef = collection(db, "users");
    getDocs(registerInfoRef)
      .then((res) => {
        const userDisplay = res.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        checkLoggedInUser(userDisplay)
      })
      .catch((err) => {
        console.log(err);
      });
  }

function checkLoggedInUser(userDisplay) {
    if (isAuthenticatedLogin()) {
        userDetailApi().then((response) => {
          var loggedEmail = response.data.users[0].email
          userDisplay.filter((each)=>{ return each.data.email == loggedEmail}).map((eacI)=>(
            setUser(eacI)
          ))
        });
    }
}

  useEffect(() => {
    if(isAuthenticatedLogin()){
        getRegisteredData();
    }
  }, []);

  return (
    <div className="account-block">
      <h1>My Profile</h1>
      {
        user != '' ?<UserProfie userData={user}/> :''
      }
    </div>
  );
};

export default Account;
