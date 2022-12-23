import React from "react";
import "./update.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import UpdateIcon from '@mui/icons-material/Update';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { API_URL } from "../../api/api";
import CakeIcon from '@mui/icons-material/Cake';

const Update = () => {

  const location = useLocation();
  const employees = location.state.employees;
  
  const nagvigate = useNavigate();

  const formvalidationSchema = yup.object({
    username: yup
      .string()
      .required("User Name is required")
      .max(20, "User Name is too long"),
     email: yup
      .string()
      .required("email is required ⚠️")
      .min(3, "email must be at least 3️⃣ characters long")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Invalid email address"
      ),
     age: yup
      .string()
      .required("age is required")
      .min(1, "age must be at least 1 characters long"),
     mobile: yup
      .string()
      .required("Phone Number is required")
      .min(3, "Phone Number must be at least 3 characters long"),
     gender: yup
      .string()
      .required("gender is required")
      .min(3, "gender must be at least 3️ characters long"),
      dob: yup
      .date()
      .required("Work is required")
      .min(3, "Work must be at least 3️ characters long"),
  });

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        username: employees.username,
        email: employees.email,
        age: employees.age,
        mobile: employees.mobile,
        gender: employees.gender,
        dob: employees.dob,
      },
      validationSchema: formvalidationSchema,
      onSubmit: (values) => {
        update(values);
      },
    });

    //update employee
    const update = async () => {
      const response = await fetch(`${API_URL}/api/update/${employees._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if(response.status === 400 || !response){
        window.alert("Error updating customer");
      }else{
        window.alert("Customer updated successfully");
        nagvigate("/dashboard");
      }
    }


  return (
    <div className="updateTable">
      <div className="updateTableHeader">UPDATE USER</div>
      <div className="updateTableBody">
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="standard"
            size="large"
            type="text"
            style={{ width: "500px", display: "flex", justifyContent: "center", marginBottom: "20px" }}
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.username && touched.username}
            helperText={errors.username && touched.username ? errors.username : ""}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ContactMailOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Email"
            variant="standard"
            size="large"
            type="email"
            style={{ width: "500px", display: "flex", justifyContent: "center", marginBottom: "20px" }}
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email && touched.email}
            helperText={
              errors.email && touched.email ? errors.email : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Age"
            variant="standard"
            size="large"
            type="text"
            style={{ width: "500px", display: "flex", justifyContent: "center", marginBottom: "20px" }}
            name="age"
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.age && touched.age}
            helperText={
              errors.age && touched.age ? errors.age : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PermIdentityIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Mobile Number"
            variant="standard"
            size="large"
            type="text"
            style={{ width: "500px", display: "flex", justifyContent: "center", marginBottom: "20px" }}
            name="mobile"
            value={values.mobile}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.mobile && touched.mobile}
            helperText={
              errors.mobile && touched.mobile ? errors.mobile : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocalPhoneOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

           <TextField
            label="Date of birth"
            variant="standard"
            size="large"
            type="date"
            style={{ width: "500px", display: "flex", justifyContent: "center", marginBottom: "20px" }}
            name="dob"
            value={values.dob}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.dob && touched.dob}
            helperText={
              errors.dob && touched.dob ? errors.dob : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CakeIcon />
                </InputAdornment>
              ),
            }}
          />

          <FormControl style={{ width: "500px", display: "flex", justifyContent: "center", marginBottom: "20px" }} required>
            <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              variant="standard"
              value={values.gender}
              label="Department"
              name="gender"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
              <MenuItem value={"Others"}>Others</MenuItem>
            </Select>
            <FormHelperText>{errors.gender && touched.gender ? errors.gender : ""}</FormHelperText>
          </FormControl>

          <Typography style={{ marginBottom: "10px", marginTop: "10px", display: "flex", justifyContent: "space-between" }}>
          <Button variant="contained" onClick={() => nagvigate('/dashboard')} startIcon={<ArrowBackIosIcon />}>
              back
            </Button>
            <Button variant="contained" type="submit" startIcon={<UpdateIcon />}>
              update
            </Button>
          </Typography>
        </form>
      </div>
    </div>
  );
};

export default Update;
