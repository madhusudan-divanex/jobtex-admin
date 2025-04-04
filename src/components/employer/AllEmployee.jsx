import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { base_url } from '../../baseUrl';
function AllEmployee() {
    const token=JSON.parse(localStorage.getItem('token'))
     const [allEmployee, setAllEmployee] = useState([]);
        const [loading, setLoading] = useState(true)
   
        const navigate = useNavigate()
        async function getAllEmployee() {
            const res = await fetch(`${base_url}/get-all-employee`, {
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
                setAllEmployee(result.employees);
            } else {
                alert(result.message);
            }
        }
        useEffect(() => {
            
    
            getAllEmployee();
        }, []);
  return (
    <div className="container-fluid">
                            
    <div className="d-flex flex-column w-100 ">
                        
                        <div className="card">
                            <div className="card-header">
                                <h5>Employers</h5>
                            </div>
                            <div className="card-body">
                                <table className="table ">
                                    <thead>
                                        <tr>
                                            <th  scope="col">ID</th>
                                            <th  scope="col">Name</th>
                                            <th  scope="col">Experience</th>
                                            <th  scope="col">Gender</th>
                                            <th  scope="col">Current Salary</th>
                                            <th  scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    {allEmployee.length > 0 ? (
                                    allEmployee.map((item, key) => (
                                        <tr key={key}>
                                            <td scope="row">{key + 1}</td>
                                            <td>{item.first_name}</td>
                                            <td>{item.experience}</td>
                                            <td>{item.gender}</td>
                                            <td>{item.current_salary}</td>
                                            
                                            <td className='d-flex justify-content-around'><Link to={`/dashboard/employee-detail/${item._id}`}>View</Link> </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6">No Employee found</td>
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

export default AllEmployee
