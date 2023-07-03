import React from 'react'


function Dashboard() {
    
    const admin = [
        {
            id : 1,
            School_Name : "ARC",
            Teachers_Name : "Mahalakshmi Saravanan",
            Subjects : "Maths",
            Students: "50",
            Percentage: "60 %" 
        },
        {
            id : 2,
            School_Name : "ABHIJAY",
            Teachers_Name : "Maha",
            Subjects : "Science",
            Students: "100",
            Percentage: "60 %"
        },
        {
            id : 3,
            School_Name : "Vellammal",
            Teachers_Name : "Naresh",
            Subjects : "English",
            Students: "50",
            Percentage: "60 %"
        },
        {
            id : 4,
            School_Name : "Vidhya lakshmi school",
            Teachers_Name : "Santhiya",
            Subjects : "social",
            Students: "50",
            Percentage: "60 %"
        },
        {
            id : 5,
            School_Name : "Sevak",
            Teachers_Name : "vanan",
            Subjects : "Tamil",
            Students: "80",
            Percentage: "90 %"
        },
        {
            id : 6,
            School_Name : "Ashirwad",
            Teachers_Name : "lakshmi",
            Subjects : "Tamil",
            Students: "40",
            Percentage: "40 %"
        },
        {
            id : 7,
            School_Name : "Bharth",
            Teachers_Name : "Saravanan",
            Subjects : "EVS",
            Students: "40",
            Percentage: "50 %"
        }

    ]
    
  return (
    <div className="container-fluid">

    {/* <!-- Page Heading --> */}
    <h1 className="h3 mb-2 text-gray-800">Student-Teacher</h1>
  

    {/* <!-- DataTales Example --> */}
    <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-danger"> Data List</h6>
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th> Sl.no </th>
                            <th>School_Name</th>
                            <th>Teachers_Name</th>
                            <th>Subjects</th>
                            <th>Students</th>
                            <th>Percentage %</th>
                         
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th> Sl.no </th>
                            <th>School_Name</th>
                            <th>Teachers_Name</th>
                            <th>Subjects</th>
                            <th>Students</th>
                            <th>Percentage %</th>
                          
                        </tr>
                    </tfoot>
                    <tbody>
                     {
                        admin.map((list,index) => {
                            return<tr>

                            <td>{index + 1 }</td>
                            <td>{list.School_Name}</td>
                            <td>{list.Teachers_Name}</td>
                            <td>{list.Subjects}</td>
                            <td>{list.Students}</td>
                            <td>{list.Percentage}</td>
                             </tr>
                        })
                     }
                 
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</div>
  )
}

export default Dashboard