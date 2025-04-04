import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { base_url } from '../../baseUrl';
function Plan() {
    const token=JSON.parse(localStorage.getItem('token'))
    const [freeEmployee, setFreeEmployee] = useState([]);
    const [standardEmployee, setStandardEmployee] = useState([]);
    const [ultraEmployee, setUltraEmployee] = useState([]);
    const [loading, setLoading] = useState(true)
    
    let Free=0
    let Standard=0;
    let Ultra=0;  
    let totaluser=0;
    const navigate = useNavigate()
    async function getAllPlan() {
            const res = await fetch(`${base_url}/get-plan-employee`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Token':token
                },
            });
            const result = await res.json();
            if (result.success) {
                console.log(result)
                setLoading(false)
                Free=freeEmployee.length
                Standard=standardEmployee.length
                Ultra=ultraEmployee.length
                totaluser=Free+Standard+Ultra
                setFreeEmployee(result.freeEmployee)
                setStandardEmployee(result.standardEmployee)
                setUltraEmployee(result.ultraEmployee)
            } else {
                alert(result.message);
            }
        }
        useEffect(() => {
            
    
            getAllPlan();
        }, []);
  return (
    <div className="container mt-4">
      {/* Page Heading */}
      {/* <h2 className=" mb-4">Subscription Plans</h2> */}

      {/* Plan Details */}
      <div className="card shadow-sm p-4">
        <h4 className="mb-3">Plan Overview</h4>

        <div className="row">
          {/* Plan 1 */}
          <div className="col-md-4">
            <div className="card bg-warning text-white text-center p-3 cursor-pointer" onClick={()=>navigate(`/dashboard/plan/Free`)}>
              <h2>{Free} Users</h2>
              <p>Free Plan</p>
            </div>
          </div>

          {/* Plan 2 */}
          <div className="col-md-4">
            <div className="card bg-success text-white text-center p-3 cursor-pointer" onClick={()=>navigate(`/dashboard/plan/Standard`)}>
              <h2>{Standard} Users</h2>
              <p>Standard Plan</p>
            </div>
          </div>

          {/* Plan 3 */}
          <div className="col-md-4">
            <div className="card bg-danger text-white text-center p-3 cursor-pointer" onClick={()=>navigate(`/dashboard/plan/Ultra`)}>
              <h2>{Ultra} Users</h2>
              <p>Ultra Plan</p>
            </div>
          </div>
        </div>
        <h6>Total User: {totaluser}</h6>
      </div>
    </div>
  );
}

export default Plan;
