import React, { useState } from 'react'

function NewJob() {
    const base_url='http://localhost:7000'
    const [jobData, setJobData] = useState({
        title: "",
        company_name: "",
        company_detail:"",
        location: "",
        salary:'',
        description: "",
        experience:"",
        type:'',
        job_expiry_date:""
      });

    
      const handleChange = (e) => {
        setJobData({ ...jobData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        const res=await fetch(`${base_url}/create-new-job`,{
          method:'post',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify({
            title:jobData.title,
            company_name:jobData.company_name,
            company_detail:jobData.company_detail,
            location:jobData.location,
            salary:jobData.salary,
            description:jobData.description,
            experience:jobData.experience,
            type:jobData.type,
            job_expiry_date:jobData.job_expiry_date
          })
      })
      const result=await res.json();
      if(result.success){
        alert('Job created')
        setJobData({
          title: "",
          company_name: "",
          company_detail: "",
          location: "",
          salary: 0,
          description: "",
          experience: "",
          type: '',
          job_expiry_date: undefined
      });   
      }
      else{
          alert(result.message)
      }
      };
    return (
        <div className="container-fluid">
      <div className="d-flex flex-column w-100">
        <div className="card">
          <div className="card-header">
            <h5>Create New Job</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              
              <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Job Title</label>
                <span className='text-danger'>*</span>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={jobData.title}
                  placeholder='Web Designer'
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Job Description</label>
                <span className='text-danger'>*</span>
                <textarea
                  className="form-control"
                  name="description"
                  value={jobData.description}
                  onChange={handleChange}
                  required
                  placeholder='Software Developer with minimum 5 year of relvent experience,Mst have knowledege of Mern/Mean Technology.
                  Immedaite joiner'
                ></textarea>
              </div>
              
              
              </div>
              <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Job Type</label>
                <span className='text-danger'>*</span>

                 <select
                  className="form-control"
                  name="type"
                  value={jobData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Location</label>
                <span className='text-danger'>*</span>
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  value={jobData.location}
                  placeholder='Jaipur'
                  onChange={handleChange}
                  required
                />
              </div>
              </div>
              <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Salary</label>
                <span className='text-danger'>*</span>
                <input
                  type="number"
                  className="form-control"
                  name="salary"
                  value={jobData.salary}
                  onChange={handleChange}
                  placeholder='50000'
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Experience</label>
                <span className='text-danger'>*</span>
                <input
                  type="number"
                  className="form-control"
                  name="experience"
                  placeholder='5 year'
                  value={jobData.experience}
                  onChange={handleChange}
                  required
                />
              </div>
              </div>
              <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Company</label>
                <span className='text-danger'>*</span>
                <input
                  type="text"
                  className="form-control"
                  name="company_name"
                  value={jobData.company_name}
                  onChange={handleChange}
                  placeholder='Object Square'
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Company Description</label>
                <span className='text-danger'>*</span>
                <textarea
                  className="form-control"
                  name="company_detail"
                  value={jobData.company_detail}
                  onChange={handleChange}
                  required
                  placeholder='Software Developer with minimum 5 year of relvent experience,Mst have knowledege of Mern/Mean Technology.
                  Immedaite joiner'
                ></textarea>
              </div>
              <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Job Expiry Date</label>
                <span className='text-danger'>*</span>
                <input
                  type="date"
                  className="form-control"
                  name="job_expiry_date"
                  value={jobData.job_expiry_date}
                  
                  onChange={handleChange}
                  required
                />
              </div>
             
              
              
              </div>
            </div>
              <button type="submit" className="btn btn-primary">
                Create Job
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}

export default NewJob
