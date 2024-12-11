import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../reuseables/CustomButton";

const SignUp = () => {
  const navigate = useNavigate();

  const userDetails = {
    username: "",
    email: "",
    password: "",
  };

  const [data, setData] = useState(userDetails);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  
  const validateForm = () => {
    const { username, email, password } = data;

    if (!username.trim()) {
      return "Username is required.";
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Please enter a valid email address.";
    }

    if (!password.trim() || password.length < 6) {
      return "Password must be at least 6 characters long.";
    }

    return null; 
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setSuccess("");
      return;
    }

    
    const users = JSON.parse(localStorage.getItem("users")) || [];
    localStorage.setItem("users", JSON.stringify([...users, data]));

    setError("");
    setSuccess("Registration successful!");

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-auto max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">Sign Up</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>} 
        {success && <p className="text-green-500 text-sm mb-4">{success}</p>}
        <div className="space-y-4">
          <div>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-base text-sm"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-base text-sm"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-base text-sm"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <CustomButton
          style="w-full bg-black text-white py-2 mt-6 rounded hover:bg-blue-600"
          type="submit"
          textContent="Register"
        />
      </form>
      <div className="flex flex-wrap justify-between items-center w-full max-w-md text-sm space-y-2 sm:space-y-0 sm:space-x-2">
        <span>Already a User?</span>
        <Link to="/login" className="text-blue-500 hover:underline">
          Login now
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
