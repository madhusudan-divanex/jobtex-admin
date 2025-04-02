import React from 'react'

function Ticket() {
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
                                            <th  scope="col">Title</th>
                                            <th  scope="col">Description</th>
                                            <th  scope="col">Complaint by</th>
                                            <th  scope="col">Posted Date</th>
                                            <th  scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr >
                                            <td scope="row">1</td>
                                            <td>Software Developer</td>
                                            <td>The hr charge 5000$ For Hired me</td>
                                            <td>Rakesh</td>
                                            <td>10 March 2025</td>
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

export default Ticket
