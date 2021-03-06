export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const VALIDATE_SIGN_IN = "VALIDATE_SIGN_IN";
export const AUTH_SUCCESSFUL = "AUTH_SUCCESSFUL";
export const AUTH_FIALED = "AUTH_FAILED";

export const signIn = (userData) => {
  return {
    type: SIGN_IN,
    payload: userData
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
