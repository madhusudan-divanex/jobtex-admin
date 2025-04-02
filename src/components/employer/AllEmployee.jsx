import React from 'react'

function AllEmployee() {
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
                                            <th  scope="col">Profession</th>
                                            <th  scope="col">Apply For</th>
                                            <th  scope="col">Location</th>
                                            <th  scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr >
                                            <td scope="row">1</td>
                                            <td>Mahesh</td>
                                            <td>Project Manager</td>
                                            <td>Software Developer</td>
                                            <td>Jaipur</td>
                                            <td><a href=""> View </a></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

    </div>
               

    
</div>
  )
}

export default AllEmployee
