"use client";

import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  function client() {
    router.push("/client-side-fetching");
  }

  function Server() {
    router.push("/server-side-fetching");
  }
  return (
    <>
      <div className="h-[60px] w-full flex justify-center items-center tracking-[2px] font-mono font-extrabold text-[18px] sm:text-[35px] bg-[#bde0fe]">
        <h1 className="text-[#010101] ">DATA FETCHING ASSIGNMENT</h1>
      </div>

      <div className="w-full h-screen font-sans flex justify-center items-center">
        <div
          id="shadow"
          className="rounded-[10px] cursor-pointer hover:scale-110 ease-in-out transition-all duration-300  bg-[#bde0fe] flex items-center flex-col px-2 h-auto max:w-[350px] w-[400px] sm:w-[500px]  py-10"
        >
          <h1>Dabao Button..!</h1>
          <p className="pt-1 text-center">
            {" "}
            click the button to perform your desire operation
          </p>
          <div className="w-full flex max:flex-col max:items-center flex-row items-center justify-between px-1 sm:px-10 pt-8">
            <button
              onClick={client}
              className="w-[180px] h-[50px] rounded-[10px] text-[14px] sm:text-[16px] p-2 bg-[#302f2f] text-white"
            >
              Fetch Client Side Data
            </button>
            <button
              onClick={Server}
              className="max:mt-3 w-[180px] h-[50px] text-[14px] sm:text-[16px] rounded-[10px] p-2 bg-[#302f2f] text-white"
            >
              Fetch Server Side Data
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
