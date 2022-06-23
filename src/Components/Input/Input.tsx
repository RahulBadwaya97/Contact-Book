import { InputInterface } from "../../Modals/Interface";
import InputLabel from "../InputLabel/InputLabel";
import './Input.scss'
const Input =({
    type,
    name,
    handleChange,
    required,
    placeholder
}:InputInterface)=>{
    return(
        <div className="input-wrapper">
        <input
        type={type}
        name={name}
        onChange={handleChange()}
        required={required}
        placeholder={placeholder}
        />
        </div>
    )
}
export default Input;