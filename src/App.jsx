import logo from './logo.svg';
// import './App.css';
import './css/sb-admin-2.min.css';
import Dashboard from './Dashboard';
import Teacher from './Teacher';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";
import Student from './Student';
import CreateTeacher from './CreateTeacher';
import CreateStudent from './CreateStudent';
import Portal from './Portal';
import Login from './Login';
import TeacherView from './TeacherView';
import TeacherEdit from './TeacherEdit';
import StudentView from './StudentView';
import StudentEdit from './StudentEdit';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/portal" element={<Portal />}>
            <Route path="dashboard" element={<Dashboard />} />

            <Route path="teacher" element={<Teacher />} />
            <Route path="createteacher" element={<CreateTeacher/>} />
            <Route path="teacher/:id" element={<TeacherView />} />
            <Route path="teacheredit/:id" element={<TeacherEdit />} />
            
            <Route path="student" element={<Student />} />
            <Route path="createstudent" element={<CreateStudent />} />
            <Route path="student/:id" element={<StudentView />} />
            <Route path="studentedit/:id" element={<StudentEdit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>


  );
}

export default App;
