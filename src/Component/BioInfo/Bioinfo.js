import React from 'react';
import img from "../img/dipta.JPG"
const Bioinfo = () => {
    return (
        <div className="p-10 bg-img-set" id="about">
            <div className="card lg:card-side bg-base-100 shadow-xl w-full lg:w-7/12 m-auto mt-10" data-aos="fade-up"
     data-aos-duration="3000">
            <figure><img src={img} alt="Album" className="w-full max-w-xs"/></figure>
            <div className="card-body w-full">
                <h2 className="card-title">My Short Info!</h2>
                <p>Hi,My name is dipta saha.My mobile number:01919170323. <br/>Email: sdipta707@gmail.com.<br/>
                I have recently graduated with a degree in Computer science Engineering from American International University Bangladesh (AIUB).
                I am expert HTML, CSS, Bootstrap, tailwind CSS, JavaScript, ReactJS, daisy UI, Node JS, Firebase, MongoDB. Besides, I also have functional knowledge which is C, C++, C#, Java, PHP, Laravel, ASP.Net, Spring, MYSQL.</p>
            </div>
            </div>
        </div>
    );
};

export default Bioinfo;