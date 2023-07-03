import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <ul className="navbar-nav bg-gradient-success sidebar sidebar-dark accordion" id="accordionSidebar">

       
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3" style={{color:"black"}} >School <sup>in</sup></div>
            </a>

           
            <hr className="sidebar-divider my-0"/>

       
            <li className="nav-item active">
                <Link  className="nav-link" to="/portal/dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                   <span> <h4 style={{color:"darkgreen"}}>DASHBOARD</h4> </span></Link>
               </li>

            <li className="nav-item active">
                <Link className="nav-link" to="/portal/teacher">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span><h4 style={{color:"darkgreen"}}>TEACHER</h4></span></Link>
            </li>
            
             <li className="nav-item active">
                <Link className="nav-link" to="/portal/student">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span><h4 style={{color:"darkgreen"}}>STUDENTS</h4></span></Link>
            </li>
        </ul>
  )
}

export default Sidebar
