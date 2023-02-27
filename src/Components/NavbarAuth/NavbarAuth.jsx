import React, { Fragment, useEffect, useState } from "react";
import logo from "../../Assets/logo.png";
import user from "../../Assets/userakun.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import Profile from "../NavbarAuth/Menu/Profile";
import UbahPassword from "../NavbarAuth/Menu/UbahPassword";
import Logout from "../Logout/Logout";
import axios from "axios";
import formdata from "form-data";

const NavbarAuth = ({ isLogin, setIsLogin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [nama, setNama] = useState("");
  const [profile, setProfile] = useState("");

  const data = () => {
    const FormData = formdata;
    const data = new FormData();

    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api-entrytest.sandboxindonesia.id/api/user/user/me/",
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("access"))}`,

        // ...data.getHeaders(),
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setNama(response.data.data.full_name);
        setProfile(response.data.data.photo);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <Fragment>
      <div className="bg-white">
        <div className="flex justify-between pl-20 pr-20 p-2 ">
          <div>
            <img src={logo} />
          </div>
          <div
            className="flex items-center "
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div className="flex items-center">
              <img src={profile} />
              <h1 className="ml-3 font-bold">{nama}</h1>
            </div>
            {!isOpen ? (
              <MdKeyboardArrowDown className="cursor-pointer" />
            ) : (
              <MdKeyboardArrowDown className="cursor-pointer" />
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute right-0 bg-white mr-5 rounded-lg">
          <ul>
            <li className="p-2 hover:text-[#F7911A] cursor-pointer font-bold">
              Profile
            </li>
            <li className="p-2 hover:text-[#F7911A] cursor-pointer font-bold">
              UbahPassword
            </li>
            <li className="p-2 hover:text-[#F7911A] cursor-pointer font-bold">
              <Logout isLogin={isLogin} setIsLogin={setIsLogin} />
            </li>
          </ul>
        </div>
      )}
    </Fragment>
  );
};
export default NavbarAuth;
