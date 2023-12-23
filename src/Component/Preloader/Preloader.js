import React, { useEffect, useState } from 'react';
import img from "../img/preloader.gif"
const Preloader = () => {
    const [isLoading,setisloading]=useState(true);
    useEffect(()=>
    {
        setTimeout(()=>
        {
            setisloading(false)
        },3000)
    }
    )
    return (
        <>
        {
            isLoading&&<div className="absolute top-0 h-screen w-full bg-white z-50 flex flex-col justify-center items-center">
            <img src={img} alt="" className="w-96"></img>
        </div>
        }
        </>
        
        
    );
};

export default Preloader;