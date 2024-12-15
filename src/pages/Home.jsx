/* eslint-disable no-unused-vars */
import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import { useAuthState } from "react-firebase-hooks/auth";
import { createUserWithEmailAndPassword,updateProfile,sendEmailVerification} from "firebase/auth";
import { auth } from "../firebase/config";
import { Link } from "react-router-dom";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  if (loading) {
    return (
      <div>
        <Header />
        <main><h1>Loading.................</h1></main>
        <Footer />
      </div>
    );
  }
  if (!user) {
    return (
      <>
      <Helmet>
        <title>HOME Page</title>
        <meta name="description" content="HOMEEEEEEEEEEEE" />
      </Helmet>
      <Header />        
     <main>
               <p className="pls">
               Please{" "}
               <Link style={{ fontSize: "30px" }} to="/signin">
                 sign in
               </Link>{" "}
                to continue... 🔥
                 </p>
      </main>
         
      <Footer />
    </>

    )}

  if (user) {

      if (user.emailVerified) {
        return (
    
          <>
            <Helmet>
              <title>HOME Page</title>
              <meta name="description" content="HOMEEEEEEEEEEEE" />
            </Helmet>      
            <Header />
             <main>
             <p>  Welcome : {user.displayName} <span>🔥</span></p>
           </main>

        <Footer />
          </>
        );
      }
      if (!user.emailVerified) {
        return (
    
          <>
            <Helmet>
              <title>HOME Page</title>
              <meta name="description" content="HOMEEEEEEEEEEEE" />
            </Helmet>      
            <Header />
             <main>
             <p>  Welcome : {user.displayName} <span>🔥</span></p>
             <p>Please verify your email to continue ✋ </p>
            <button onClick={() => {
               sendEmailVerification(auth.currentUser)
               .then(() => {
                // Email verification sent!
                console.log("Email verification sent!");
              });
              
            }} className="delete" 
                >Send email</button>
             </main>

        <Footer />
          </>
        );
      }
    }


};

export default Home;
