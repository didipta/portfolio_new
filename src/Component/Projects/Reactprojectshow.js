import React from 'react';
import { ReactProjecthook } from '../Hook/Reactprojecthook';
import Reactproject from './Reactproject';
import reactimg from "../img/react.png"
const Reactprojectshow = () => {
    const [reactprojects,isLoading]=ReactProjecthook();
    return (
        <div className="w-full mt-10 mb-5" id="Reactproject">
            <div className="flex justify-center items-center gap-3 mb-5">
            <img src={reactimg} alt="" className="w-10"></img>
            <h1 className=" text-2xl font-semibold text-slate-700">React & Node js Project</h1>
            </div>
            
            <div className="p-10 bg-img-set">
            <div className="grid grid-cols-1 justify-center items-center gap-10 lg:grid-cols-3 md:grid-cols-2 lg:w-9/12 m-auto" data-aos="fade-up"
     data-aos-duration="3000">
            {
                reactprojects.map(item=>
                    <Reactproject item={item}></Reactproject>
                    )
            }
            </div>
            </div>
           
           
        </div>
    );
};

export default Reactprojectshow;