import ProcessResponse from "../models/ProcessResponse";

class UserController {
  async register(user) {
    if (
      user.name != "" &&
      user.email != "" &&
      user.password != "" &&
      user.passwordConfirmation != ""
    ) {
      console.log(user.password);
      console.log(user.passwordConfirmation);
      if (user.password == user.passwordConfirmation) {
        let data = await user.register();
        if (data != null) {
          return new ProcessResponse(true, "Registered successfully", data);
        } else {
          return new ProcessResponse(false, "Register failed!, try again!");
        }
      } else {
        return new ProcessResponse(false, "Password confirmation error!");
      }
    } else {
      return new ProcessResponse(false, "Enter required data!");
    }
  }

  async signIn(user) {
    if (user.email != "" && user.password != "") {
      let response = await user.signIn();
      if (response != null) {
        console.log(response);
        return new ProcessResponse(true, "Logged in successfully", response);
      } else {
        return new ProcessResponse(false, "Login failed!, try again");
      }
    } else {
      return new ProcessResponse(false, "Enter required data!");
    }
  }

  async signOut(user) {
    let response = user.signOut();
  }
}

export default UserController;
