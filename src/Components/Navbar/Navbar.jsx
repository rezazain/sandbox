import React, { Fragment, useState } from "react";
import logo from "../../Assets/logo.png";
import Login from "../Login/Login";

const Navbar = ({ isLogin, setIsLogin }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <Fragment>
      <div className="flex justify-between pl-20 pr-20 p-2 bg-white ">
        <div>
          <img src={logo} alt="" />
        </div>
        <button
          className="bg-[#F7911A] rounded-3xl pl-4 pr-4 text-white font-bold"
          onClick={toggleModal}
        >
          Login
        </button>
      </div>
      <div className="mt-[10%]">
        {modal && (
          <Login
            setModal={setModal}
            modal={modal}
            onClick={toggleModal}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
          />
        )}
      </div>
    </Fragment>
  );
};

export default Navbar;
