import { useState } from "react";

const useUserState = () => {
      const [user,setUser]=useState({name:"norway"})
   if(user){
    return {user,setUser}
   }
   return null
}
export default useUserState

// import { useState } from "react";

// const useUserState = () => {
//   const [user, setUser] = useState({ name: "Md.Shaiful Islam" });
//   if (user) {
//     return { user, setUser };
//   }
//     return null;

// };

// export default useUserState;
