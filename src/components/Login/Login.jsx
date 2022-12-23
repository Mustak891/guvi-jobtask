import React from "react";
import "./login.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { TextField } from "@mui/material";
import Fab from "@mui/material/Fab";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import InputAdornment from '@mui/material/InputAdornment';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { API_URL } from "../api/api";

const Login = () => {

  const nagvigate = useNavigate();

  const formvalidationSchema = yup.object({
    email: yup
      .string()
      .required("email is required ⚠️")
      .min(3, "email must be at least 3️⃣ characters long")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Invalid email address"
      ),
    password: yup
      .string()
      .required("password is required ⚠️")
      .min(3, "password must be at least 3️⃣ characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
      ),
  });

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: formvalidationSchema,
      onSubmit: (values) => {
        PostLogin(values);
      },
    });

  const PostLogin = async (e) => {
    try {
      const res = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
        credentials: "include",
      });
      if (res.status === 400 || !res) {
        window.alert("check your email or password");
      } else {
        window.alert("Login successful");
        window.location.reload();
        nagvigate("/");
        localStorage.setItem("email", values.email)
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <Card className="reg-card">
        <CardMedia
          component="img"
          image="https://thumbs.dreamstime.com/b/online-registration-sign-up-concept-young-people-signing-login-to-account-user-interface-secure-password-modern-vector-194944767.jpg"
          alt="green iguana"
          className="login-logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            REGISTER
          </Typography>
          <Typography variant="body2">
            Are you new to here. get INSTANT free access to yourpreneur account
            and start saving money. join us today.
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/register" className="link">
            <Button
              size="small"
              style={{ color: "white" }}
              startIcon={<AppRegistrationIcon />}
            >
              Register Now
            </Button>
          </Link>
        </CardActions>
      </Card>

      <div className="login-card">
        <Typography
          className="login-text"
          sx={{ fontSize: 40, fontWeight: 600 }}
          gutterBottom
        >
          LOGIN
        </Typography>
        <form onSubmit={handleSubmit}>
          <Typography component="div" className="logintextfield">
            <TextField
              label="Email"
              variant="standard"
              size="large"
              type="email"
              style={{ width: "80%" }}
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email}
              helperText={errors.email && touched.email ? errors.email : ""}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ContactMailOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Typography>
          <Typography component="div" className="logintextfield">
            <TextField
              label="Password"
              type="password"
              variant="standard"
              size="large"
              style={{ width: "80%" }}
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password && touched.password}
              helperText={errors.password && touched.password ? errors.password : ""}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Typography>
          <Typography style={{ fontSize: "12px", padding: "10px" }}>
            *your personal information will be kept confidential and will not be
            shared with any third parties.
          </Typography>
          <Typography style={{ padding: "10px", marginBottom: "10px" }}>
            <Fab
              variant="extended"
              color="primary"
              aria-label="add"
              type="submit"
            >
              <LoginIcon sx={{ mr: 1 }} />
              LOGIN
            </Fab>
          </Typography>
        </form>
      </div>
    </div>
  );
};

export default Login;
