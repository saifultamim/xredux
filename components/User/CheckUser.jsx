import { useContext } from "react";
import AuthContext from "../provider/AuthContext";

const CheckUser = () => {
    const {user,setUser}=useContext(AuthContext)
    console.log('user ',user)
    return (
        <div>
          {user ? <p>verified user</p> : <p>Not verified user</p> }
        </div>
    )
}

export default CheckUser;