import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  console.log("values in the api calls", user);
  dispatch(loginStart());
  const res = {
    name: "jimin",
    address: "jdksldk",
    fullName: "pjf",
    country: "fj",
    number: "9485934895",
  };
  dispatch(loginSuccess(res.data));

  // dispatch(loginStart());
  // try {
  //   // const res = await publicRequest.post("/auth/login", user);
  //   const res = {
  //     name: "jimin",
  //     address: "jdksldk",
  //     fullName: "pjf",
  //     country: "fj",
  //     number: "9485934895",
  //   };
  //   dispatch(loginSuccess(res.data));
  // } catch (err) {
  //   dispatch(loginFailure());
  // }
};
