import { SIGN_IN, SIGN_OUT } from "./authActions";

const initialState = {
  currentUser: false,
  token: undefined
};

const validateSignIn = (objUser) => {
  // const user = objUser.use;
  // const token = objUser.token;

  return { ...objUser };
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
