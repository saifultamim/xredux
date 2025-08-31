// 'use client'
// import { useState } from "react";
// import Homework from "../homework/Homewrok";
// import Support from "../support/Support";
// import ThemeContext from "../provider/ThemeContext";
// import AuthContext from "../provider/AuthContext";
// import CheckUser from "../User/CheckUser";
// import useUserState from "../userState";

// const MainHome = () => {
// //   const [theme, setTheme] = useState("light");
// //     console.log('theme setTheme ',theme,setTheme)
// //     const [user,setUser]=useState({name:"Md.Shaiful Islam"})
//     const {user} = useUserState()
//     console.log('user ',user)
//   return (
//     <div>
//       {/* <p>Main Home</p>
//       <ThemeContext.Provider value={{ theme, setTheme }}>
//         <Homework />
//         <Support />
//       </ThemeContext.Provider> */}

//       <p>user</p>
//       {/* <AuthContext.Provider value={{user,setUser}}>
//        <CheckUser />
//       </AuthContext.Provider> */}
//     </div>
//   );
// };

// export default MainHome;
// ============================================
// "use client";
// import useUserState from "../userState";

// const MainHome = () => {
//   const { user, setUser } = useUserState();
//   console.log("+++user+++", user, setUser);
//   return (
//     <div>
//       <p>user</p>
//       {/* <AuthContext.Provider value={{user,setUser}}>
//        <CheckUser />
//       </AuthContext.Provider> */}
//     </div>
//   );
// };

// export default MainHome;
// ==========================================================
"use client";
import { useState } from "react";
import useUserState from "../userState";

const MainHome = () => {
  const [user,setUser]=useState({name:"norwayssssss"})
  console.log("user ", user);
  return (
    <div>
      <p>user</p>
    </div>
  );
};

export default MainHome;
