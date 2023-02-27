import React, { useState } from "react";
import close from "../../Assets/close.png";
import user from "../../Assets/user.png";
import key from "../../Assets/key.png";
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import formData from "form-data";
import axios from "axios";
import Logout from "../Logout/Logout";

const Login = ({ modal, setModal, isLogin, setIsLogin }) => {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [errormessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let FormData = formData;
    let data = new FormData();
    data.append("email", email);
    data.append("password", password);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api-entrytest.sandboxindonesia.id/api/auth/login/",
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        localStorage.setItem("refresh", JSON.stringify(response.data.refresh));
        localStorage.setItem("access", JSON.stringify(response.data.access));
        setModal(false);
        setIsLogin(!isLogin);
      })
      .catch(function (error) {
        console.log(error);
        setErrorMessage(error.message);
      });
  };
  return (
    <div className="flex justify-center">
      <div className="bg-white w-[30%] p-8 rounded-xl relative ">
        <div className="flex justify-center m-3">
          <h2 className=" font-bold">Login</h2>
          <img
            src={close}
            alt=""
            className="absolute right-5 cursor-pointer"
            onClick={() => setModal(false)}
          />
        </div>
        <div>
          <form>
            <div>
              <label className="font-bold flex">Username</label>
              <div
                className={`${
                  errormessage ? "border-2 border-red-500 rounded-md " : ""
                } flex relative items-center`}
              >
                <img src={user} className="absolute left-2" />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="email"
                  className="w-[100%] p-1 rounded-md pl-12 focus:border-[3px] border border-[#E9ECEF] focus:border-[#F7911A80] outline-none"
                />
              </div>
              <p className="text-red-600">{errormessage}</p>
            </div>
            <div>
              <label className="flex font-bold ">Password</label>
              <div
                className={`${
                  errormessage ? "border-2 border-red-500 rounded-md " : ""
                } flex relative items-center`}
              >
                <img src={key} alt="" className="absolute left-2" />
                <input
                  value={password}
                  type={visible ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-[100%] p-1 rounded-md  pl-12 border border-[#E9ECEF] focus:border-[3px] focus:border-[#F7911A80] outline-none"
                />

                <div
                  className="p-2 cursor-pointer absolute right-0"
                  onClick={() => setVisible(!visible)}
                >
                  {visible ? <IoEyeOutline /> : <AiOutlineEyeInvisible />}
                </div>
              </div>
            </div>
            <p className="text-red-600">{errormessage}</p>
          </form>
        </div>
        <button
          className="bg-[#F7911A] p-2 rounded-3xl text-white font-bold mt-5 w-[60%] ml-[20%]"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
