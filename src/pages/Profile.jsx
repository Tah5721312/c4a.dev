/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import { useEffect } from 'react';
import { useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import Moment from 'react-moment';

const Profile = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {

    if (!user && !loading)
               {navigate("/");}

    if (user) {
              if (!user.emailVerified) 
                { navigate("/");}
    }
  });
// },[user]);
  
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
    if (user.emailVerified) {
    return (
      <>
        <Helmet>
          <title>Profile Page</title>
  
          <style type="text/css">{` 
        


  
   `}</style>
  
        </Helmet>
  
        <Header />     
        {/* <MainContent pageName="JAVASCRIPT Page" /> */}
        {user && <main >
            <div className="prof">
               Email : {user.email}<br/>
                <div>  Welcome : {user.displayName}<br/></div>    {/* <span>🧡</span> */}
                <div>CreationTime : <Moment format="YYYY/MM/DD">{user.metadata.creationTime}</Moment></div>
                      <Moment fromNow date={user.metadata.creationTime}  />
                      <Moment fromNow date={user.metadata.lastSignInTime} />
                <div>Last sign in : <Moment format="YYYY/MM/DD">{user.metadata.lastSignInTime}</Moment></div><br/>          
            </div>
                    <button className="delete"  onClick={() => {
                    user.delete();  // Add parentheses to actually call the delete function
                    }}>Delete Account</button>
          </main>}
        <Footer />
      </>
    );
  }
  }

};

export default Profile;
