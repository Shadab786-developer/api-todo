import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Feactures/Authentication/AuthSlice";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would validate credentials with an API
    if (email && password) {
      dispatch(login({ email }));
    }
  };
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1128px] mx-auto px-4 mt-10 flex flex-col-reverse md:flex-row items-center justify-center pt-[30%]">
        <div className="w-full md:w-1/2 space-y-8 ">
          <div className="max-w-[408px]">
            <form className="space-y-4 pt-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-[#0a66c2]"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-[#0a66c2]"
                />
              </div>

              {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-green-500 text-white font-medium hover:bg-green-800 transition-colors cursor-pointer"
                onClick={() => {
                  navigate("/TaskApp");
                }}
              >
                Log in
              </button>
            </form>

            <p className="mt-8 text-center">
              New to LinkedIn?{" "}
              <a className="text-[#0a66c2] font-medium hover:underline"></a>
              Join now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
