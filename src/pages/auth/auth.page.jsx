import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { signIn } from "../../modules/auth/authActions";
const AuthPage = () => {
  const dispatch = useDispatch();
  const userDetails = {
    name: "parag",
    email: "parag@test.lcl"
  };
  const verifySignIn = () => {
    dispatch(signIn({ user: userDetails, token: "xyz" }));
  };
  return (
    <>
      <h1> Sign In page </h1>
      <Button onClick={verifySignIn}> Sign In</Button>
    </>
  );
};

export default AuthPage;
