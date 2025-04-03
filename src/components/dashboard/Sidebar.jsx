import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Sidebar() {
    const navigate=useNavigate()
    return (
        <header className="main-nav">

            <nav className='h-100'>
                <div className="main-navbar h-full">
                    {/* <div className="left-arrow" id="left-arrow">
                        <i data-feather="arrow-left" />
                    </div> */}
                    <div id="mainnav">
                        <ul className="nav-menu custom-scrollbar h-100">
                            <li className="back-btn">
                                <div className="mobile-back text-end">
                                    <span>Back</span>
                                    <i className="fa fa-angle-right ps-2" aria-hidden="true" />
                                </div>
                            </li>
                            <li className="sidebar-main-title">
                                <div>
                                    <h6 >Subscription </h6>
                                </div>
                            </li>
                            <li>
                                <Link className="nav-link menu-title link-nav" to="/dashboard">
                                    {/* <i data-feather="headphones" /> */}
                                    <span>Plan</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link menu-title link-nav" to="/dashboard/plan/Free">
                                    {/* <i data-feather="headphones" /> */}
                                    <span>Free</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link menu-title link-nav" to="/dashboard/plan/Standard" >
                                    {/* <i data-feather="headphones" /> */}
                                    <span>Standard</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link menu-title link-nav" to="/dashboard//plan/Ultra">
                                    {/* <i data-feather="headphones" /> */}
                                    <span>Ultra</span>
                                </Link>
                            </li>
                            <li className="sidebar-main-title">
                                <div>
                                    <h6>Employer </h6>
                                </div>
                            </li>
                            
                            <li className="dropdown">
                                <Link className="nav-link menu-title" to="/dashboard/all-employees">
                                    <span>All Employees</span>
                                </Link>
                            </li>
                            <li className="dropdown">
                                <Link className="nav-link menu-title" to="/dashboard/selected-employees">
                                    <span>Selected Employees</span>
                                </Link>
                            </li>
                            <li className="dropdown">
                                <Link className="nav-link menu-title" to="/dashboard/hired-employees">
                                    <span>Hired Employees</span>
                                </Link>
                            </li>
                            <li className="dropdown">
                                <Link className="nav-link menu-title" to="/dashboard/saved-employees">
                                    <span>Saved Employees</span>
                                </Link>
                            </li>

                            <li className="sidebar-main-title">
                                <div>
                                    <h6>Job </h6>
                                </div>
                            </li>
                            <li className="dropdown">
                                <Link className="nav-link menu-title" to="/dashboard/create-new-job">
                                    {/* <i data-feather="profile" /> */}
                                    <span>Create New Job</span>
                                </Link>

                            </li>
                            <li className="dropdown">
                                <Link className="nav-link menu-title" to="/dashboard/all-jobs">
                                    {/* <i data-feather="folder-plus" /> */}
                                    <span>All Jobs</span>
                                </Link>
                            </li>

                            <li className="sidebar-main-title">
                                <div>
                                    <h6>Report </h6>
                                </div>
                            </li>
                            <li>
                                <Link className="nav-link menu-title link-nav" to="/dashboard/support-ticket">
                                    {/* <i data-feather="headphones" /> */}
                                    <span>Support Ticket</span>
                                </Link>
                            </li>
                            
                            
                        </ul>
                    </div>
                    {/* <div className="right-arrow" id="right-arrow">
                        <i data-feather="arrow-right" />
                    </div> */}
                </div>
            </nav>
        </header>
    )
}

export default Sidebar
