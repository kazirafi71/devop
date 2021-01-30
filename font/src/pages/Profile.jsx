import React, { useEffect, useState } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { useSelector } from "react-redux";
import Axios from "axios";


const Profile = () => {
  const [profile, setProfile] = useState("");

  useEffect(() => {
    Axios.get("/profile", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("auth_token"),
      },
    })
      .then((result) => {
        console.log(result.data);
        setProfile(result.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="container my-5">
        <div className="row text-center">
            <div className="col-md-6 mx-auto">
          <img
            className="img-fluid "
            style={{
              height: "300px",
              width: "400px",
              display: "block",
              marginLeft: "auto",
              marginRight: " auto",
            }}
            src={profile.img}
            alt="profile pic"
          ></img>
          <h1 className="text-center py-3">{profile.name}</h1>
          <div className="card">
            <div className="card-body">
              <p>Department: {profile.dept} </p>
              <p>Batch: {profile.batch}</p>
              <p>Passing year: {profile.passing_year}</p>
              <p>Job Details: {profile.job_details}</p>
              <p>Social Links</p>
              <a href={profile.link} className="" style={{ cursor: "pointer" }}>
                <FacebookIcon fontSize="large" color="secondary" />
              </a>
              <a
                href={profile.linkedInLink}
                className=""
                style={{ cursor: "pointer" }}
              >
                <LinkedInIcon fontSize="large" color="secondary" />
              </a>
            </div>
          </div>
        </div></div>
      </div>
      )
    </div>
  );
};

export default Profile;
