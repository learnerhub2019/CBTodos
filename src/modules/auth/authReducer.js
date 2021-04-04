import React from "react";
import { SIGN_IN, SIGN_OUT } from "./authActions";

const initialState = {
  currentUser: true,
  token: undefined
};

const validateSignIn = (objUser) => {
  const user = undefined;
  const token = undefined;
  return { user, token };
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN:
      const { user, token } = validateSignIn(payload);
      return { ...state, currentUser: user, token: token };
    case SIGN_OUT:
      return { ...state, currentUser: undefined };
    default:
      return state;
  }
};

export default authReducer;
