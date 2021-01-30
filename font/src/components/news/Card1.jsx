import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './News_img/card_04.png'
const Card1 = ({link}) => {
    return (
        <div>
            <div className="card text-center" >
  <img src={img1} className="card-img-top img-fluid" alt=""/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to='/readmore' className="btn btn-primary">Read more</Link>
  </div>
</div>
        </div>
    );
};

export default Card1;