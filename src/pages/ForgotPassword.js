import React, { useState } from "react";
import { COLORS } from "../Colors";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const auth = getAuth();

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.info("Email Sent Successfully");
        setTimeout(() => {
          navigate("/auth");
        }, 4000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <div className="container-fluid mb-4">
      <div className="container">
        <div className="col-12 text-center">
          <div
            className="text-center heading py-2"
            style={{ marginTop: "80px" }}
          >
            Reset Password
          </div>
        </div>
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
            <div className="row">
              <div className="col-12 py-3">
                <input
                  type="email"
                  className="input-text-box"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(evt) => setEmail(evt.target.value)}
                />
              </div>

              <div className="col-12 py-3 text-center">
                <button
                  className=""
                  style={{
                    height: "40px",
                    width: "80px",
                    backgroundColor: COLORS.primary4,
                    color: "white",
                    borderRadius: "0",
                  }}
                  onClick={handleSubmit}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
