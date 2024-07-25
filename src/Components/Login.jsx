import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useHistory, useNavigate } from 'react-router-dom';
import '../CSS/login.css'


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('STUDENT');
  let navigate =  useNavigate()


  let inputEmail = useRef(null)
let inputPass = useRef(null)
let inputRole = useRef(null)


let handleLogin =(e)=>{
  e.preventDefault();
  let email = inputEmail.current;
  let pass = inputPass.current;
  let role = inputRole.current;


  let credentials = {
      dataEmail : 'abc',
      dataPass : 'abc'
  }

  let {dataEmail, dataPass, dataRole} = credentials;

  let err = `border:solid 1px red; background-color:red`
  if(dataEmail === email.value && dataPass === pass.value && 'student' === role.value){
    navigate('/studentPortal')
    // console.log("hello");
  }else if(dataEmail === email.value && dataPass === pass.value && 'faculty' === role.value) {
    navigate('/facultyPortal')
  }else if(dataEmail === email.value && dataPass === pass.value && 'admin' === role.value) {
    navigate('/adminPortal')
  }
  else {
    email.style.cssText = err;
    pass.style.cssText = err;

  }
}


    

    // const handleLogin = async (e) => {
    //     e.preventDefault();

    //     navigate()
        
       
       
       
       
       
       
       
       
    //     try {
    //         const response = await axios.post('/api/users/login', { username, password, role });
    //         // Handle login logic
    //         history.push('/dashboard');
    //     } catch (error) {
    //         // Handle error
    //     }
    // };

    return (
        <div className='login'>
            <form onSubmit={handleLogin}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required ref={inputEmail} />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required  ref={inputPass}/>
               <div className="login-drop">
               <select ref={inputRole} value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="student">Student</option>
                    <option value="faculty">Faculty Member</option>
                    <option value="admin">Administrator</option>
                </select>
               </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
