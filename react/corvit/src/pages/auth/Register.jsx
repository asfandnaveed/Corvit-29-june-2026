import { useState } from "react";
import "./Register.css";

function Register() {

    const [email , setEmail] = useState("");
    const [name , setName] = useState("");
    const [phone , setPhone] = useState("");
    const [gender , setGender] = useState("");
    const [address , setAddress] = useState("");
    const [password , setPassword] = useState("");
    const [confirmpassword , setConfirmPassword] = useState("");


    return (
        <div className="register-page">

            <div className="container">
                <div className="row justify-content-center align-items-center min-vh-100">

                    <div className="col-12 col-md-9 col-lg-6">

                        <div className="register-card">

                            {/* Logo */}
                            <div className="text-center mb-4">
                                <div className="register-logo">
                                    Food<span>.</span>
                                </div>

                                <h2>Create your account</h2>

                                <p className="register-subtitle">
                                    Sign up to order your favorite food
                                </p>
                            </div>


                            <form>

                                {/* Name */}
                                <div className="mb-3">
                                    <label className="form-label">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control register-input"
                                        placeholder="Enter your full name"
                                    />
                                </div>


                                {/* Phone + Gender */}
                                <div className="row">

                                    {/* Phone */}
                                    <div className="col-md-7 mb-3">

                                        <label className="form-label">
                                            Phone Number
                                        </label>

                                        <input
                                            type="tel"
                                            className="form-control register-input"
                                            placeholder="Enter phone number"
                                        />

                                    </div>


                                    {/* Gender */}
                                    <div className="col-md-5 mb-3">

                                        <label className="form-label">
                                            Gender
                                        </label>

                                        <select className="form-select register-input">

                                            <option value="">
                                                Select gender
                                            </option>

                                            <option value="male">
                                                Male
                                            </option>

                                            <option value="female">
                                                Female
                                            </option>

                                        </select>

                                    </div>

                                </div>


                                {/* Email */}
                                <div className="mb-3">

                                    <label className="form-label">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control register-input"
                                        placeholder="Enter your email"
                                    />

                                </div>


                                {/* Address */}
                                <div className="mb-3">

                                    <label className="form-label">
                                        Address
                                    </label>

                                    <textarea
                                        className="form-control register-textarea"
                                        placeholder="Enter your delivery address"
                                        rows="3"
                                    ></textarea>

                                </div>


                                {/* Password */}
                                <div className="mb-3">

                                    <label className="form-label">
                                        Password
                                    </label>

                                    <div className="password-wrapper">

                                        <input
                                            type="password"
                                            className="form-control register-input"
                                            placeholder="Create a password"
                                        />

                                        <button
                                            type="button"
                                            className="password-icon"
                                        >
                                            <i className="bi bi-eye"></i>
                                        </button>

                                    </div>

                                </div>


                                {/* Confirm Password */}
                                <div className="mb-4">

                                    <label className="form-label">
                                        Confirm Password
                                    </label>

                                    <div className="password-wrapper">

                                        <input
                                            type="password"
                                            className="form-control register-input"
                                            placeholder="Confirm your password"
                                        />

                                        <button
                                            type="button"
                                            className="password-icon"
                                        >
                                            <i className="bi bi-eye"></i>
                                        </button>

                                    </div>

                                </div>


                                {/* Terms */}
                                <div className="form-check mb-4">

                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="terms"
                                    />

                                    <label
                                        className="form-check-label"
                                        htmlFor="terms"
                                    >
                                        I agree to the{" "}
                                        <a href="#">
                                            Terms & Conditions
                                        </a>
                                    </label>

                                </div>


                                {/* Register */}
                                <button
                                    type="submit"
                                    className="btn register-btn w-100"
                                >
                                    Create Account
                                </button>

                            </form>


                            {/* Login */}
                            <div className="login-text text-center mt-4">

                                Already have an account?

                                <a href="/login">
                                    Login
                                </a>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}

export default Register;