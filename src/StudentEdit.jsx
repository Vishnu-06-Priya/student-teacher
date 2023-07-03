import { useFormik } from 'formik';
import React from 'react'
import './App.css';
import axios from 'axios';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';


function StudentEdit() {
  const params = useParams()
  const navigate = useNavigate()
  const formik = useFormik({
      initialValues: {
        student_name: "",
          class: "",
          subject: "",
          total_student: "",
          over_all_percentage: "",
          remark: ""
      },
      validate: (values) => {
          let errors = {};

          if (values.student_name === "") {
              errors.student_name = "Please Enter Teacher Name"
          }

          if (values.class === "") {
              errors.class = "Please Enter Class Name"
          }

          if (values.subject === "") {
              errors.subject = "Please Enter Subject Name"
          }

          if (values.total_student === "") {
              errors.total_student = "Please Enter total_student"
          }

          if (values.over_all_percentage === "") {
              errors.over_all_percentage = "Please Enter Percentage"
          }

          if (values.remark === "") {
              errors.remark = "Please Enter Salary"
          }

          return errors;
      },

      onSubmit: async (values) => {
          let student = await axios.post(`https://6300f2429a1035c7f8fb32ef.mockapi.io/users/student/${params.id}`)
          alert("New File Created Done")
          navigate("/portal/teacher")
      },
  });
useEffect(() => {
    loadUser()
  }
, [])

let loadUser = async () => {
    try {
      let user =  await axios.get(`https://6300f2429a1035c7f8fb32ef.mockapi.io/users/student/${params.id}`)
   formik.setValues({
    student_name: user.data.student_name,
    class: user.data.class,
    subject: user.data.subject,
    Total_student: user.data.Total_student,
    over_all_percentage: user.data. over_all_percentage,
    remark: user.data.remark
})
    } catch (error) {
        
    }
}
  return (
   <>
     <div className='container'>

<form onSubmit={formik.handleSubmit}>
    <div className='row'>

        <div className='col-lg-6'>
            <label>Student_name </label>
            <input
                className={`form-control ${formik.errors.student_name ? `input-error` : ` `}`}
                type={"text"}
                value={formik.values.student_name}
                onChange={formik.handleChange}
                name="student_name">

            </input>
            <span style={{ color: "red" }}>
                {formik.errors.student_name}</span>

        </div>

        <div className='col-lg-6'>
            <label>Class </label>
            <input
                className={`form-control ${formik.errors.class ? `input-error` : ``}`}
                type={"text"}
                value={formik.values.class}
                onChange={formik.handleChange}
                name="class"></input>
            <span style={{ color: "red" }}>{formik.errors.class}</span>
        </div>

        <div className='col-lg-6'>
            <label>Subject</label>
            <input className={`form-control ${formik.errors.subject ? `input-error` : ""}`} type={"text"} value={formik.values.subject}
                onChange={formik.handleChange} name="subject"></input>
            <span style={{ color: "red" }}>{formik.errors.subject}</span>
        </div>

        <div className='col-lg-6'>
            <label>Total-Student</label>
            <input className={`form-control ${formik.errors.total_student ? `input-error` : ""}`} type={"text"} value={formik.values.total_student}
                onChange={formik.handleChange} name="total_student"></input>
            <span style={{ color: "red" }}>{formik.errors.total_student}</span>
        </div>

        <div className='col-lg-6'>
            <label>Over-all_percentage</label>
            <input className={`form-control ${formik.errors.over_all_percentage ? `input-error` : ""}`}
                type={"text"}
                value={formik.values.over_all_percentage}
                onChange={formik.handleChange}
                name="over_all_percentage">

            </input>
            <span style={{ color: "red" }}>{formik.errors.over_all_percentage}</span>
        </div>

        <div className='col-lg-6'>
            <label>Remark </label>
            <input className={`form-control ${formik.errors.remark ? `input-error` : ""}`}
                type={"text"}
                value={formik.values.remark}
                onChange={formik.handleChange}
                name="remark"></input>
            <span style={{ color: "red" }}>{formik.errors.remark}</span>

        </div>

        <div className='col-lg-6'>
            <input
                className='btn btn-primary mt-2'
                type={"submit"}
                values="Submit"
                disabled={!formik.isValid}>

            </input>
        </div>


    </div>
</form>

</div>
   </>
  )
}

export default StudentEdit