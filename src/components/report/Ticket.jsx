import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { base_url } from '../../baseUrl';
function Ticket() {
    const token=JSON.parse(localStorage.getItem('token'))
    
    const [allReport, setAllReport] = useState([])
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };
    async function getAllReport() {
            const res = await fetch(`${base_url}/get-all-report`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Token':token
                },
            });
            const result = await res.json();
            if (result.success) {
                console.log(result)
               
                setAllReport(result.report);
            } else {
                alert(result.message);
            }
        }
        useEffect(() => {   
            getAllReport();
        }, []);
  return (
    <div className="container-fluid">
                            
    <div className="d-flex flex-column w-100 ">
                        
                        <div className="card">
                            <div className="card-header">
                                <h5>Reports</h5>
                            </div>
                            <div className="card-body">
                                <table className="table ">
                                    <thead>
                                        <tr>
                                            <th  scope="col">ID</th>
                                            <th  scope="col">Subject</th>
                                            <th  scope="col">Message</th>
                                            <th  scope="col">Image</th>
                                            <th  scope="col">Posted Date</th>
                                            <th  scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    {allReport.length > 0 ? (
                                    allReport.map((item, key) => (
                                        <tr key={key}>
                                            <td scope="row">{key + 1}</td>
                                            <td>{item.subject}</td>
                                            <td>{item.message}</td>
                                            <td><img src={`${base_url}/${item.attachment}`} style={{ width: '120px', height: '90px' }} alt="" srcset="" />
                                            </td>
                                            <td>{formatDate(item.createdAt)}</td>
                                            
                                            <td className='d-flex justify-content-around'><Link to={`/dashboard/report-detail/${item._id}`} className='link-success link-underline-success link-underline-opacity-50'>View</Link> <a type='button' className='ml-5 text-danger' >Delete</a></td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6">No jobs found</td>
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

export default Ticket
