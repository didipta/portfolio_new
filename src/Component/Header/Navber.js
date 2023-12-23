import React, { useState } from 'react';
import img from "../img/logo.png"
import img1 from "../img/react.png"
import img2 from "../img/Aiub.png"
import img3 from "../img/resume.png"
const Navber = () => {
  const [fix,setFix]=useState(false);
  const setfixed=()=>{
    if(window.scrollY>2)
    {
        setFix(true);
    }
    else
    {
        setFix(false)
    }
 }
 window.addEventListener("scroll",setfixed);
    return (
        <div className={fix&&"fixed w-full top-0 z-[10] shadow-lg"}>
            <div className={`navbar ${!fix?"":" bg-slate-50"} font-semibold`}>
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li ><a href="#">Home</a></li>
                <li ><a href="#project" className="flex items-center gap-2"><img src={img2} alt="" className="w-6"></img>Project</a></li>
                <li ><a href="#Reactproject" className="flex items-center gap-2 "><img src={img1} alt="" className="w-6"></img>React Project</a></li>
                <li ><a href="#contact">Contact</a></li>
                <li ><a href="#about">About</a></li>
                <li ><a href="#skill">Skill</a></li>
      </ul>
    </div>
            <div><a href="#" className="flex items-center gap-2 pl-6">
            <img src={img} alt="" className="w-7 rounded-full"/>
            <h3 className="text-xl font-extrabold text-slate-700"><span className="text-pink-600">Port</span>folio</h3>
            </a></div>
            </div>
  <div className="navbar-center hidden lg:flex">
    <ul className={`menu menu-horizontal ${!fix?"text-white":"text-black"} px-1`}>
                <li ><a href="#">Home</a></li>
                <li ><a href="#project" className="flex items-center gap-2 "><img src={img2} alt="" className="w-6"></img>Project</a></li>
                <li ><a href="#Reactproject" className="flex items-center gap-2 "><img src={img1} alt="" className="w-6"></img>React Project</a></li>
                <li ><a href="#contact">Contact</a></li>
                <li ><a href="#about">About</a></li>
                <li ><a href="#skill">Skill</a></li>
    </ul>
  </div>
 {
  fix? <div className="navbar-end">
  <div className="flex items-center gap-4">
  <a href="https://drive.google.com/file/d/1t11C26OXEQuSzwZnzYDLvljZTjguDUup/view?usp=sharing" target="_blank"><button className='btn btn-sm bg-pink-500 border-none text-white flex items-center gap-2'><img src={img3} alt="" className='w-3'></img>Resume</button></a>
  </div>
    </div>:
    <></>
 }
</div>

        </div>
    );
};

export default Navber;