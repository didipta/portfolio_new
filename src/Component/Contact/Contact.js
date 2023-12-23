import React from 'react';
import img from "../img/phone.png"
import img2 from "../img/fb.webp"
import img3 from "../img/ln.png"
import img4 from "../img/mail.png"
import img5 from "../img/contact.png"
import { ContactUs } from './ContactUs';

const Contact = () => {
    return (
        <div className="w-full mt-10 mb-10" data-aos="fade-up"
        data-aos-duration="3000" id="contact">
            <div className="flex justify-center items-center gap-3 mb-5">
            <img src={img5} alt="" className="w-10"></img>
            <h1 className=" text-2xl font-semibold text-slate-700">Contact me</h1>
            </div>
         <div className="lg:w-6/12 flex flex-col lg:flex-row gap-5 justify-center items-center m-auto">
            <div className="w-full">
            <ContactUs></ContactUs>
            </div>
            
            <div className="w-full flex flex-col gap-5 font-bold lg:p-0 p-5" >
                <div className="flex items-center gap-3">
                    <img src={img} alt="" className="w-7"></img>
                    <a href="tel:01881401919" target="_blank"><h5>01881401919</h5></a>,
                    <a href="tel:01919170323" target="_blank"><h5>01919170323</h5></a>
                </div>
                <div className="flex items-center gap-3">
                    <img src={img4} alt="" className="w-7"></img>
                    <a href="mailto:sdipta707@gmail.com" target="_blank"><h5> sdipta707@gmail.com</h5></a>
                </div>
                <div className="flex items-center gap-3">
                    <img src={img2} alt="" className="w-7"></img>
                    <a href="https://www.facebook.com/profile.php?id=100008229855643" target="_blank"><h5> Dipta saha</h5></a>
                </div>
                <div className="flex items-center gap-3">
                    <img src={img3} alt="" className="w-7"></img>
                    <a href="https://www.linkedin.com/in/dipta-saha-11a4b8194/" target="_blank"><h5>dipta saha</h5></a>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default Contact;