import React from "react";
import {useNavigate} from "react-router-dom";
import img from "../Images/c1.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav1">
        <div className="nav2">
          <img src={img} alt="" onClick={()=>navigate("/")} />
          <div className="nav3">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search for colleges, exams, ...." />
          </div>
          <div className="nav4">
            <i class="fa-regular fa-circle-question "></i>
            <p>Need Counnselling</p>
          </div>
        </div>
      </div>
      <hr className="nav5" />
    </>
  );
};

export default Navbar;
