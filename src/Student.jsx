import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import StudentView from './StudentView'
import StudentEdit from './StudentEdit'
function Student() {

    const [student, setStudent] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        studentData()
    }, [])

    let studentData = async () => {
        setLoading(true)
        let student = await axios.get("https://6300f2429a1035c7f8fb32ef.mockapi.io/users/student")
        console.log(student);

        setStudent(student.data)
        setLoading(false)
    };

    let studentDelete = async (studentid) => {
        try {
            let ask = window.confirm("Are You Sure ? Do You Want to Delete this Data ")
            if (ask){
                await axios.delete(`https://6300f2429a1035c7f8fb32ef.mockapi.io/users/student${studentid}`)
                studentData() 
            }
          
        } catch (error) {
            
        }
    }
    return (
        <div class="container-fluid">

            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-2 text-gray-800">Test Result</h1>
                <Link to="/portal/createstudent" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Create New</Link>
            </div>
            {
                isLoading ? (
                    <div className='mx-auto' style={{ width: "200px" }}>
                        <div class="spinner-grow text-danger" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>

                ) :
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Students Records</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>S.no</th>
                                            <th>Student_name</th>
                                            <th>Class</th>
                                            <th>Subject</th>
                                            <th>Mark</th>
                                            <th>Total-Student</th>
                                            <th>Over-all_percentage %</th>
                                            <th>remark</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>S.no</th>
                                            <th>Student_name</th>
                                            <th>Class</th>
                                            <th>Subject</th>
                                            <th>Mark</th>
                                            <th>Total-Student</th>
                                            <th> Over-all_percentage %</th>
                                            <th>remark</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {
                                            student.map((list, index) => {
                                                return <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{list.student_name}</td>
                                                    <td>{list.class}</td>
                                                    <td>{list.subject}</td>
                                                    <td>{list.mark}</td>
                                                    <td>{list.Total_student}</td>
                                                    <td>{list.over_all_percentage}</td>
                                                    <td>{list.remark}</td>
                                                    <td>
                                                        <Link to={`/portal/student/${list.id}`} className="btn btn-sm btn-success shadow-sm">View</Link>
                                                        <Link to={`/portal/studentedit/${list.id}`} className="d-none d-sm-inline-block btn btn-sm btn-warning shadow-sm">Edit</Link>

                                                        <button onClick={() => studentDelete(list.id)}  className="btn btn-sm btn-danger mr-2"> Delete</button>
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

export default Student;