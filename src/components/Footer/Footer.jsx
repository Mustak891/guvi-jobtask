import React from "react";
import "./Footer.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CopyrightIcon from "@mui/icons-material/Copyright";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <span>
            <img
              src="https://www.pngitem.com/pimgs/m/523-5233379_employee-management-system-logo-hd-png-download.png"
              alt="logo"
              style={{ height: "40px", width: "40px", display: "flex" }}
            />
            <b>SwipeWire</b>
          </span>
        </div>
        <div className="footer-content-right">
          <b>FEATURES</b>
          <br />
          Home
          <br />
          About
          <br />
          Pricing
          <br />
          Contact
          <br />
          FAQs
          <br />
        </div>
        <div className="footer-content-middle">
          <b>RESOURCES</b>
          <br />
          Enterprise 
          <br />
          Small Business 
          <br />
          Customer Experience Suite
          <br />
          Services CRM
          <br />
          Financial Services 
          <br />
        </div>
        <div className="footer-content-last">
          <b>subscribe to our newsletter</b>
          <br />
          monthly digest of the best swipewire tools and resources
          <br />
          <div
            style={{ marginTop: "10px", marginBottom: "10px", display: "flex" }}
          >
            <TextField
              id="outlined-basic"
              label="Email address"
              variant="outlined"
              size="small"
            />
            <Button variant="contained">Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="finalfooter">
        <div className="finalfooter-content">
          <CopyrightIcon />
          2022 Company, Inc All rights reserved.
        </div>
        <div className="finalfooter-content-img">
          <FacebookIcon className="smi" />
          <TwitterIcon className="smi" />
          <InstagramIcon className="smi" />
          <LinkedInIcon className="smi" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
