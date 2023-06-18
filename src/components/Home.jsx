import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import img from "../Images/c33.png";
import img2 from "../Images/c3.png";
import img3 from "../Images/c1.png";
import img4 from "../Images/c4.png";
import img5 from "../Images/c5.png";
import img6 from "../Images/c6.png";
import img7 from "../Images/c7.png";
import img8 from "../Images/c8.png";
import img9 from "../Images/c9.png";
import img10 from "../Images/c10.png";
import img11 from "../Images/c11.png";
import img12 from "../Images/c12.png";
import img13 from "../Images/c13.png";
import img14 from "../Images/c14.png";
import img15 from "../Images/c15.png";
import img16 from "../Images/c16.png";
import img17 from "../Images/c17.png";
import img18 from "../Images/c18.png";
import img19 from "../Images/c19.png";
import img20 from "../Images/c20.png";
import img21 from "../Images/c21.png";
import img22 from "../Images/c22.png";
import img23 from "../Images/c23.png";
import img24 from "../Images/c24.png";
import img25 from "../Images/c25.png";
import img26 from "../Images/c26.png";
import img27 from "../Images/c59.png";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };
  const settings3 = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
  };

  const [show, setShow] = useState(false);

  function MyVerticallyCenteredModal(props) {
    console.log("Hello");
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <>
            <div className="login1">
              <div className="login2">
                <h4>Login</h4>
                <div className="login3">
                  <div className="login4">
                    <div className="login8">
                      <div className="login6">
                        <p>+91</p>
                      </div>
                      <div className="login7">
                        <input
                          type="text"
                          placeholder="Enter your mobile number"
                        />
                      </div>
                    </div>
                    <div className="login9">
                      <button>Request OTP</button>
                    </div>
                  </div>
                  <div className="login5">
                    <img src={img27} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal show={show} onHide={() => setShow(false)} />
      <div className="home1">
        <Slider {...settings}>
          <div className="car1">
            <img src={img26} />
          </div>
          <div className="car1">
            <img src={img} />
          </div>
        </Slider>
        <div className="home2">
          <div className="home3">
            <img src={img3} alt="" />
            <p>Top Universities</p>
            <p>Top Courses</p>
            <p onClick={() => navigate("/scholarships")}>Scholarships</p>
            <p>Exams</p>
            <p onClick={() => navigate("/common-applications")}>
              Common Applications
            </p>
            <p onClick={()=>navigate("/loan")} >Loan</p>
            <p>Admission 2023</p>
            <p>More</p>
            <div className="login10">
              <i class="fa-solid fa-user"></i>
              <p onClick={() => setShow(true)}>Login</p>
            </div>
          </div>
          <div className="home4">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search for colleges, exams, Q & A, articles"
            />
          </div>
          <div className="home5">
            <h2>Let's start your career journey.</h2>
          </div>
          <div className="home6">
            <button onClick={() => navigate("/screen2")}>
              Explore College & University
            </button>
          </div>
        </div>
      </div>
      <div className="home7">
        <h2>Top Cities</h2>
        <div className="home8">
          <div className="home9" onClick={() => navigate("/delhi")}>
            <img src={img4} alt="" />
            <p>Delhi</p>
          </div>
          <div className="home9">
            <img src={img5} alt="" onClick={() => navigate("/delhi")} />
            <p>Mumbai</p>
          </div>
          <div className="home9">
            <img src={img6} alt="" onClick={() => navigate("/delhi")} />
            <p>Kolkata</p>
          </div>
          <div className="home9">
            <img src={img7} alt="" onClick={() => navigate("/delhi")} />
            <p>Chennai</p>
          </div>
          <div className="home9">
            <img src={img8} alt="" onClick={() => navigate("/delhi")} />
            <p>Agra</p>
          </div>
          <div className="home9">
            <img src={img9} alt="" onClick={() => navigate("/delhi")} />
            <p>Jaipur</p>
          </div>
        </div>
      </div>
      <div className="home10">
        <h2>Top Colleges Near Me</h2>
        <div className="home11">
          <Slider {...settings2}>
            <div className="home12">
              <img className="home12img" src={img10} alt="" />
              <div className="home13">
                <div className="home14">
                  <h4>Jamai milia islamia</h4>
                  <p>30,000 yearly</p>
                </div>
                <div className="home15">
                  <h5>9.5/10</h5>
                  <p>20.5k Reviews</p>
                </div>
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>View all courses and fees</p>
                <img
                  src={img11}
                  alt=""
                  onClick={() => navigate("/college-info")}
                />
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>Download Broachers</p>
                <img src={img11} alt="" />
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>Compare</p>
                <img src={img11} alt="" />
              </div>
              <hr className="home16" />
            </div>
            <div className="home12">
              <img src={img12} alt="" />
              <div className="home13">
                <div className="home14">
                  <h4>Jamai milia islamia</h4>
                  <p>30,000 yearly</p>
                </div>
                <div className="home15">
                  <h5>9.5/10</h5>
                  <p>20.5k Reviews</p>
                </div>
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>View all courses and fees</p>
                <img
                  src={img11}
                  alt=""
                  onClick={() => navigate("/college-info")}
                />
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>Download Broachers</p>
                <img src={img11} alt="" />
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>Compare</p>
                <img src={img11} alt="" />
              </div>
              <hr className="home16" />
            </div>
            <div className="home12">
              <img src={img13} alt="" />
              <div className="home13">
                <div className="home14">
                  <h4>Jamai milia islamia</h4>
                  <p>30,000 yearly</p>
                </div>
                <div className="home15">
                  <h5>9.5/10</h5>
                  <p>20.5k Reviews</p>
                </div>
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>View all courses and fees</p>
                <img
                  src={img11}
                  alt=""
                  onClick={() => navigate("/college-info")}
                />
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>Download Broachers</p>
                <img src={img11} alt="" />
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>Compare</p>
                <img src={img11} alt="" />
              </div>
              <hr className="home16" />
            </div>
            <div className="home12">
              <img src={img10} alt="" />
              <div className="home13">
                <div className="home14">
                  <h4>Jamai milia islamia</h4>
                  <p>30,000 yearly</p>
                </div>
                <div className="home15">
                  <h5>9.5/10</h5>
                  <p>20.5k Reviews</p>
                </div>
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>View all courses and fees</p>
                <img
                  src={img11}
                  alt=""
                  onClick={() => navigate("/college-info")}
                />
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>Download Broachers</p>
                <img src={img11} alt="" />
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>Compare</p>
                <img src={img11} alt="" />
              </div>
              <hr className="home16" />
            </div>
            <div className="home12">
              <img src={img12} alt="" />
              <div className="home13">
                <div className="home14">
                  <h4>Jamai milia islamia</h4>
                  <p>30,000 yearly</p>
                </div>
                <div className="home15">
                  <h5>9.5/10</h5>
                  <p>20.5k Reviews</p>
                </div>
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>View all courses and fees</p>
                <img src={img11} alt="" />
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>Download Broachers</p>
                <img src={img11} alt="" />
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>Compare</p>
                <img src={img11} alt="" />
              </div>
              <hr className="home16" />
            </div>
          </Slider>
        </div>
      </div>
      <div className="home18">
        <h2>Explore your future</h2>
        <p>Select your college</p>
        <div className="home19">
          <div className="home20">Colleges</div>
          <div className="home20">Exams</div>
        </div>
        <div className="home21">
          <div className="home22" onClick={() => navigate("/management")}>
            <img className="impimg" src={img16} alt="" />
            <div className="home23">
              <h6>Management</h6>
              <p>461 colleges</p>
            </div>
            <img className="img23" src={img11} />
          </div>
          <div className="home22">
            <img className="impimg" src={img14} alt="" />
            <div className="home23">
              <h6>Engineering</h6>
              <p>461 colleges</p>
            </div>
            <img className="img23" src={img11} />
          </div>
          <div className="home22">
            <img className="impimg" src={img15} alt="" />
            <div className="home23">
              <h6>Law</h6>
              <p>461 colleges</p>
            </div>
            <img className="img23" src={img11} />
          </div>
          <div className="home22">
            <img className="impimg" src={img17} alt="" />
            <div className="home23">
              <h6>Science</h6>
              <p>461 colleges</p>
            </div>
            <img className="img23" src={img11} />
          </div>
          <div className="home22">
            <img className="impimg" src={img18} alt="" />
            <div className="home23">
              <h6>Commerce</h6>
              <p>461 colleges</p>
            </div>
            <img className="img23" src={img11} />
          </div>
          <div className="home22">
            <img className="impimg" src={img19} alt="" />
            <div className="home23">
              <h6>Arts</h6>
              <p>461 colleges</p>
            </div>
            <img className="img23" src={img11} />
          </div>
          <div className="home22">
            <img className="impimg" src={img20} alt="" />
            <div className="home23">
              <h6>Medical</h6>
              <p>461 colleges</p>
            </div>
            <img className="img23" src={img11} />
          </div>
          <div className="home22">
            <img className="impimg" src={img21} alt="" />
            <div className="home23">
              <h6>Paramedical</h6>
              <p>461 colleges</p>
            </div>
            <img className="img23" src={img11} />
          </div>
          <div className="home22">
            <img className="impimg" src={img22} alt="" />
            <div className="home23">
              <h6>Pharmacy</h6>
              <p>461 colleges</p>
            </div>
            <img className="img23" src={img11} />
          </div>
        </div>
      </div>
      <div className="home24">
        <h1>Top Universities</h1>
        <div className="home11">
          <Slider {...settings2}>
            <div className="home12">
              <img className="home12img" src={img23} alt="" />
              <div className="home13">
                <div className="home14">
                  <h4>Delhi University</h4>
                  <p>30,000 yearly</p>
                </div>
                <div className="home15">
                  <h5>9.5/10</h5>
                  <p>20.5k Reviews</p>
                </div>
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>View all courses and fees</p>
                <img src={img11} alt="" />
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>Download Broachers</p>
                <img src={img11} alt="" />
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>Compare</p>
                <img src={img11} alt="" />
              </div>
              <hr className="home16" />
            </div>
            <div className="home12">
              <img src={img24} alt="" />
              <div className="home13">
                <div className="home14">
                  <h4>IP University</h4>
                  <p>30,000 yearly</p>
                </div>
                <div className="home15">
                  <h5>9.5/10</h5>
                  <p>20.5k Reviews</p>
                </div>
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>View all courses and fees</p>
                <img src={img11} alt="" />
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>Download Broachers</p>
                <img src={img11} alt="" />
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>Compare</p>
                <img src={img11} alt="" />
              </div>
              <hr className="home16" />
            </div>
            <div className="home12">
              <img src={img25} alt="" />
              <div className="home13">
                <div className="home14">
                  <h4>IGNOU Univeristy</h4>
                  <p>30,000 yearly</p>
                </div>
                <div className="home15">
                  <h5>9.5/10</h5>
                  <p>20.5k Reviews</p>
                </div>
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>View all courses and fees</p>
                <img src={img11} alt="" />
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>Download Broachers</p>
                <img src={img11} alt="" />
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>Compare</p>
                <img src={img11} alt="" />
              </div>
              <hr className="home16" />
            </div>
            <div className="home12">
              <img src={img10} alt="" />
              <div className="home13">
                <div className="home14">
                  <h4>Jamai milia islamia</h4>
                  <p>30,000 yearly</p>
                </div>
                <div className="home15">
                  <h5>9.5/10</h5>
                  <p>20.5k Reviews</p>
                </div>
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>View all courses and fees</p>
                <img src={img11} alt="" />
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>Download Broachers</p>
                <img src={img11} alt="" />
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>Compare</p>
                <img src={img11} alt="" />
              </div>
              <hr className="home16" />
            </div>
            <div className="home12">
              <img src={img12} alt="" />
              <div className="home13">
                <div className="home14">
                  <h4>Jamai milia islamia</h4>
                  <p>30,000 yearly</p>
                </div>
                <div className="home15">
                  <h5>9.5/10</h5>
                  <p>20.5k Reviews</p>
                </div>
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>View all courses and fees</p>
                <img src={img11} alt="" />
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>Download Broachers</p>
                <img src={img11} alt="" />
              </div>
              <hr className="home16" />
              <div className="home17">
                <p>Compare</p>
                <img src={img11} alt="" />
              </div>
              <hr className="home16" />
            </div>
          </Slider>
        </div>
      </div>
      <div className="home25">
        <h1>Top Features College</h1>
        <div className="home26">
          <Slider {...settings3}>
            <div className="home29">
              <button className="home27">City Name</button>
            </div>
            <div className="home29">
              <button className="home28">MBA/PGDM</button>
            </div>
            <div className="home29">
              <button className="home28">B.sc</button>
            </div>
            <div className="home29">
              <button className="home28">B.Com</button>
            </div>
            <div className="home29">
              <button className="home28">BA</button>
            </div>
            <div className="home29">
              <button className="home28">BE/B.Tech</button>
            </div>
            <div className="home29">
              <button className="home28">BEA/BBM</button>
            </div>
            <div className="home29">
              <button className="home28">M.sc</button>
            </div>
            <div className="home29">
              <button className="home28">M.A</button>
            </div>
            <div className="home29">
              <button className="home28">B.F.A</button>
            </div>
            <div className="home29">
              <button className="home28">M.F.A</button>
            </div>
            <div className="home29">
              <button className="home28">B.Design</button>
            </div>
            <div className="home29">
              <button className="home28">M.Design</button>
            </div>
          </Slider>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
