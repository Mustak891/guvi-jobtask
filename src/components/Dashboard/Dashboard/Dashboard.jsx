import React from "react";
import { useState, useEffect } from "react";
import { API_URL } from "../../api/api";
import "./Dashboard.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Dashboard = () => {
  //get employees
  const [employees, setEmployees] = useState({});

  const email = localStorage.getItem("email")

  //get employees
  const getEmployees = async () => {
    const response = await fetch(`${API_URL}/api/user/${email}`);
    const data = await response.json();
    setEmployees(data[0]);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  console.log(employees.username)


  return (
    <div className="dashboard">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "80px",
          margin: "10px",
        }}
      >
        <span>
          <b>WELCOME BACK</b>
        </span>
        <Link to="/dashboard/update" state={{employees}} className="link">
          <Button variant="outlined" startIcon={<AddCircleOutlineIcon />}>
            Update detail
          </Button>
        </Link>
      </div>
      <div className="dashcard">
        <Card sx={{ minWidth: 400 }}>
          <CardContent>
          <Typography variant="h5" component="div">
              Username: {employees.username}
            </Typography>
            &nbsp;
            <Typography variant="h5" component="div">
              Email: {employees.email}
            </Typography>
            &nbsp;
            <Typography variant="h5" component="div">
              Age: {employees.age}
            </Typography>
            &nbsp;
            <Typography variant="h5" component="div">
            Gender: {employees.gender}
            </Typography>
            &nbsp;
            <Typography variant="h5" component="div">
            Date of birth: {employees.dob}
            </Typography>
            &nbsp;
            <Typography variant="h5" component="div">
            Mobile: {employees.mobile}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
