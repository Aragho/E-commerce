// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import CustomButton from "../reuseables/CustomButton";

// const SignUp = () => {
//   const navigate = useNavigate();

//   const userDetails = {
//     username: "",
//     email: "",
//     password: "",
//   };

//   const [data, setData] = useState(userDetails);

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent default form submission behavior
//     console.log("Submitted....", data);
//     navigate("/login");
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
//         <div className="space-y-4">
//           <div>
//             <input
//               type="text"
//               name="username"
//               placeholder="Enter Username"
//               className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your Email"
//               className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter Password"
//               className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>
//         <CustomButton
//           style="w-full bg-black text-white py-2 mt-6 rounded hover:bg-blue-600"
//           type="submit"
//           textContent="Register"
//         />
//       </form>
//       <div className="flex justify-between w-full max-w-md text-sm">
//         <span>Already a User?</span>
//         <Link to="/login" className="text-blue-500 hover:underline">
//           Login now
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
