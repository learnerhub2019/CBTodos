import * as Auth_Actions from "../../../modules/auth/authActions";

describe("Test Auth Actions", () => {
  it("Test Constants", () => {
    expect(Auth_Actions.SIGN_IN).toEqual("SIGN_IN");
    expect(Auth_Actions.SIGN_OUT).toEqual("SIGN_OUT");
    expect(Auth_Actions.VALIDATE_SIGN_IN).toEqual("VALIDATE_SIGN_IN");
    expect(Auth_Actions.AUTH_SUCCESSFUL).toEqual("AUTH_SUCCESSFUL");
    expect(Auth_Actions.AUTH_FIALED).toEqual("AUTH_FAILED");
  });
});

describe("Test Auth Fuction", () => {
  it("Test Constants", () => {});
});
