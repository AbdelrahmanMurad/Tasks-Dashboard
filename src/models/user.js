import axios from "axios";

class User {
  constructor(name, email, password, passwordConfirmation, id) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.passwordConfirmation = passwordConfirmation;
  }

  async signIn() {
    //
    try {
      let response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDhYDRQ0rdowoybK9BGVVdfEZBtj6xuuIU`,
        {
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        }
      );
      return response.data;
    } catch (error) {
      console.log(error.response);
      return null;
    }
  }

  async signOut() {
    //
  }

  async register() {
    //
    try {
      let response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDhYDRQ0rdowoybK9BGVVdfEZBtj6xuuIU`,
        {
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default User;
