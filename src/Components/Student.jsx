import axios from 'axios';
import React, { useState } from 'react'

const Student = () => {

    let [student,setStudent] = useState([])


    const fetchApi = async () => {
        try {
            let response = await axios.get('http://localhost:4000/assignments');
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
                    <td>id</td>
                    <td>title</td>
                    <td>description</td>
                    <td>dueDate</td>
                    <td>attachment</td>
                    <td>className</td>
                    </tr></thead>

                    <tbody>
                      {
                        student.map((ele)=>{
                            let {id,title,description,dueDate,attachment,className} = ele;
                            console.log(ele);
                            return(
                                <tr>
                                    <td>{id}</td>
                                    <td>{title}</td>
                                    <td>{description}</td>
                                    <td>{dueDate}</td>
                                    <td>{attachment}</td>
                                    <td>{className}</td>
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