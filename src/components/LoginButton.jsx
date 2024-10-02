import { useState } from "react";

const LoginButton = () => {
    
    const [btn, setLoginButton] = useState("Log In");

    return (
        <button className="mx-8 p-3 text-2xl bg-slate-100 " onClick={() => {
            if(btn === "Log In")
                setLoginButton("Log Out");
            else
                setLoginButton("Log In");
        }}>{btn}</button>
    )
}

export default LoginButton;