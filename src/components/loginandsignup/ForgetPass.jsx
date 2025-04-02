import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ForgetPass() {
    const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [rememberMe, setRememberMe] = useState(false);
      const navigate=useNavigate()
      const base_url='http://localhost:7000'
      const handleSubmit = async(e) => {
        e.preventDefault();
        const res=await fetch(`${base_url}/forgot-password`,{
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
            navigate('/dashboard')
        }
        else{
            alert("an error occured")
        }
    
    };
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
            <div className="login-main">
              <form className="theme-form login-form" onSubmit={handleSubmit}>
                <h4 className="mb-3">Reset Your Password</h4>
                <div className="form-group">
                  <label>Enter Your Mobile Number</label>
                  <div className="row">
                    <div className="col-4 col-sm-3">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="+ 91"
                      />
                    </div>
                    <div className="col-8 col-sm-9">
                      <input
                        className="form-control"
                        type="tel"
                        defaultValue="000-000-0000"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary btn-block" type="submit">
                    Send
                  </button>
                </div>
                <div className="form-group">
                  <span className="reset-password-link">
                    If don't receive OTP?&nbsp;&nbsp;
                    <a
                      className="btn-link text-danger"
                      href="javascript:void(0)"
                    >
                      Resend
                    </a>
                  </span>
                </div>
                <div className="form-group">
                  <label>Enter OTP</label>
                  <div className="row">
                    <div className="col">
                      <input
                        className="form-control text-center opt-text"
                        type="text"
                        defaultValue={0}
                        maxLength={2}
                      />
                    </div>
                    <div className="col">
                      <input
                        className="form-control text-center opt-text"
                        type="text"
                        defaultValue={0}
                        maxLength={2}
                      />
                    </div>
                    <div className="col">
                      <input
                        className="form-control text-center opt-text"
                        type="text"
                        defaultValue={0}
                        maxLength={2}
                      />
                    </div>
                  </div>
                </div>
                <h6>Create Your Password</h6>
                <div className="form-group">
                  <label>New Password</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="icon-lock" />
                    </span>
                    <input
                      className="form-control"
                      type="password"
                      name="login[password]"
                      required=""
                      placeholder="*********"
                    />
                    <div className="show-hide">
                      <span className="show" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Retype Password</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="icon-lock" />
                    </span>
                    <input
                      className="form-control"
                      type="password"
                      name="login[password]"
                      required=""
                      placeholder="*********"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="checkbox">
                    <input id="checkbox1" type="checkbox" />
                    <label className="text-muted" htmlFor="checkbox1">
                      Remember password
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary btn-block" type="submit">
                    Done{" "}
                  </button>
                </div>
                <p>
                  Already have an password?
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
    </div>
  </section>
</>

  )
}

export default ForgetPass
