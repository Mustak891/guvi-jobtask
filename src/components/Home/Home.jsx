import React from "react";
import "./Home.css";
import Fab from "@mui/material/Fab";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="homeTitle">
        <h1 className="homeheading">
        Download and view full-size Instagram profile <br /> pictures with InstaDP 
          
        </h1>
        <p className="homedesc">
        Sometimes when browsing the IG app, you may not know who is sending a message request – the Instagram profile picture
          <br /> (small circle in the upper left corner on your account) can’t be zoomed in by default. If you carefully track <br />
          everyone who sends requests to follow your account.
        </p>
      </div>
      {/* <div className="h-title">
        <div className="h-title-warpper">
          <div className="h-title-item">Analytical CRM systems</div>
          <div className="h-title-item">Operational CRM systems</div>
          <div className="h-title-item">Collaborative CRM systems</div>
          <div className="h-title-item">Strategic CRM systems</div>
          <div className="h-title-item">Drive upsells systems</div>
        </div>
      </div> */}
      <div className="homeButton">
        <Link to="/" className="link">
          <Fab
            variant="extended"
            size="small"
            aria-label="add"
            style={{ padding: "15px" }}
          >
            Get quote
          </Fab>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/" className="link">
          <Fab
            variant="extended"
            size="small"
            aria-label="add"
            style={{ padding: "15px" }}
          >
            services
          </Fab>
        </Link>
      </div>
      <div className="custom-shape-divider-bottom-1671678322">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Home;
