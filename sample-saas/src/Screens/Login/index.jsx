import React from "react";

const Login = ({ userType }) => {
  console.log("user", userType);
  const userClass =
    userType === "user-1"
      ? "bg-user-1"
      : userType === "user-2"
      ? "bg-user-2"
      : userType === "user-3"
      ? "bg-user-3"
      : "";

  return <div className={`min-h-screen ${userClass}`}>Hello</div>;
};

export default Login;
