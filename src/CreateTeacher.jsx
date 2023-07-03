import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function CreateTeacher() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            teachername: "",
            class: "",
            subject: "",
            total_student: "",
            over_all_percentage: "",
            salary: ""
        },
        validate: (values) => {
            let errors = {};

            if (values.teachername === "") {
                errors.teachername = "Please Enter Teacher Name"
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

            if (values.salary === "") {
                errors.salary = "Please Enter Salary"
            }

            return errors;
        },

        onSubmit: async (values) => {
            let teacher = await axios.post("https://6300f2429a1035c7f8fb32ef.mockapi.io/users/teacher", values)
            alert("New File Created Done")
            navigate("/portal/teacher")
        }
    })

    return (
        <div className='container'>

            <form onSubmit={formik.handleSubmit}>
                <div className='row'>

                    <div className='col-lg-6'>
                        <label>Teacher Name </label>
                        <input
                            className={`form-control ${formik.errors.teachername ? `input-error` : ` `}`}
                            type={"text"}
                            value={formik.values.teachername}
                            onChange={formik.handleChange}
                            name="teachername">

                        </input>
                        <span style={{ color: "red" }}>
                            {formik.errors.teachername}</span>

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
                        <label>Salary</label>
                        <input className={`form-control ${formik.errors.salary ? `input-error` : ""}`}
                            type={"text"}
                            value={formik.values.salary}
                            onChange={formik.handleChange}
                            name="salary"></input>
                        <span style={{ color: "red" }}>{formik.errors.salary}</span>

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
    )
}

export default CreateTeacher