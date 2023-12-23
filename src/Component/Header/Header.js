import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import hero from "../img/hero4.png"
import img1 from "../img/github.png"
import img2 from "../img/resume.png"
import img6 from "../img/message-icon-png-17.png"
import img7 from "../img/5302_-_Whatsapp-512.webp"
import img8 from "../img/Apple_Mail-512.webp"
import Navber from './Navber';
import Chat from '../Contact/Chat';
import "./Styles.css"
const Header = () => {
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["Student.","Web Designer.","React Developer.","Full-Stack Developer.","Front-end Developer."],
        startDelay: 300,
        typeSpeed: 200,
        backSpeed: 200,
        backDelay: 200,
        loop:true
      });
  
      // Destropying
      return () => {
        typed.destroy();
      };
    }, []);
    return (
        <div className="w-full h-screen overflow-hidden bg-img-set">
            <div>
                <Navber></Navber>
            </div>
            <div className=" h-screen flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-10 pt-10 ">
            <div  className="flex flex-col gap-4 p-5 lg:p-10 max-w-md lg:max-w-xl lg:ml-20">
                    <p className="text-xl text-slate-700 font-semibold lett">Hello, my name is</p>
                    <h1 className="text-3xl text-white font-bold">Dipta Saha</h1>
                    <h5 className="text-lg text-slate-800 font-semibold">And I'm a <span ref={el} className=" text-orange-300 font-extrabold"></span> </h5>
                    <p className="font-medium text-slate-900">Seeking a challenging career in the Software designing and software development field in the local 
                        and global market applying my academic coursework and programming skills.</p>
                    <div className="flex items-center gap-4">
                    <a href="https://github.com/didipta" target="_blank"><button className='btn btn-sm bg-black text-white flex items-center gap-2'><img src={img1} alt="" className='w-5'></img> Git Account</button></a>
                    <a href="https://drive.google.com/file/d/1t11C26OXEQuSzwZnzYDLvljZTjguDUup/view?usp=sharing" target="_blank"><button className='btn btn-sm bg-pink-500 border-none text-white flex items-center gap-2'><img src={img2} alt="" className='w-3'></img>Resume</button></a>
                    </div>
                    
                </div>
                <div className="w-full overflow-hidden  grid place-items-center ">
                  <img src={hero} alt="" className="img-bg-bc shadow-sm"></img>
                </div>
            </div>
            <div className="fixed bottom-3 right-2 z-20">
            <div className=" bg-white w-14 h-14 rounded-full flex justify-center items-center shadow-xl shadow-slate-400 cursor-pointer mb-5">
            <a href="mailto:sdipta707@gmail.com" target="_blank"><img src={img8} alt="" className=" w-8 h-8"></img></a>
            </div>
            <label htmlFor="Chat-model"><div className=" bg-blue-500 w-14 h-14 rounded-full flex justify-center items-center shadow-xl shadow-slate-400 cursor-pointer mb-5">
            <img src={img6} alt="" className=" w-10 h-10"></img>
            </div>
            </label>
            <div className=" bg-green-500 w-14 h-14 rounded-full flex justify-center items-center shadow-xl shadow-slate-400 cursor-pointer mb-5">
            <a href="tel:01919170323" target="_blank"><img src={img7} alt="" className=" w-10 h-10"></img></a>
            </div>
            
            </div>
            <Chat></Chat>
        </div>
    );
};

export default Header;