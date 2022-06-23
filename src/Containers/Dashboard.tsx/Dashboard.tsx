//@ts-nocheck
import { toast } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
import Button from "../../Components/Button/Button";
import './Dashboard.scss'
import Create from "../Create/Create";
const Dashboard =()=>{
    const [users , setUsers] = useState([{
        id:1,name:"Rahul" ,email:"r.badwaya@braininventory.com", contact:"8357879769"
    }])
    const handleDelete=()=>{}
    const handleEdit =()=>{}
    const add =()=>{}
    return(
        <div className="container-fluid">
            <div className="Container mt-3">
                <div className="add-btn">
            <Button requestPath="/create" onClick={()=>add} className="btn btn-dark ">ADD</Button>
            </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                          {users.map((user , i)=>{
                            return <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.contact}</td>
                                <td className="d-flex">
                                    <Button requestPath="/" onClick={()=>handleDelete} className="btn btn-danger me-1">DELETE</Button>
                                    <Button requestPath="/edit" onClick={()=>handleEdit} className="btn btn-info ms-1">EDIT</Button>
                                </td>
                            </tr>
                          })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Dashboard;