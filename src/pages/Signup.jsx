/* eslint-disable no-unused-vars */
import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {useState} from 'react';
import {auth} from '../firebase/config';
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      <Header />

      <main>
        <form>
          <p style={{ fontSize: "23px", marginBottom: "22px" }}>Create a new account <span>🧡</span> </p>
          <input   onChange={(eo) => {setEmail(eo.target.value)}}  required  placeholder=" E-mail : "  type="email" />
          <input onChange={(eo) => {setPassword(eo.target.value)}} required placeholder=" Password : " type="password" />
          <button onClick={(eo) => {

                eo.preventDefault(); /////prevent default refresh for button 
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              console.log("done");
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
            console.log(errorMessage);
              // ..
            });
            
          }}>Sign up</button>
          <p className="account">
          Already hava an account <Link to="/signin"> Sign-in</Link>
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Signup;
