import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function ReportDetail() {

  
     
    const base_url='http://localhost:7000'
    const { reportId } = useParams();
    const navigate=useNavigate()
    const [loading, setLoading] = useState(true)
    const [reportData,setReportData]=useState([])
     useEffect(() => {
            async function getReportDetail() {
                const res = await fetch(`${base_url}/get-report-by-id/${reportId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const result = await res.json();
                if (result.success) {
                    console.log(result,"detail")
                    setLoading(false)
                    setReportData(result.report);
                } else {
                    alert(result.message);
                }
            }
    
            getReportDetail();
        }, [reportId]);
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
            <h5>{reportData.subject}</h5>
          </div>
          <div className="card-body">
            <form >
              
              <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Report Title</label>
                
                <h6>{reportData.subject}</h6>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Report Description</label>
                
                <h6>{reportData.message}</h6>
              </div>
              
              
              </div>
              <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Attachment</label>
                

                <img src={`${base_url}/${reportData.attachment}`} style={{ width: '100%', height: '90%' }}  alt="" srcset="" />

              </div>
              
              </div>
             
              
              <button type="submit" className="btn btn-primary" onClick={()=>navigate('/dashboard')}>
                Close
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>



  )
}

export default ReportDetail
