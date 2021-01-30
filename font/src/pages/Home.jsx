import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Axios from "axios";
import Head from "../components/Head/Head";
import News from "../components/news/News";
import Card1 from "../components/news/Card1";
import Card2 from "../components/news/Card2";
import img1 from '../components/news/News_img/card_FBS.png'
import img2 from '../components/news/News_img/card_Pic_2.png'
import img3 from '../components/news/News_img/card_04.png'


const Home = () => {
   const user = useSelector((state) => console.log(state.auth));
  
  
   
  return (
    <div>
      <Head/>
      <News/>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Card1/>
          </div>
          <div className="col-md-6">
            <Card2 
            img={img1}
            />
            <Card2
            img={img2}
            />
            <Card2
            img={img3}
            />
            <Card2
            img={img3}
            />
          </div>
        </div>
        <News/>
      </div>
    </div>
  );
};

export default Home;
