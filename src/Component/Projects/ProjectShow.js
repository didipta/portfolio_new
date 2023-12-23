import React, { useState } from 'react';
import { Projecthook } from '../Hook/Projecthook';
import Loading from '../Loading';
import Projectcaed from './Projectcaed';
import aiubimg from "../img/Aiub.png"
const ProjectShow = () => {
   const [projects,isLoading]=Projecthook();
   const [types,setTypes]=useState("");
 
   const onhandel=(type)=>{
    setTypes(type);
   }
    return (
        <div className="w-full mt-10 mb-5" id="project">
            <div className="flex justify-center items-center gap-3 mb-2">
            <img src={aiubimg} alt="" className="w-10"></img>
            <h1 className=" text-2xl font-semibold text-slate-700">My University Project</h1>
            </div>
            <div>
             <div className="list-none flex flex-wrap justify-center items-center gap-7 p-5 text-md font-bold">
                <li className={`cursor-pointer ${types==="" && "text-pink-600"}`} onClick={()=>onhandel("")}>All</li>
                <li className={`cursor-pointer ${types==="Website" && "text-pink-600"}`} onClick={()=>onhandel("Website")}>Web APP</li>
                <li className={`cursor-pointer ${types==="Desktop app" && "text-pink-600"}`} onClick={()=>onhandel("Desktop app")}>Desktop APP</li>
                <li className={`cursor-pointer ${types==="Console app" && "text-pink-600"}`} onClick={()=>onhandel("Console app")}>Console APP</li>
                <li className={`cursor-pointer ${types==="Graphics" && "text-pink-600"}`} onClick={()=>onhandel("Graphics")}>Graphics</li>
             </div>
            </div>
            <div className="p-10 bg-img-set">
                {
                    isLoading&&<Loading></Loading>
                }
                
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10 w-full  lg:w-10/12 m-auto" data-aos="fade-up"
     data-aos-duration="3000">
                {
                    
                    projects.map(project=>
                        types!==""?
                        project.type===types &&
                        <Projectcaed project={project}></Projectcaed>:
                        <Projectcaed project={project}></Projectcaed>
                        )
                }
                
            </div>
            </div>
           
        </div>
    );
};

export default ProjectShow;