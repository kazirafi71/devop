import React from "react";

const Footer = () => {
  return (
    <div>
      <div  style={{background: '#1D1F37', color: 'white'}}>
        <div className="row">
          <div className="col-md-6 px-5 ">
            <h2 className="text-center py-4">About Us</h2>
            <p className="">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.<br></br> The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here
            </p>
          </div>
          <div className="col-md-6 ">
            <h2 className="text-center py-4" style={{marginLeft:"-140px"}}>Contact Us</h2>
            <div className="" style={{marginLeft:"120px"}}>
            <p>BANGLADESH UNIVERSITY OF PROFESSIONALS</p>
           <p>Cantonment, Dhaka- 1216 telephone88-02-8000368</p> 
            <p>fax88-02-8000443</p>
            <p>mailinfo@bup.edu.bd</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
