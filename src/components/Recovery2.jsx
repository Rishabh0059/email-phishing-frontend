import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.jpeg';


export default function Recovery2() {
  const [detail, setDetail] = useState({ pass: "", confirmPass: "" });
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setDetail({ ...detail, [name]: value });
  }

  function handleCheckChange() {
    setIsChecked(!isChecked);
  }

  function changePassword() {
    const { pass, confirmPass } = detail;
    if (!pass || !confirmPass) {
      alert("Both password fields are required!");
      return;
    }
    if (pass !== confirmPass) {
      alert("Passwords do not match!");
      return;
    }
    if (!isChecked) {
      alert("Please check the 'Show password' checkbox to proceed.");
      return;
    }
    navigate("/home"); 
  }


  return (
    <div className="recovery2Container">
    <div className="innerChild">
      <div className="recovery2ContainerChild">
        <div className="images">
          <img src={logo} alt="google-logo" />
        </div>

        <div className="enterDetail">
          <p>To continue, enter your new password <strong className="text-red-500">*</strong></p>

          <input 
            type="password" 
            placeholder="Enter Password *" 
            onChange={handleChange} 
            name="pass" 
            value={detail.pass} 
            required 
            className={`w-full px-4 py-2 border rounded mb-1 ${!detail.pass ? "border-red-500" : "border-gray-300"}`} 
          />
          {!detail.pass && <p className="text-red-500 text-xs">Password is required</p>}

          <input 
            type={isChecked ? "text" : "password"} 
            placeholder="Confirm Password *" 
            onChange={handleChange} 
            name="confirmPass" 
            value={detail.confirmPass} 
            required 
            className={`w-full px-4 py-2 border rounded mb-1 ${detail.pass !== detail.confirmPass ? "border-red-500" : "border-gray-300"}`} 
          />
          {!detail.confirmPass && <p className="text-red-500 text-xs">Confirm password is required</p>}
          {detail.pass !== detail.confirmPass && detail.confirmPass && <p className="text-red-500 text-xs">Passwords do not match</p>}

          <div className="label">
            <input type="checkbox" checked={isChecked} onChange={handleCheckChange} />
            <p><strong>Show password</strong></p>
          </div>
          {!isChecked && <p className="text-red-500 text-xs">Please check this box to proceed</p>}
        </div>

        <div className="button">
          <button 
            type="button" 
            onClick={changePassword}
            disabled={!detail.pass || !detail.confirmPass || detail.pass !== detail.confirmPass || !isChecked}
            className={`w-full py-2 rounded-lg font-semibold transition-all 
              ${!detail.pass || !detail.confirmPass || detail.pass !== detail.confirmPass || !isChecked 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-blue-500 hover:bg-blue-600 text-white"}
            `}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}
