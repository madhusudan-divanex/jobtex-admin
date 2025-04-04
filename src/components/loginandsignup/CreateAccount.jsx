import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import feather from "feather-icons";
import { base_url } from '../../baseUrl';
function CreateAccount() {
    const navigate=useNavigate()
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agree, setAgree] = useState(false);
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        const res=await fetch(`${base_url}/create-account`,{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                first_name,
                last_name,
                email,
                password
            })
        })
        const result=await res.json();
        if(result.success){
            navigate('/')
        }
        else{
            alert("an error occured")
        }
   
    };
    useEffect(() => {
      feather.replace(); 
    }, []);
  return (
    
      <>
  {/* <div className="loader-wrapper">
    <div className="theme-loader">
      <div className="loader-p" />
    </div>
  </div> */}
  {/* Loader ends*/}
  {/* page-wrapper Start*/}
  <section>
    <div className="container-fluid p-0">
      <div className="row m-0">
        <div className="col-12 p-0">
          <div className="login-card">
            <form className="theme-form login-form" onSubmit={handleSubmit}>
              <h4>Create your account</h4>
              <h6>Enter your personal details to create account</h6>
              <div className="form-group">
                <label>Your Name</label>
                <div className="small-group">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="icon-user" />
                    </span>
                    <input
                      className="form-control"
                      type="text"
                      value={first_name}
                      onChange={(e)=>setFirst_name(e.target.value)}
                      required=""
                      placeholder="Fist Name"
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="icon-user" />
                    </span>
                    <input
                      className="form-control"
                      type="email"
                      required=""
                      value={last_name}
                      onChange={(e)=>setLast_name(e.target.value)}
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="icon-email" />
                  </span>
                  <input
                    className="form-control"
                    type="email"
                    required=""
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Test@gmail.com"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Password</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="icon-lock" />
                  </span>
                  <input
                    className="form-control"
                    type="password"
                    name="login[password]"
                    required=""
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="*********"
                  />
                  <div className="show-hide">
                    <span className="show"> </span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="checkbox">
                  <input id="checkbox1" type="checkbox" />
                  <label className="text-muted" htmlFor="checkbox1">
                    Agree with <span>Privacy Policy </span>
                  </label>
                </div>
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-block" type="submit">
                  Create Account
                </button>
              </div>
              <div className="login-social-title">
                <h5>signup with</h5>
              </div>
              <div className="form-group">
                <ul className="login-social">
                  <li>
                    <a href="https://www.linkedin.com/login" target="_blank">
                      <i data-feather="linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/login" target="_blank">
                      <i data-feather="twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/login" target="_blank">
                      <i data-feather="facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/login" target="_blank">
                      <i data-feather="instagram"> </i>
                    </a>
                  </li>
                </ul>
              </div>
              <p>
                Already have an account?
                <a className="ms-2" href="" onClick={(e)=>{ e.preventDefault()
                     navigate('/')}}>
                  Sign in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    // </div>
  )
}

export default CreateAccount
