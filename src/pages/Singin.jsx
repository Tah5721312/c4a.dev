/* eslint-disable no-unused-vars */
import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {useState} from 'react';
import {auth} from '../firebase/config';
import {signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";


const Signin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [hasError, sethasError] = useState(false);
  const [firebaseError, setfirebaseError] = useState("");

  return (
    <>
      <Helmet>
        <title>Signin</title>
      </Helmet>
      <Header />

      <main>
        <form>
        <input onChange={(eo) => {setEmail(eo.target.value)}} required placeholder=" E-mail : " type="email" />
        <input onChange={(eo) => {setPassword(eo.target.value)}} required placeholder=" Password : " type="password" />
          <button onClick={(eo) => {
              eo.preventDefault(); /////prevent default refresh for button 
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user);
              navigate("/");
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              sethasError(true)            
              switch (errorCode) {
                case "auth/invalid-email":
                  setfirebaseError("Wrong Email")
                  break;
                case "auth/invalid-login-credentials":
                  setfirebaseError("invalid Email OR Password")
                  break;
                case "auth/too-many-requests":
                  setfirebaseError("Please Try Again Later")
                  break;
                default:
                  setfirebaseError(errorCode)
                  break;
              }
            });   
            
          }}>Sign in</button>
          <p className="account">
            Don't hava an account <Link to="/signup"> Sign-up</Link>
          </p>
          {hasError && <h1>{firebaseError}</h1>}
        </form>    
      </main>
      <Footer />
    </>
  );
};

export default Signin;
