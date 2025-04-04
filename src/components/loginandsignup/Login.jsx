import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import feather from "feather-icons";
import { base_url } from '../../baseUrl';
import { toast } from "react-toastify";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate=useNavigate()
  
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    const res=await fetch(`${base_url}/admin-login`,{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
           
            email,
            password
        })
    })
    const result=await res.json();
    if(result.success){
      await localStorage.setItem('token',JSON.stringify(result.token))
      navigate('/dashboard')
      // if(localStorage.getItem('token')){
      //   console.log("redirecting to dashboard")
        // navigate('/dashboard',{ state: { token :result.token} })
      //}
    }
    else{
      toast.error("Invalid email or password")
       
    }

};
useEffect(() => {
  feather.replace(); // Initialize Feather icons
}, []);

  return (
    <section className="login-container">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <form className="theme-form login-form" onSubmit={handleSubmit}>
                <h4>Login</h4>
                <h6>Welcome back! Log in to your account.</h6>

                <div className="form-group">
                  <label>Email Address</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="icon-email"></i>
                    </span>
                    <input
                      className="form-control"
                      type="email"
                      required
                      placeholder="Test@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="icon-lock"></i>
                    </span>
                    <input
                      className="form-control"
                      type="password"
                      required
                      placeholder="*********"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="checkbox">
                    <input
                      id="checkbox1"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label htmlFor="checkbox1">Remember password</label>
                  </div>

                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-block" type="submit" >
                    Sign in
                  </button>
                </div>

                
               
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
