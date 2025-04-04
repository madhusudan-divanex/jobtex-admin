import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { base_url } from '../../baseUrl';
function PlanDetail() {
  const token = JSON.parse(localStorage.getItem('token'))
  
  const { plan_type } = useParams();
  const navigate = useNavigate()
  const [allPlan, setAllPlan] = useState([])
  const [freeEmployee, setFreeEmployee] = useState([]);
  const [standardEmployee, setStandardEmployee] = useState([]);
  const [ultraEmployee, setUltraEmployee] = useState([]);
  const [loading, setLoading] = useState(true)
  const [jobData, setJobData] = useState([])
  let Free=0
    let Standard=0;
    let Ultra=0;  
    let totaluser=0;
  async function getAllPlan() {
    const res = await fetch(`${base_url}/get-plan-employee`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Token': token
      },
    });
    const result = await res.json();
    if (result.success) {
      console.log(result)
      setLoading(false)
      Free = freeEmployee.length
      Standard = standardEmployee.length
      Ultra = ultraEmployee.length
      totaluser = Free + Standard + Ultra
      setFreeEmployee(result.freeEmployee)
      setStandardEmployee(result.standardEmployee)
      setUltraEmployee(result.ultraEmployee)
    } else {
      alert(result.message);
    }
  }
  useEffect(() => {


    getAllPlan();
    if(plan_type== 'Free'){
      setAllPlan(freeEmployee)
    }
    else if(plan_type=='Standard'){
      setAllPlan(standardEmployee)
    }
    else{
      setAllPlan(ultraEmployee)
    }
  }, []);
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
            <h5>{plan_type}</h5>
          </div>
          <div className="card-body">
          <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    
                                    <th scope="col">Email</th>
                                    <th scope="col">Joined At</th>
                                    
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {allPlan.length > 0 ? (
                                    allPlan.map((item, key) => (
                                        <tr key={key}>
                                            <td scope="row">{key + 1}</td>
                                            <td>{item.first_name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.createdAt}</td>
                                            
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6">No Employee found with {plan_type} plan</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
          </div>
        </div>
      </div>
    </div>
  )
}



export default PlanDetail
