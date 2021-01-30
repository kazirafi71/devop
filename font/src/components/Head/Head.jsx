import React from 'react';
import img from './Head_img/combocation@2x.png'
import './Head.css'

const Head = () => {
    return (
        <div>
            <img src={img} className="img-fluid"></img>
            <p className="py-4 text-center head__style">Welcome To Bangladesh University Of Professionals Alumni</p>

            <hr></hr>
        </div>
    );
};

export default Head;