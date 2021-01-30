import React, { useEffect } from 'react';
import {socialData} from './SocialData'
import Aos from 'aos'
import 'aos/dist/aos.css'


const SocialCommon = () => {
    console.log(socialData)
    useEffect(()=>{
        Aos.init({duration:2000},[])
    })
    
    return (
        <div id='social'>
            <div className="container ">
                <div  className="row justify-content-around">
                {socialData.map((val)=>{
                return(<div  className="shadow  g-4 gx-4 text-center col-md-5 box">
                    <div data-aos="fade-up"  className="row rounded abc p-2 bg-dark">
                    <div data-aos="fade-left"  className="col-8 text-light">
                        <h1>{val.title}</h1>
                        <p style={{color:' #00E9A5'}}>{val.des}</p>
                    </div>
                    <div className="col-4 hover">
                    <i style={{fontSize:'40px',marginTop:'20px'}} className='icon-style hover' className={val.icon} aria-hidden="true"></i>
                    </div>
                    </div>
                    
                
                </div>
                )
            })}
                </div>
            </div>
            
            
            
        </div>
    );
};

export default SocialCommon;