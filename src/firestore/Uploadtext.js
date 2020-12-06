import React, { useEffect, useState } from 'react';
import { db } from '../fire'

const Uploadtext = () => {
    const [students, setStudent] = useState([]);
    const [name,setName]=useState('');
    const [studentid,setStudentId]=useState('');


    const ref = db.collection("students")

    const getelements = () => {
        ref.get()
            .then((item) => {
                var items = [];
                items = item.docs.map((doc) => doc.data());
               // items.reverse();
                setStudent(items);
                console.log(students)
            })
    }

    const Handeler= () =>{
        ref.add({
            Name:name,
            Id: studentid
        })
        .then((err)=>{
            console.log(err);
            setStudentId('');
            setName('')
        })

    }


    useEffect(() => {
        getelements();

    }, [])
    return (
        <div>
            <div>
                <br></br>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
                <input type='text' value={studentid} onChange={(e)=>setStudentId(e.target.value)} />
                <button onClick={Handeler}>Add</button>

            </div>
            <ul>
                {
                    students.map((item) => {
                      return(
                      <div key={item.id}>
                          <tr>
                              <td>{item.Name}</td>
                              <td>{item.Id}</td>
                          </tr>
                      </div>)

                    })
                }
            </ul>

        </div>
    );
};

export default Uploadtext;