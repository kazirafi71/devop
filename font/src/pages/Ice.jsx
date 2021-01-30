import React, { useEffect, useState } from "react";
import Axios from "axios";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Ice = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    Axios.get("/alumniIce")
      .then((result) => {
        // console.log(result.data.result)
        setResult(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row text-center bg-danger py-5 mb-5 text-light">
          <h2>Alumni Member Of Department Of ICE</h2>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row gy-2">
          {result.length > 0 ? (
            <div className="container mb-5">
              <div className="row gy-2">
                {result.map((val) => {
                  console.log(val);

                  {
                    return (
                      <div className="col-md-4 ">
                        <div className="card text-center">
                          <img
                            src={val.img}
                            className="card-img-top img-fluid"
                            alt="no photo"
                          />
                          <div className="card-body">
                            <h5 className="card-title">{val.name}</h5>
                            <p className="card-text">
                              Department of {val.dept}{" "}
                            </p>
                            <p className="card-text">
                              Passing year: {val.passing_year}{" "}
                            </p>
                            <a
                              href={val.link}
                              className=""
                              style={{ cursor: "pointer" }}
                            >
                              <FacebookIcon
                                fontSize="large"
                                color="secondary"
                              />
                            </a>
                            <a
                              href={val.linkedInLink}
                              className=""
                              style={{ cursor: "pointer" }}
                            >
                              <LinkedInIcon
                                fontSize="large"
                                color="secondary"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          ) : (
            <h1 className=" text-center my-5 py-5"> No member found </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ice;
