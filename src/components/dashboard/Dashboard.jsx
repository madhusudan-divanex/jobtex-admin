import React, { useEffect } from 'react'
import feather from "feather-icons";
import AllEmployee from '../employer/AllEmployee';
import AllJob from '../jobs/AllJob';
import NewJob from '../jobs/NewJob';
import Ticket from '../report/Ticket';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import JobDetail from '../jobs/JobDetail';
import ReportDetail from '../report/ReportDetail';
import Plan from '../Plan/Plan';
import PlanDetail from '../Plan/PlanDetail';
function Dashboard() {
    const token = JSON.parse(localStorage.getItem('token'))
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
            <div className="page-wrapper compact-wrapper" id="pageWrapper">
                {/* Page Header Start*/}
                <Header />
                {/* Page Header Ends                              */}
                {/* Page Body Start*/}
                <div className="page-body-wrapper sidebar-icon">
                    {/* Page Sidebar Start*/}
                    <Sidebar />
                    {/* Page Sidebar Ends*/}
                    <div className="page-body dashboard-2-main">
                        <div className="container-fluid chart-widget">
                            {/* Chart widget top Start*/}
                            
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-bordernone">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Date</th>
                                                        <th>Plan</th>
                                                        <th>Action</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="media">
                                                                
                                                                <div className="media-body">
                                                                    <span>Mukesh</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p>16 August 2024</p>
                                                        </td>
                                                        <td>
                                                            <p>Free</p>
                                                        </td>

                                                        <td>
                                                            <Link to=''>View</Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="media">
                                                                
                                                                <div className="media-body">
                                                                    <span>Mahendar</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p>18 August 2024</p>
                                                        </td>
                                                        <td>
                                                            <p>Free</p>
                                                        </td>

                                                        <td>
                                                            <Link to=''>View</Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="media">
                                                                
                                                                <div className="media-body">
                                                                    <span>Rajesh</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p>18 August 2024</p>
                                                        </td>
                                                        <td>
                                                            <p>Ultra</p>
                                                        </td>

                                                        <td>
                                                            <Link to=''>View</Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="media">
                                                                
                                                                <div className="media-body">
                                                                    <span>Pawan</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p>16 August 2024</p>
                                                        </td>
                                                        <td>
                                                            <p>Standard</p>
                                                        </td>

                                                        <td>
                                                            <Link to=''>View</Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="media">
                                                                
                                                                <div className="media-body">
                                                                    <span>Ghanshyam</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p>16 August 2024</p>
                                                        </td>
                                                        <td>
                                                            <p>Free</p>
                                                        </td>

                                                        <td>
                                                            <Link to=''>View</Link>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 box-col-6 des-xl-50">
                                <div class="card trasaction-sec">
                                    <div class="card-header">
                                        <div class="header-top d-sm-flex align-items-center">
                                            <h5>Transaction</h5>
                                            <div class="center-content">
                                                <p>5878 Suceessfull Transaction</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="transaction-totalbal">
                                        <h2> $2,09,352k </h2>
                                        <p>Total Balance</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <Routes>
                            {/* <Route path="/" element={<Plan />} /> */}
                            <Route path="plan" element={<Plan />} />
                            <Route path='plan/:plan_type' element={<PlanDetail />} />
                            <Route path="create-new-job" element={<NewJob />} />
                            <Route path="all-jobs" element={<AllJob />} />
                            <Route path="all-employees" element={<AllEmployee />} />
                            <Route path="support-ticket" element={<Ticket />} />
                            <Route path='job-detail/:jobId' element={<JobDetail />} />
                            <Route path='report-detail/:reportId' element={<ReportDetail />} />
                        </Routes>

                    </div>

                </div>
            </div>
        </>

    )
}

export default Dashboard
