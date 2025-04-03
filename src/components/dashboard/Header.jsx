import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate=useNavigate()
  return (
    <div className="page-main-header">
                    <div className="main-header-right row m-0">
                        <div className="main-header-left">
                            <div className="logo-wrapper">
                                <a href="index.html">
                                    <img
                                        className="img-fluid"
                                        src="../assets/images/logo/logo.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="dark-logo-wrapper">
                                <a href="index.html">
                                    <img
                                        className="img-fluid"
                                        src="../assets/images/logo/dark-logo.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="toggle-sidebar">
                                <i
                                    className="status_toggle middle"
                                    data-feather="align-center"
                                    id="sidebar-toggle"
                                />
                            </div>
                        </div>
                        
                        <div className="nav-right col pull-right right-menu p-0">
                            <ul className="nav-menus">
                                
                                
                                <li className="onhover-dropdown p-0">
                                    <button className="btn btn-primary-light" type="button">
                                        <a href=""  className='link-success link-underline-success link-underline-opacity-25' onClick={()=>{
                                            localStorage.clear()
                                            navigate('/')
                                        }}>
                                            <i data-feather="log-out" />
                                            Log out
                                        </a>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="d-lg-none mobile-toggle pull-right w-auto">
                            <i data-feather="more-horizontal" />
                        </div>
                    </div>
                </div>
  )
}

export default Header
