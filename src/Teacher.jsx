import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import TeacherView from './TeacherView'
import TeacherEdit from './TeacherEdit'


function Teacher() {

    const [teacher, setTeacher] = useState([]);
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        teachersData()
    }, [])

    let teachersData = async () => {
        setLoading(true)
        let teacher = await axios.get("https://6300f2429a1035c7f8fb32ef.mockapi.io/users/teacher")
        console.log(teacher);

        setTeacher(teacher.data)
        setLoading(false)
    };

    return (

        <div className="container-fluid">

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-2 text-gray-800">Management</h1>
                <Link to="/portal/createteacher" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <i
                        className="fas fa-download fa-sm text-white-50"></i> Create New
                </Link>
            </div>
            {
                isLoading ? (
               <div className='mx-auto' style={{width:"200px"}}>
                 <div class="spinner-grow text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
               </div>
              ) : <div className="card shadow mb-4">
                    
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Teachers Records</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>S.no</th>
                                        <th>Teacher_name</th>
                                        <th>Class</th>
                                        <th>Subject</th>
                                        <th>Total_student</th>
                                        <th>Over-all_percentage %</th>
                                        <th>Salary </th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>S.no</th>
                                        <th>Teacher_name</th>
                                        <th>Class</th>
                                        <th>Subject</th>
                                        <th>Total_student</th>
                                        <th> Over-all_percentage %</th>
                                        <th>Salary</th>
                                        <th>Action</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {
                                        teacher.map((user, index) => {
                                            return <tr>
                                                <td>{index + 1}</td>
                                                <td>{user.teachername}</td>
                                                <td>{user.class}</td>
                                                <td>{user.subject}</td>
                                                <td>{user.total_student}</td>
                                                <td>{user.over_all_percentage}</td>
                                                <td>Rs: {user.salary}</td>
                                                <td>

                                                    <Link to={`/portal/teacher/${user.id}`} className="btn btn-sm btn-danger shadow-sm">View</Link>
                                                    <Link to={`/portal/teacheredit/${user.id}`} className=" btn btn-sm btn-warning shadow-sm">Edit</Link>

                                                    <button >Delete</button>
                                                </td>
                                            </tr>
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            }


        </div>
    )
}

export default Teacher