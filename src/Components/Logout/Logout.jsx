import React from "react";
import axios from "axios";
import formData from "form-data";

const Logout = ({ isLogin, setIsLogin }) => {
  const handleLogout = () => {
    var FormData = formData;
    var data = new FormData();
    data.append("refresh", JSON.parse(localStorage.getItem("refresh")));

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api-entrytest.sandboxindonesia.id/api/auth/logout/",
      headers: {
        // Authorization:
        //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3OTg3ODk0MSwiaWF0IjoxNjc3Mjg2OTQxLCJqdGkiOiJmOTllY2VlMDVhMDE0Y2VlOGJmOGJkNzNkYjhjMTg2ZCIsInVzZXJfaWQiOjR9.pcseSZ3GtWB1ZF8GBoCDlrjlH9UJ0C8f6PRGVUuzPF4",
        // ...data.getHeaders(),
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        localStorage.removeItem("refresh");
        localStorage.removeItem("access");
        setIsLogin(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return <div onClick={handleLogout}>Logout</div>;
};

export default Logout;
