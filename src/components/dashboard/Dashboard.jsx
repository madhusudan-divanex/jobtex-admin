import React, { useEffect } from 'react'
import feather from "feather-icons";
import AllEmployee from '../employer/AllEmployee';
import AllJob from '../jobs/AllJob';
import NewJob from '../jobs/NewJob';
import Ticket from '../report/Ticket';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import JobDetail from '../jobs/JobDetail';
import ReportDetail from '../report/ReportDetail';
function Dashboard() {
    const token=JSON.parse(localStorage.getItem('token'))
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
                <Header/>
                {/* Page Header Ends                              */}
                {/* Page Body Start*/}
                <div className="page-body-wrapper sidebar-icon">
                    {/* Page Sidebar Start*/}
                    <Sidebar/>
                    {/* Page Sidebar Ends*/}
                    <div className="page-body dashboard-2-main">
                        <Routes>
                            <Route path="/" element={<AllEmployee />} />
                            <Route path="create-new-job" element={<NewJob />} />
                            <Route path="all-jobs" element={<AllJob />} />
                            <Route path="all-employees" element={<AllEmployee />} />
                            <Route path="support-ticket" element={<Ticket/>} />
                            <Route path='job-detail/:jobId' element={<JobDetail/>}/>
                            <Route path='report-detail/:reportId' element={<ReportDetail/>}/>
                        </Routes>
                        
                    </div>

                </div>
            </div>
        </>

    )
}

export default Dashboard
