import { Link } from "react-router-dom";
import { ButtonInterface } from "../../Modals/Interface";

const Button=({children , requestPath, onClick , className, ...props}:ButtonInterface)=>{

    return(
        <div>
       <Link to={requestPath} className={className} {...props}>{children}</Link>
       </div>
    )
}
export default Button;