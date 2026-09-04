import { use, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const[email , emailValue]=useState('');
    const[password, passwordvalue]=useState('');

    const[message , setMessage] = useState("");
    const [messageType , setMessageType] = useState('');
    
    const navigate = useNavigate();

    const sendData=async(e)=>{
        e.preventDefault();
        
        const user = {
            email:email,
            pass: password
        }
     
        const response=await fetch("http://localhost:3001/api/v1/user/login",{
            method:"POST",
            headers:{
             "Content-Type": "application/json"
            },
            body:JSON.stringify(user),
        });
        const result = await response.json()
        
        // console.log(result);

        if(result.status){
            setMessage("User Logged In !!");
            setMessageType('success');
            sessionStorage.setItem('loginData',"true");
            navigate("/shop");

        }else{
            setMessage(result.message);
            setMessageType('error')
        }

    }
   
    

    return (
        <div className="login-page">

            <div className="container">
                <div className="row justify-content-center align-items-center min-vh-100">

                    <div className="col-12 col-md-8 col-lg-5">

                        <div className="login-card">

                            {/* Logo */}
                            <div className="text-center mb-4">

                                <div className="login-logo">
                                    Food<span>.</span>
                                </div>

                                <h2>Welcome Back</h2>

                                <p className="login-subtitle">
                                    Login to continue ordering your favorite food
                                </p>

                                <p className="login-subtitle">
                                    <div className={messageType=="success" ? "text-success" : "text-danger" }>
                                        {message}
                                    </div>
                                </p>

                            </div>


                            {/* Login Form */}
                            <form onSubmit={sendData}>

                                {/* Email */}
                                <div className="mb-3">

                                    <label className="form-label">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control login-input"
                                        placeholder="Enter your email"
                                        onChange={(e)=>(emailValue(e.target.value))}
                                        value={email}
                                    />

                                </div>


                                {/* Password */}
                                <div className="mb-2">

                                    <label className="form-label">
                                        Password
                                    </label>

                                    <div className="login-password-wrapper">

                                        <input
                                            type="password"
                                            className="form-control login-input"
                                            placeholder="Enter your password"
                                            onChange={(e)=>(passwordvalue(e.target.value))}
                                            value={password}
                                        />

                                        <button
                                            type="button"
                                            className="login-password-icon"
                                        >
                                            <i className="bi bi-eye"></i>
                                        </button>

                                    </div>

                                </div>


                                {/* Forgot Password */}
                                <div className="text-end mb-4">

                                    <a
                                        href="#"
                                        className="forgot-password"
                                    >
                                        Forgot Password?
                                    </a>

                                </div>


                                {/* Login Button */}
                                <button
                                    type="submit"
                                    className="btn login-btn w-100"
                                >
                                    Login
                                </button>

                            </form>


                            {/* Register */}
                            <div className="register-text text-center mt-4">

                                Don't have an account?

                                <a href="/register">
                                    Create Account
                                </a>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}

export default Login;