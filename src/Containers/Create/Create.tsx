import { useState } from "react";
import Input from "../../Components/Input/Input";
import InputLabel from "../../Components/InputLabel/InputLabel";
import './Create.scss'
import Button from "../../Components/Button/Button";

const Create =(props:any)=>{
    const [contact , setContact] = useState({
        id:"",
        name:"",
        email:"",
        phone:""
    })
    const handleSubmit=(e:any)=>{
        e.preventDefault()
    }
    const handleChange=(e:any)=>{
        setContact({
            ...contact,
            [e.target.name]:e.target.value
        })
    }
    console.log(contact)
    const add=()=>{}
   return(
    <div className="container-fluid1">
        <div className="container">
            <h3 className="text-center">CREATE CONTACT</h3>
            <form onSubmit={()=>handleSubmit}>
             <InputLabel label="Enter ID"/>
             <Input
             type="text"
             name="id"
             placeholder="Enter ID Here"
             handleChange={()=>handleChange}
             required
             />
             <InputLabel label="Enter Name"/>
             <Input
             type="text"
             name="name"
             placeholder="Enter Name Here"
             handleChange={()=>handleChange}
             required
             />
             <InputLabel label="Enter Email"/>
             <Input
             type="text"
             name="email"
             placeholder="Enter Email Here"
             handleChange={()=>handleChange}
             required
             />
             <InputLabel label="Enter Name"/>
             <Input
             type="Number"
             name="phone"
             placeholder="Enter Phone Here"
             handleChange={()=>handleChange}
             required
             />
             <div className="text-center">
            <Button requestPath="/" onClick={()=>add} className="btn btn-dark mt-5">ADD</Button>
            </div>

            </form>
        </div>
    </div>
   )
}
export default Create;