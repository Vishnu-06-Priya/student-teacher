import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function CreateStudent() {
    const navigate =useNavigate()
    const formik = useFormik({
        initialValues: {
            student_name: "",
            class: "",
            subject: "",
            mark: "",
            over_all_percentage: "",
            remark: ""
        },
        validate: (values) => {
            let errors = {};

            if (values.student_name === "") {
                errors.student_name = "Enter Student Name"
            }

            if (values.class === "") {
                errors.class = "Enter class Name"
            }

            if (values.subject === "") {
                errors.subject = "Enter subject Name"
            }

            if (values.mark === "") {
                errors.mark = "Enter mark "
            }

            if (values.over_all_percentage === "") {
                errors.over_all_percentage = "Enter over_all_percentage "
            }
            if (values.remark === "") {
                errors.remark = "Enter remarks "
            }
            return errors;
        },
        onSubmit:async (values) => {
            let student = await axios.post("https://6300f2429a1035c7f8fb32ef.mockapi.io/users/student", values)
            alert("New File Created Done")
            navigate("/portal/student")
        }

    })
    return (
        <div className='container'>

            <form onSubmit={formik.handleSubmit}>
                <div className='row'>

                    <div className='col-lg-6'>
                        <label>student_name</label>
                        <input className={`form-control ${formik.errors.student_name ? `input-error` : ` `}`} type={"text"} value={formik.values.student_name}
                            onChange={formik.handleChange} name="student_name"></input>
                        <span style={{ color: "red" }}>{formik.errors.student_name}</span>

                    </div>

                    <div className='col-lg-6'>
                        <label>Class</label>
                        <input className={`form-control ${formik.errors.class ? `input-error` : ` `}`} type={"text"} value={formik.values.class}
                            onChange={formik.handleChange} name="class"></input>
                        <span style={{ color: "red" }}>{formik.errors.class}</span>

                    </div>

                    <div className='col-lg-6'>
                        <label>Subject </label>
                        <input className={`form-control ${formik.errors.subject ? `input-error` : ` `}`} type={"text"} value={formik.values.subject}
                            onChange={formik.handleChange} name="subject" ></input>
                        <span style={{ color: "red" }}>{formik.errors.subject}</span>
                    </div>

                    <div className='col-lg-6'>
                        <label>Mark </label>
                        <input className={`form-control ${formik.errors.mark ? `input-error` : ` `}`} type={"text"} value={formik.values.mark}
                            onChange={formik.handleChange} name="mark" ></input>
                        <span style={{ color: "red" }}>{formik.errors.mark}</span>
                    </div>

                    <div className='col-lg-6'>
                        <label> Over-all_percentage </label>
                        <input className={`form-control ${formik.errors.over_all_percentage ? `input-error` : ` `}`} type={"text"} value={formik.values.over_all_percentage}
                            onChange={formik.handleChange} name="over_all_percentage"></input>
                        <span style={{ color: "red" }}>{formik.errors.over_all_percentage}</span>
                    </div>

                    <div className='col-lg-6'>
                        <label>remark </label>
                        <input className={`form-control ${formik.errors.remark ? `input-error` : ` `}`} type={"text"} value={formik.values.remark}
                            onChange={formik.handleChange} name="remark" ></input>
                        <span style={{ color: "red" }}>{formik.errors.remark}</span>
                    </div>

                    <div className='col-lg-6'>
                        <input className='btn btn-primary' type={"submit"} value="Submit" disabled={!formik.isValid}></input>

                    </div>
                </div>
                </form>

        </div>
    )
}

export default CreateStudent