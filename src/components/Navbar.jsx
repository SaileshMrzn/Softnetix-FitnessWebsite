import React from "react";

function Navbar() {
  return (
    // <div className="navbar bg-transparent fixed z-50 font-primary text-neutral-100 font-bold mt-5 border-2 w-[99%] px-[6rem]">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h16M4 18h7"
    //           />
    //         </svg>
    //       </div>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-transparent"
    //       >
    //         <li>
    //           <a>Homepage</a>
    //         </li>
    //         <li>
    //           <a>Portfolio</a>
    //         </li>
    //         <li>
    //           <a>About</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="navbar-center">
    //     <a className="text-2xl">sFitness</a>
    //   </div>
    // </div>

    <div className="w-[100%] h-20 z-50 fixed flex justify-between bg-transparent font-primary text-neutral-100 font-bold items-center text-2xl px-[6rem] mt-3 ">
      <div className="start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </div>
      <div className="center">sFitness</div>
      <div className="end"></div>
    </div>
  );
}

export default Navbar;
