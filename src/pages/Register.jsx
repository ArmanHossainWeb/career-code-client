import Lottie from "lottie-react";
import React from "react";
import LottiesRegister from ".././assets/lotties/register.json"
import { NavLink } from "react-router";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);


  }
  return (
    <div> 
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            
            <Lottie animationData={LottiesRegister} loop={true} style={{width:"250px"}} />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
                <h1 className="text-4xl font-bold">Register now!</h1>
                <label className="label">Email</label>
                <input name="email" type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <h1 className="">Already have account? <NavLink to={"/login"}>Login</NavLink></h1>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">Register</button>
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
