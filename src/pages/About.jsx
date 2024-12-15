/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import { useEffect } from 'react';
import { useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";

const About = () => {
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
            <title>About Page</title>
            <meta name="description" content="About" />
          </Helmet>
          <Header />
          <MainContent pageName="Mohamed Abdelftah  Page" />
          <Footer />
        </>
      );
    }
  
  }

};

export default About;
