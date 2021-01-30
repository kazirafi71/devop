import React, { useEffect } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import CallIcon from "@material-ui/icons/Call";
import PlaceIcon from "@material-ui/icons/Place";
import Aos from "aos";
import "aos/dist/aos.css";
import SocialCommon from "./SocialCommon";
import { socialData } from "./SocialData";

const Contact = () => {
  console.log(socialData);
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <div
        className="py-5"
        style={{
          backgroundColor: "#FF849C",
          fontFamily: "Quicksand",
          fontWeight: "600",
        }}
      >
        <h1 className="text-light m-5 p-4 ">Contact Us</h1>
      </div>

      <iframe
        data-aos="zoom-in"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.4081466931793!2d90.3576472!3d23.839636400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1410ff7f515%3A0x7655eae2540befbe!2sBangladesh%20University%20of%20Professionals!5e0!3m2!1sen!2sbd!4v1601788108018!5m2!1sen!2sbd"
        width="100%"
        height="450"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>

      <div className="container">
        <div className="row">
          <div
            data-aos="fade-left"
            className="col-md-6 my-5 border p-4 text-center rounded order-2"
          >
            <form>
              <h1
                className="mb-5"
                style={{
                  color: "#EC7063 ",
                  fontFamily: "Quicksand",
                  fontWeight: "600",
                }}
              >
                Get In Touch
              </h1>
              <div class="form-row">
                <div class="col mb-4">
                  <input type="text" class="form-control" placeholder="Name" />
                </div>
                <div class="col mb-4">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Message"
                    rows="3"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="my-4  btn-lg btn btn-outline-success d-flex justify-content-around"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div data-aos="fade-right" className="col-md-6 order-1 p-4 mt-5">
            <h2
              className="my-3 mb-4"
              style={{
                fontFamily: "Quicksand",
                fontWeight: "600",
                color: "#3498DB",
              }}
            >
              To know more about us or
              <br /> for any query,
            </h2>
            <h5
              className="my-2"
              style={{
                color: "#59B8B9",
                fontFamily: "Quicksand",
                fontWeight: "600",
              }}
            >
              BUP Alumni 
            </h5>
            <p>
              Bangladesh University of <br />
              Professionals
            </p>
            <p>
              <PlaceIcon />
              Mirpur Cantonment, Dhaka-1216
            </p>
            <p className="mb-4">
              <CallIcon />
              +8801xxxxxxxxx
            </p>

            <a className="p-3" style={{ color: "black" }} href="#">
              <FacebookIcon fontSize="large" />
            </a>
            <a className="p-3" href="#">
              <LinkedInIcon fontSize="large" />
            </a>
            <a style={{ color: "#EC7063" }} className="p-3" href="#">
              <InstagramIcon fontSize="large" />
            </a>
          </div>
        </div>
      </div>
      <section id="socail" style={{ backgroundColor: "black" }}>
        <div className="container pb-5">
          <div className="row  xyz">
            <h1 className="text-center my-5 text-warning">Contact With Us</h1>
            <SocialCommon fontSize="20px" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
