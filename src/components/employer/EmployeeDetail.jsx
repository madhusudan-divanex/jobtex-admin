import React, { useState } from 'react'

function EmployeeDetail() {
    const token = JSON.parse(localStorage.getItem('token'))
    const base_url = 'http://localhost:7000'
    const { employeeId } = useParams();
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [allEducation, setAllEducation] = useState([])
    const [allExperience, setAllExperience] = useState([])
    const [allCertification, setAllCerallCertification] = useState([])
    const [employeeData, setEmployeeData] = useState([])
    useEffect(() => {
        async function getEmployeeDetail() {
            const res = await fetch(`${base_url}/get-employee-by-id/${employeeId}`, {
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
                setEmployeeData(result.employee);
            } else {
                alert(result.message);
            }
        }

        getEmployeeDetail();
    }, [employeeId]);
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
                        <h5>Employer Detail</h5>
                    </div>
                    <div className="card-body">
                        <form >

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label"> Name</label>


                                </div>
                                <div className="col-md-6 mb-3">


                                    <h6>{employeeData.first_name}</h6>
                                </div>


                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Experience</label>


                                </div>
                                <div className="col-md-6 mb-3">


                                    <h6>{employeeData.first_name}</h6>
                                </div>


                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label"> Gender</label>

                                </div>
                                <div className="col-md-6 mb-3">

                                    <h6>{employeeData.gender}</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Current Salary</label>
                                </div>
                                <div className="col-md-6 mb-3">

                                    <h6>{employeeData.current_salary}</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Expected Salary</label>
                                </div>
                                <div className="col-md-6 mb-3">

                                    <h6>{employeeData.expected_salary}</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">D.O.B.</label>
                                </div>
                                <div className="col-md-6 mb-3">

                                    <h6>{employeeData.dob}</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Skills</label>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <h6>
                                        {employeeData.skill && employeeData.skill.map((value, index) => (
                                            <span key={index} className="badge bg-secondary me-1">{value}</span>
                                        ))}
                                    </h6>
                                </div>
                            </div>


                            <button type="submit" className="btn btn-primary" onClick={(e) => {
                                e.preventDefault()
                                navigate('/dashboard/all-employees')
                            }}>
                                Close
                            </button>
                        </form>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h5>Employer Education</h5>
                    </div>
                    <div className="card-body">
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">University Name</th>
                                    <th scope="col">Degree Type</th>
                                    <th scope="col">Field of Study</th>
                                    <th scope="col">GPA</th>
                                    <th scope="col">Start Date</th>
                                    <th scope="col">End Date</th>
                                </tr>
                            </thead>
                            <tbody>

                                {allEducation.length > 0 ? (
                                    allEducation.map((item, key) => (
                                        <tr key={key}>
                                            <td scope="row">{key + 1}</td>
                                            <td>{item.education_name}</td>
                                            <td>{item.university_name}</td>
                                            <td>{item.degree_type}</td>
                                            <td>{item.field_of_study}</td>
                                            <td>{item.gpa}</td>
                                            <td>{item.start_date}</td>
                                            <td>{item.end_date}</td>


                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6">No Education Data found</td>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h5>Employer Experience</h5>
                    </div>
                    <div className="card-body">
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Company Name</th>
                                    <th scope="col">Employment Type</th>
                                    <th scope="col">Start Date</th>
                                    <th scope="col">End Date</th>

                                </tr>
                            </thead>
                            <tbody>

                                {allExperience.length > 0 ? (
                                    allExperience.map((item, key) => (
                                        <tr key={key}>
                                            <td scope="row">{key + 1}</td>
                                            <td>{item.experience_name}</td>
                                            <td>{item.company_name}</td>
                                            <td>{item.job_title}</td>
                                            <td>{item.employment_type}</td>
                                            <td>{item.start_date}</td>
                                            <td>{item.end_date}</td>


                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6">No Experience Data found</td>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h5>Employer Certification</h5>
                    </div>
                    <div className="card-body">
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">File</th>
                                </tr>
                            </thead>
                            <tbody>

                                {allCertification.length > 0 ? (
                                    allCertification.map((item, key) => (
                                        <tr key={key}>
                                            <td scope="row">{key + 1}</td>
                                            <td>Certification {key + 1}</td>
                                            <td>{item.university_name}</td>
                                            <td><img src={`${base_url}/${item.certification_url}`} style={{ width: '120px', height: '90px' }} alt="" srcset="" /></td>


                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6">No Certification Data found</td>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                        <button type="submit" className="btn btn-primary" onClick={(e)=>{e.preventDefault()
                navigate('/dashboard/all-employees')}}>
                Close
              </button>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default EmployeeDetail
