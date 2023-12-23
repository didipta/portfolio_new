import React from 'react';
import { buildStyles, CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from 'd3-ease';
import img from "../img/laravel.png"
import img2 from "../img/dotnet.webp"
import img3 from "../img/next-js.svg"
import img4 from "../img/spring.png"
import img5 from "../img/nodejs.png"
import iimg from "../img/html.webp"
import iimg2 from "../img/css.webp"
import iimg3 from "../img/C-sharp.png"
import iimg4 from "../img/javascript.png"
import iimg5 from "../img/java.png"
import iimg6 from "../img/database.png"
import iimg7 from "../img/php.png"
import skill from "../img/skill.png"
import program from "../img/programs.png"
const Skill = () => {
    const  programskill=[
        {
            id:1,
            img:iimg,
            name:"Html",
            progress:90
        }
        ,
        {
            id:2,
            img:iimg2,
            name:"Css",
            progress:80
        }
        ,
        {
            id:3,
            img:iimg3,
            name:"C#",
            progress:70
        }
        ,
        {
            id:4,
            img:iimg4,
            name:"JS",
            progress:80
        }
        ,
        {
            id:5,
            img:iimg5,
            name:"Java",
            progress:40
        }
        ,
        {
            id:6,
            img:iimg6,
            name:"DB",
            progress:50
        }
        ,
        {
            id:7,
            img:iimg7,
            name:"PHP",
            progress:50
        }
    ]
    const framworkskill=[
        {
            id:1,
            img:img,
            name:"Laravel",
            progress:50
        }
        ,
        {
            id:2,
            img:img2,
            name:"Asp.net",
            progress:40
        }
        ,
        {
            id:3,
            img:img3,
            name:"Next js",
            progress:80
        }
        ,
        {
            id:4,
            img:img5,
            name:"Node js",
            progress:70
        }
        ,
        {
            id:5,
            img:img4,
            name:"Spring",
            progress:40
        }
    ]
    return (
        <div className="flex flex-col gap-5 mb-5" data-aos="fade-up"
        data-aos-duration="3000" id="skill">
            <div>
            <div className="flex justify-center items-center gap-3 mb-5">
            <img src={program} alt="" className="w-10"></img>
            <h1 className=" text-2xl font-semibold text-slate-700">Programming Skill</h1>
            </div>
             <div className="flex flex-wrap justify-center items-center gap-5 bg-slate-100 p-10">
            {
                programskill.map(item=>
                    <div className=" w-28">
            <CircularProgressbarWithChildren styles={buildStyles({
          pathColor: "#EBE645",
          trailColor: "#D6E4E5"})} value={item.progress}>
  
            <img style={{ width: 20, marginTop: -5 }} src={item.img} alt="doge" />
            <div className="flex flex-col justify-center items-center text-sm gap-1 mt-1">
            <strong>{item.name}</strong>
            <strong>{item.progress}%</strong>
            </div>
            </CircularProgressbarWithChildren>
        </div>
                    )
            }
        </div>
            </div>
            <div>
            <div className="flex justify-center items-center gap-3 mb-5">
            <img src={skill} alt="" className="w-10"></img>
            <h1 className=" text-2xl font-semibold text-slate-700">Framework Skill</h1>
            </div>
             <div className="flex flex-wrap justify-center items-center gap-5 bg-slate-100 p-10">
            {
                framworkskill.map(item=>
                    <div className=" w-28">
            <CircularProgressbarWithChildren styles={buildStyles({
          pathColor: "#FF597B",
          trailColor: "#C0DEFF"})} value={item.progress}>
  
            <img style={{ width: 20, marginTop: -5 }} src={item.img} alt="doge" />
            <div className="flex flex-col justify-center items-center text-sm gap-1 mt-1">
            <strong>{item.name}</strong>
            <strong>{item.progress}%</strong>
            </div>
            </CircularProgressbarWithChildren>
        </div>
                    )
            }
        </div>
            </div>
            
             
        </div>
       
        
    );
};

export default Skill;