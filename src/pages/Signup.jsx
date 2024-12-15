/* eslint-disable no-unused-vars */
import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {useState} from 'react';
import {auth} from '../firebase/config';
import { createUserWithEmailAndPassword,updateProfile,sendEmailVerification} from "firebase/auth";
import { useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from 'react';

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [hasError, sethasError] = useState(false);
  const [firebaseError, setfirebaseError] = useState("");
  const [userName, setuserName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  
  // Loading    (done)
  // NOT sign-in  (done)
  // sign-in without Email verification   (done)
  // (sign-in && verified email) => navigate(/)
  useEffect(() => {

    if (!user && !loading)
               {navigate("/");}

    if (user) {
              if (!user.emailVerified) 
                { navigate("/");}
    }
  });

  if (loading) {
    return (
      <div>
        <Header />
        <main><h1>Loading.................</h1></main>
        <Footer />
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (user) {
    if (!user.emailVerified) {
      return (
        <div>
          <Header />
  
          <main>
            <p>We send you an email to verify your Account</p>
            <button className="delete">Send again</button>
          </main>
          <Footer />
        </div>
      );
    }
  }

  if(!user)
    {
      return (
        <>
          <Helmet>
            <title>Signup</title>
          </Helmet>
          <Header />
    
          <main>
            <form>
              <p style={{ fontSize: "23px", marginBottom: "22px" }}>Create a new account <span>🧡</span> </p>
    
              <input onChange={(eo) => {setuserName(eo.target.value)}} required placeholder=" UserName : " type="text" />
              <input   onChange={(eo) => {setEmail(eo.target.value)}}  required  placeholder=" E-mail : "  type="email" />
              <input onChange={(eo) => {setPassword(eo.target.value)}} required placeholder=" Password : " type="password" />
              <button onClick={(eo) => {
    
                    eo.preventDefault(); /////prevent default refresh for button 
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed up 
                  const user = userCredential.user;
                 console.log(user);

                 sendEmailVerification(auth.currentUser)
                 .then(() => {
                  // Email verification sent!
                  console.log("Email verification sent!");
                });

                  updateProfile(auth.currentUser, {
                    displayName: userName
                  }).then(() => {
    
                    navigate("/");
    
                  }).catch((error) => {
                    
                    console.log(error.code);
    
                  });
    
    
                  
                
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
                
              }}>Sign up</button>
              <p className="account">
              Already hava an account <Link to="/signin"> Sign-in</Link>
              </p>  
              {/* hasError ---> true or false */}
              {hasError && <h1>{firebaseError}</h1>}
    
            </form>
    
    
          </main>
          <Footer />
        </>
      );
  }


};

export default Signup;
