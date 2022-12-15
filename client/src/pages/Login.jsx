import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase"

const Login = () => {
    const handleLogin = async() => {
        await signInWithPopup(auth, provider)
        .then((result) => {
            alert("Login successful");
        }).catch((error) => {
            alert("Error logging in");
        })
};

    return (
        <div className="flex items-center justify-center h-screen w-screen box-border">
            <div className="flex flex-col items-center">
                {/* Replace with your app logo */}
                <img className="w-20 h-20 object-contain"
                    src="https://i.ibb.co/7vvs1rq/Coder-PNG-File-553x420.png" 
                    alt="person sitting at a desk in front of five computer screens" 
                />
                <span className="italic text-xl font-bold m-2 text-white shadow-md">
                    5DayMERNApp
                </span>
                <button className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2" onClick={handleLogin}>

                    {/* Google sign-in button */}
                    <svg 
                    className="w-4 h-4 mr-2 ml-1" 
                    aria-hidden="true" 
                    focusable="false" 
                    data-prefix="fab" 
                    data-icon="google" 
                    role="img" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 488 512">
                        <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                    </svg>

                </button>
            </div>
        </div>
    )
};

export default Login;