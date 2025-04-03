import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AllJob() {
    const token=JSON.parse(localStorage.getItem('token'))
    const [allJob, setAllJob] = useState([]);
    const [loading, setLoading] = useState(true)
    const base_url = 'http://localhost:7000';
    const navigate = useNavigate()
    async function getAllJob() {
        const res = await fetch(`${base_url}/get-all-job`, {
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
            setAllJob(result.job);
        } else {
            alert(result.message);
        }
    }
    useEffect(() => {
        

        getAllJob();
    }, []);

    
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };
    async function deleteJob(id) {
        const res = await fetch(`${base_url}/delete-job/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Token':token
            },
        });
        const result = await res.json();
        if (result.success) {
            console.log(result)
            setLoading(false)
            getAllJob()
        } else {
            alert(result.message);
        }
    }

    return (
        <div className="container-fluid">
            {/* {loading && <div className="loader-wrapper">
                <div className="theme-loader">
                    <div className="loader-p" />
                </div>
            </div>} */}
            <div className="d-flex flex-column w-100">
                <div className="card">
                    <div className="card-header">
                        <h5>Jobs Posted By You</h5>
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Experience</th>
                                    <th scope="col">Posted Date</th>
                                    <th scope="col">Expiry Date</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allJob.length > 0 ? (
                                    allJob.map((item, key) => (
                                        <tr key={key}>
                                            <td scope="row">{key + 1}</td>
                                            <td>{item.title}</td>
                                            <td>{item.description}</td>
                                            <td>{item.experience}</td>
                                            <td>{formatDate(item.job_post_date)}</td>
                                            <td>{formatDate(item.job_expiry_date)}</td>
                                            <td className='d-flex justify-content-around'><Link to={`/dashboard/job-detail/${item._id}`}>View</Link> <a type='button' className='ml-5 text-danger' onClick={()=>deleteJob(item._id)}>Delete</a></td>
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
    );
}

export default AllJob;
