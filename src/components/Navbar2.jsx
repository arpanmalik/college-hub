import React from "react";
import {useNavigate} from "react-router-dom";

import img2 from "../Images/c1.png";
import img3 from "../Images/c85.png";

const Navbar2 = ()=>{
    return (
        <>
            <div className="connect2">
                <div className="connect3">
                    <img src={img2} alt="" />
                </div>
                <div className="connect4">
                    <div className="connect5">
                        <p>Courses</p>
                        <img src={img3} alt="" />
                    </div>
                    <div className="connect5">
                        <p>Colleges</p>
                        <img src={img3} alt="" />
                    </div>
                    <div className="connect5 cnt">
                        <p>Study Guide</p>
                        <img src={img3} alt="" />
                    </div>
                    <div className="connect5">
                        <p>Test</p>
                    </div>
                    <div className="connect5 cnt">
                        <p>Get Counselling</p>
                    </div>
                </div>
                <div className="connect6">
                    <i class="fa-solid fa-user"></i>
                    <p>Login</p>
                </div>
            </div>
        </>
    )
}

export default Navbar2;