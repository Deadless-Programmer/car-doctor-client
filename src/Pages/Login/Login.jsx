import React, { useContext } from "react";
import img from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../Shared/Social/SocialLogin";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        // const loggedUser ={
        //   email: user.email
        // }
        console.log(user);
        // fetch('https://car-doctor-server-eta-ten.vercel.app/jwt', {
        //   method: "POST",
        //   headers:{
        //     'content-type':"application/json"
        //   },
        //   body:JSON.stringify(loggedUser)
        // })
        // .then(res => res.json())
        // .then(data=>{
        //     console.log("jwt response",data);
        //     localStorage.setItem('car-access-token', data.token);
        //     navigate(from, {replace: true})
        // })
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" mr-12 w-1/2">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-3xl p-5 text-center font-bold">Login!</h1>
            <form onSubmit={handleLogin}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn capitalize bg-amber-600 hover:bg-green-600 border-0"
                    type="submit"
                    value="Login"
                  />
                </div>
              </div>
            </form>
            <SocialLogin></SocialLogin>
            <p className="ml-6 p-3 ">
              New to Car Doctors?{" "}
              <Link to="/signUp" className="link  text-amber-800">
                Sign Up
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
