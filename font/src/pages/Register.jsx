import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [dept, setDept] = useState("");
  const [passing_year, setPassing_year] = useState("");
  const [batch, setBatch] = useState("");
  const [address, setAddress] = useState("");
  const [student_Id, setStudent_Id] = useState("");
  const [job_details, setJob_details] = useState("");
  const [link, setLink] = useState("");
  const [linkedInLink, setLinkedInLink] = useState("");
  const [image,setImage] = useState("")
  const [url,setUrl] = useState("")

  const history = useHistory();

  

  useEffect(() => {
    if(url){
      console.log(url)
    let userData = {
      name,
      email,
      password,
      confirmPassword,
      dept,
      passing_year,
      batch,
      address,
      student_Id,
      job_details,
      link,
      linkedInLink,
      img: url
    };
    Axios.post("/register", userData)
      .then((res) => {
        toast("Registration successful");
        history.push("/login");
      })
      .catch((err) => {
        toast(err.response.data.error);
        setError(err.response.data);
        console.log(err.response.data);
      });
  }},[url]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    

    // if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
    // {
    //     return toast('Email not valid')
    // }

    const data = new FormData();
    data.append("file",image)
    data.append("upload_preset", "hello-71");
    data.append("cloud_name", "dsiu5wh2t");
   
    fetch("https://api.cloudinary.com/v1_1/dsiu5wh2t/image/upload",{
           method:"post",
           body:data
       })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
     setUrl(data.url)
  })
  .catch(err=>{
      console.log(err)
  });

   
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto card p-5 my-5">
            <h2 className="text-center">Register here as a member</h2>
            <br />
            <ToastContainer />
            <form onSubmit={SubmitHandler}>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Please enter your username"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <br />
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Please enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <br />
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Please enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <br />
              <div className="form-group">
                <label for="exampleInputPassword1">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Please enter your Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <br></br>
                <div className="form-group">
                  <label>Department</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Please enter your department"
                    onChange={(e) => setDept(e.target.value)}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>Batch</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Please enter your Batch"
                    onChange={(e) => setBatch(e.target.value)}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>Passing_Year</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Please enter your Passing_Year"
                    onChange={(e) => setPassing_year(e.target.value)}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>Student Id</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Please enter your Student Id"
                    onChange={(e) => setStudent_Id(e.target.value)}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Please enter your Address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>Job_details</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Please enter your Job_details"
                    onChange={(e) => setJob_details(e.target.value)}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>Facebook Link</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Please enter your Facebook Link"
                    onChange={(e) => setLink(e.target.value)}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>LinkedIn</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Please enter your LinkedIn Link"
                    onChange={(e) => setLinkedInLink(e.target.value)}
                  />
                </div>
                <br />
                <div className="input-group mb-3">
                  <div className="custom-file">
                    <label className="custom-file-label" for="inputGroupFile01">
                      Choose file for profile pic
                    </label>
                    <br />
                    <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
                  </div>
                </div>
                <br />
              </div>
              <p>
                Already have an account?<Link to="/login">Login here</Link>
              </p>

              <button type="submit" className="btn btn-primary mb-4">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
