import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { API_URL } from "../api/api";

const Logout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const res = await fetch(`${API_URL}/api/logout`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (res.status === 401 || !res) {
        window.alert("problem with logout");
      } else {
        window.alert("logout successful");
        window.location.reload();
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    logout();
  }, []);

  return <div style={{height: "100vh"}}>Logout</div>;
};

export default Logout;
