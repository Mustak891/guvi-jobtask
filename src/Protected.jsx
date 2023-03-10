import React from 'react'
import { Navigate } from "react-router-dom";


const Protected = ({ auth, children }) => {
    if (!auth) {
      return <Navigate to="/" replace={true} />;
    }
  
    return children;
  };

export default Protected;