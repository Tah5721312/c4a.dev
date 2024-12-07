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

const Html = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (!user)
    {navigate("/");}
  },[user]);

  return (
    <>
      <Helmet>
        <title>html Page</title>
        <meta name="description" content="HTMLLLLLLLLLLLLLLLL" />
      </Helmet>
      <Header />
      <MainContent pageName="Mohamed Abdelftah  Page" />
      <Footer />
    </>
  );
};

export default Html;
