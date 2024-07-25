import axios from 'axios';
import React, { useState } from 'react'

const Student = () => {

    let [student,setStudent] = useState([])


    const fetchApi = async () => {
        try {
            let response = await axios.get('http://localhost:4000/students');
            setStudent(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    

    fetchApi()

  return (
<div className="student">


<div className="student-con">

      <div className="con">
            <table>
                <thead><tr>
                    <td>Sl no</td>
                    <td>Image</td>
                    <td>Name</td>
                    <td>email</td>
                    <td>phone</td>
                    </tr></thead>

                    <tbody>
                      {
                        student.map((ele)=>{
                            let {id,imgPath,name,email,phone} = ele;
                            return(
                                <tr>
                                    <td>{id}</td>
                                    <td><img src={imgPath} alt="" /></td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{phone}</td>
                                </tr>
                            )

                        })
                      }
                    </tbody>
            </table>
    
    </div>


      </div>
     





</div>

)
}

export default Student