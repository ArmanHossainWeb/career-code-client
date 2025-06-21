import React, { useContext } from "react";
import LottiesLogin from "../assets/lotties/login.json";
import Lottie from "lottie-react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { getAdditionalUserInfo, GoogleAuthProvider } from "firebase/auth";
const Login = () => {
  const { loginUser,LoginWithGoogle } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate();
  const from = location.state || "/"
  console.log("location in login page",location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //   login user
    loginUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate(from)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
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
              animationData={LottiesLogin}
              loop={true}
              style={{ width: "250px" }}
            />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                  <h1 className="text-4xl font-bold mb-3">Login now!</h1>
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
                      Don't have account?
                      <NavLink className={"p-2 text-red-500 font-semibold"} to={"/register"}>
                        Register
                      </NavLink>
                    </h1>
                  </div>
                  <button type="submit" className="btn btn-neutral mt-4">
                    Login
                  </button>
                </fieldset>
              </form>
               <div class="divider">OR</div>
              <button
              onClick={handleGoogleLogIn}
                className="btn btn-white mt-4"
              >
                <FcGoogle  /> login with google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
