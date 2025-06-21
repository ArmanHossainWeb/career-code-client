import Lottie from "lottie-react";
import React, { useContext } from "react";
import LottiesRegister from ".././assets/lotties/register.json";
import { NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { getAdditionalUserInfo, GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  const { createUser,LoginWithGoogle } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // creaate user method
    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  };
  // google login 
const handleGoogleLogIn = () => {
  LoginWithGoogle()
    .then((result) => {
      // Google Access Token
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // Signed-in user info
      const user = result.user;

      console.log("User Info:", user);
      console.log("Access Token:", token);

      // Additional user info (optional)
      const additionalInfo = getAdditionalUserInfo(result);
      console.log("Additional Info:", additionalInfo);

      // You can now redirect or update UI based on the logged-in user
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData?.email;
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.error("Error Code:", errorCode);
      console.error("Error Message:", errorMessage);
      console.error("Email:", email);
      console.error("Credential:", credential);

      // You can show a toast or alert to the user
    });
};

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie
              animationData={LottiesRegister}
              loop={true}
              style={{ width: "250px" }}
            />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
                  <h1 className="text-4xl font-bold">Register now!</h1>
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div>
                    <h1 className="">
                      Already have account?{" "}
                      <NavLink className={"text-red-500 font-semibold"} to={"/login"}>Login</NavLink>
                    </h1>
                  </div>
                  <button type="submit" className="btn btn-neutral mt-4">
                    Register
                  </button>
                   <div class="divider">OR</div>
                  <button onClick={handleGoogleLogIn} type="submit" className="btn btn-white mt-4">
                    <FcGoogle /> login with google
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
