
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function StudentView() {
  const params = useParams()
    console.log(params)

    const[searchParams, setSearchParams] =useSearchParams()
    console.log(...searchParams)
 
    const[userData, setUserData] = useState({})
  useEffect(()=>{
    loadUser()

  },[])

  let loadUser = async () => {
    try {
    let user =  await axios.get(`https://6300f2429a1035c7f8fb32ef.mockapi.io/users/student/${params.id}`)
    setUserData(user.data)
    } catch (error) {
      
    }
}

  return (
   <>
     <h3 style={{color:"red"}}>{userData.student_name}</h3>
   <h3>{userData.class}</h3>
   <h3>{userData.subject}</h3>
   <h3>{userData.mark}</h3>
   <h3>{userData.Total_student}</h3>
   <h3>{userData.over_all_percentage}</h3>
   <h3>{userData.remark}</h3>
   </>
  )
}

export default StudentView