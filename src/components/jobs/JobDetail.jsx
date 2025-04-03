import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function JobDetail() {
    const token=JSON.parse(localStorage.getItem('token'))
    const base_url='http://localhost:7000'
    const { jobId } = useParams();
    const navigate=useNavigate()
    const [loading, setLoading] = useState(true)
    const [jobData,setJobData]=useState([])
     useEffect(() => {
            async function getJobDetail() {
                const res = await fetch(`${base_url}/get-job-by-id/${jobId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const result = await res.json();
                if (result.success) {
                    console.log(result)
                    setLoading(false)
                    setJobData(result.job);
                } else {
                    alert(result.message);
                }
            }
    
            getJobDetail();
        }, [jobId]);
  return (
    <div className="container-fluid">
        {/* { loading && <div className="loader-wrapper">
    <div className="theme-loader">
      <div className="loader-p" />
    </div>
  </div>} */}
      <div className="d-flex flex-column w-100">
        <div className="card">
          <div className="card-header">
            <h5>{jobData.title}</h5>
          </div>
          <div className="card-body">
            <form >
              
              <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Job Title</label>
                
                <h6>{jobData.title}</h6>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Job Description</label>
                
                <h6>{jobData.description}</h6>
              </div>
              
              
              </div>
              <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Job Type</label>
                

                <h6>{jobData.type}</h6>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Location</label>
                
                <h6>{jobData.location}</h6>
              </div>
              </div>
              <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Salary</label>
                
                <h6>{jobData.salary}</h6>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Experience</label>
                
                <h6>{jobData.experience}</h6>
              </div>
              </div>
              
              <button type="submit" className="btn btn-primary" onClick={(e)=>{e.preventDefault()
                navigate('/dashboard/all-jobs')}}>
                Close
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetail
