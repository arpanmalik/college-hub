
import React from "react";
import {useNavigate} from "react-router-dom";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";
import img from "../Images/c86.png";
import img2 from "../Images/c46.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img8 from "../Images/c45.png";


const CounsellorConnect = ()=>{
    const navigate = useNavigate();
    const settings2 = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
      };
    return (
        <>
            <div className="connect1">
                <Navbar2 />
                <div className="connect7">
                    <div className="connect8">
                        <h2>Connect With India’s Top Counsellor</h2>
                        <p>Our Counsellor are available throughout for
                            Chat & support at each step of your application
                            Process</p>
                        <button>Connect</button>
                    </div>
                    <div className="connect9">
                        <div className="connect10">
                            <img src={img} alt="" />
                            <p>+2 minutes to speak to
                                your counsellor</p>
                            <div className="connect11">
                                <i class="fa-solid fa-phone"></i>
                                <i class="fa-brands fa-whatsapp"></i>
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                        </div>
                        <div className="connect12">
                            <button onClick={() => navigate("/screen2")}>
                                Explore College & University
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="connect13">
                <div className="connect14">
                    <div className="connect15">
                        <p>Engineer</p>
                    </div>
                    <div className="connect15">
                        <p>Management </p>
                    </div>
                    <div className="connect15">
                        <p>Science</p>
                    </div>
                    <div className="connect15">
                        <p>Finance</p>
                    </div>
                    <div className="connect15">
                        <p>Engineer</p>
                    </div>
                    <div className="connect15">
                        <p>College 1</p>
                    </div>
                    <div className="connect15">
                        <p>College 2</p>
                    </div>
                    <div className="connect15">
                        <p>College 3</p>
                    </div>
                    <div className="connect15">
                        <p>College 4</p>
                    </div>
                    <div className="connect15">
                        <p>College 5</p>
                    </div>
                    <div className="connect15">
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className="connect15">
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className="connect15">
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className="connect15">
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className="connect15">
                        <p>Lorem Ipsum</p>
                    </div>   
                </div>
            </div>
            {/*<div className="connect16">
                < Slider {...settings2}>
                    <div classNam3="connect17">
                        <img src={img2} />
                    </div>
                </Slider>
    </div>*/}
            <div className="connect30">
                <p>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit 
                    interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per 
                    conubia nostra, per inceptos himenaeos.</p>
            </div>
            <div className="app38">
        <div className="app29">
            <div className="app30">
                <p>Register for the scholarship Test Now</p>
                <button>Register Now</button>
            </div>
            <div className="app31">
                <img src={img8} alt="" />
            </div>
        </div>
        <div className="app29">
            <div className="app30">
                <p>Register for the scholarship Test Now</p>
                <button>Register Now</button>
            </div>
            <div className="app31">
                <img src={img8} alt="" />
            </div>
        </div>
        <div className="app29">
            <div className="app30">
                <p>Register for the scholarship Test Now</p>
                <button>Register Now</button>
            </div>
            <div className="app31">
                <img src={img8} alt="" />
            </div>
        </div>
      </div>
      <Footer />
        </>
    )   
}

export default CounsellorConnect;