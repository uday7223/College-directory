import './App.css';
import Login from './Components/Login';
import Student from './Components/Student';
import '../src/CSS/student.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Faculty from './Components/Faculty';
import Admin from './Components/Admin';

function App() {
  return (
    <>
    {/* <Login/> */}
    {/* <Student/> */}

    

    <BrowserRouter>
  <Routes>
    
    <Route element={<Login/>} path='/' />
    <Route element={<Student/>} path='/studentPortal/*' />
    <Route element={<Faculty/>} path='/facultyPortal/*' />
    <Route element={<Admin/>} path='/adminPortal/*' />

  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
