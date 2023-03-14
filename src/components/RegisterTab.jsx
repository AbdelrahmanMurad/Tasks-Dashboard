import { useRef } from "react";
import { useDispatch } from "react-redux";
import UserController from "../controllers/user-controller";
import User from "../models/user";
import { authActions } from "../redux/slices/auth-slice";
import SocialMediaComponent from "./SocialMediaComonent";

//xahecem@mailinator.com
//Pa$$w0rd!
export default function RegisterTab() {
  let controller = new UserController();
  let nameRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();
  let passwordConfirmationRef = useRef();
  let dispatch = useDispatch();

  let onFormSubmitHandler = async (event) => {
    event.preventDefault();
    let response = await controller.register(user());
    if (response.status) {
      localStorage.setItem("token", response.data.idToken);
      localStorage.setItem("userId", response.data.localId);
      localStorage.setItem("loggedIn", true);
      dispatch(
        authActions.setToken({
          token: response.data.idToken,
          userId: response.data.localId,
        })
      );
    }
    alert(response.message);
  };

  let user = () => {
    return new User(
      nameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value,
      passwordConfirmationRef.current.value
    );
  };

  return (
    <div
      className="tab-pane fade"
      id="pills-register"
      role="tabpanel"
      aria-labelledby="tab-register"
    >
      <form onSubmit={onFormSubmitHandler}>
        <SocialMediaComponent message="Register To Task System With" />

        <h4 className="mb-4 mt-5 text-center">or:</h4>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="registerName"
            className="form-control"
            ref={nameRef}
            placeholder="Name"
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="email"
            id="registerEmail"
            ref={emailRef}
            className="form-control"
            placeholder="Email"
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerPassword"
            className="form-control"
            ref={passwordRef}
            placeholder="password"
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerRepeatPassword"
            className="form-control"
            ref={passwordConfirmationRef}
            placeholder="repeat password"
          />
        </div>

        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="registerCheck"
            defaultChecked
            aria-describedby="registerCheckHelpText"
          />
          <label className="form-check-label" htmlFor="registerCheck">
            I have read and agree to the terms
          </label>
        </div>

        <button type="submit" className="btn btn-main btn-block mb-3">
          Sign in
        </button>
      </form>
    </div>
  );
}
