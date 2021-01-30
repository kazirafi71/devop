import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState("");
  const history=useHistory()

  const dispatch = useDispatch();
  const SubmitHandler = (e) => {

    e.preventDefault();

    

    const userData = {
      email,
      password,
    };
    Axios.post("/login", userData)
      .then((res) => {
        toast(res.data)
        setData(res.data);
        console.log(res.data)
        localStorage.setItem('auth_token', res.data.token);
        dispatch({ type: "SET_USER", payload: res.data});
          history.push('/')

      })
      .catch((err) => {
        toast(err.response.data.error)
        setError(err.response.data.error);
      });
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto card my-5 py-5 px-5">
            <h2 className="text-center">Login here</h2>
            <ToastContainer/>
            <br/>
            <form onSubmit={SubmitHandler}>
              <p>{error}</p>
              <p>{data.text}</p>
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
              <p>
                Don't have an account?<Link to="/register">Register here</Link>
              </p>

              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
