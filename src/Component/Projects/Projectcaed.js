import React from 'react';
import img from "../img/github.png"
const Projectcaed = ({project}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl rounded-lg w-full max-w-2xl min-w-full">
                {
                    project?.photosrc&&<figure><img src={project.photosrc} alt="" className='w-full h-60' /></figure>
                }
                {
                    project?.videosrc&&<figure><iframe src={project.videosrc} className='w-full h-60' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></figure>
                }
            <div className="card-body">
            <div className="badge bg-pink-500 border-none text-white">{project.name}</div>
                <h2 className="card-title">
                {project.title.length>=20?project.title.slice(0,20)+"...":project.title}
                </h2>
                <p>{project.detaile.length>=50?project.detaile.slice(0,50)+`...`:project.detaile} {project.detaile.length!==50&&<label htmlFor={`model-${project.id}`} className="text-sm text-blue-500 cursor-pointer font-semibold">See more</label>}</p>
                <div className="card-actions justify-end">
                {
                    project.link.map(link=>
                        <a href={link.url} target="_blank"><div className="tooltip p-2" data-tip={link.name} ><div className="flex gap-1 justify-center items-center"><img src={img} alt="" className="w-5"></img> <spam className="text-sm font-semibold">Link</spam></div></div> </a>
                        )
                }
                </div>
            </div>
            </div>



            <div>
            <input type="checkbox" id={`model-${project.id}`} className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative w-11/12 max-w-5xl">
                <label htmlFor={`model-${project.id}`} className="btn btn-sm btn-circle absolute right-2 top-2 z-50">✕</label>
                <div className="card w-full max-w-2xl min-w-full">
                {
                    project?.photosrc&&<figure><img src={project.photosrc} alt="" className='w-full h-80' /></figure>
                }
                {
                    project?.videosrc&&<figure><iframe src={project.videosrc} className='w-full h-80' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></figure>
                }
            <div className="card-body">
            <div className="badge bg-pink-500 border-none text-white">{project.name}</div>
                <h2 className="card-title">
                {project.title}
                </h2>
                <p className="text-justify">{project.detaile}</p>
                <div className="card-actions justify-end">
                {
                    project.link.map(link=>
                        <a href={link.url} target="_blank"><div className="tooltip p-2" data-tip={link.name} ><div className="flex gap-1 justify-center items-center"><img src={img} alt="" className="w-5"></img> <spam className="text-sm font-semibold">Link</spam></div></div> </a>
                        )
                }
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Projectcaed;