import React from "react";
import Footer from "../../Footer/Footer";

const UbahPassword = () => {
  return (
    <div className="w-full h-full ">
      <div className="flex justify-center mt-[5%] relative">
        <div className="w-[60%] bg-white p-5 pt-5 pb-5 ">
          <h1 className="font-bold text-2xl  ">Ubah Password</h1>
          <div className="mt-5">
            <h1>Password Lama</h1>
            <input
              type="text"
              placeholder="Masukkan Password Lama "
              className="border border-[#E9ECEF] w-[100%] p-2"
            />
          </div>
          <div className="mt-5">
            <h1>Password Baru</h1>
            <input
              type="text"
              placeholder="Masukkan Password Baru "
              className="border border-[#E9ECEF] w-[100%] p-2"
            />
          </div>
          <div className="mt-5">
            <h1>Konfirmasi Password Baru</h1>
            <input
              type="text"
              placeholder="Masukkan Konfirmasi Password Baru "
              className="border border-[#E9ECEF] w-[100%] p-2"
            />
          </div>
          <div className="flex mt-5  ">
            <button className="bg-[#F7911A] p-2 rounded-2xl  text-white hover:text-[#F7911A] hover:bg-white font-bold ">
              Batal
            </button>
            <button className="bg-[#F7911A] p-2 rounded-2xl  text-white hover:text-[#F7911A] hover:bg-white  ml-2 font-bold">
              Simpan
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default UbahPassword;
