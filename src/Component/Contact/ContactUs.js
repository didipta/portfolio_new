import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';

export const ContactUs = () => {
  const servicid=process.env.REACT_APP_Service_id;
  const Templateid=process.env.REACT_APP_Template_id;
  const Userid=process.env.REACT_APP_User_id;
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(servicid,Templateid, form.current,Userid)
      .then((result) => {
        toast.success("Email send successfully")
        e.target.reset();
      }, (error) => {
        toast.success("Something wrong ")
      });

  };

  return (
    <div className="w-full p-2">
       <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3 text-sm font-bold max-w-sm m-auto">
      <label>Name</label>
      <input type="text" name="to_name" className="input input-bordered input-warning w-full max-w-sm placeholder:text-sm" placeholder="Enter your name" required/>
      <label>Email</label>
      <input type="email" name="from_name" className="input input-bordered input-warning w-full max-w-sm placeholder:text-sm" placeholder="Enter your Email" required/>
      <label>Phone Number</label>
      <input type="text" name="from_phone" className="input input-bordered input-warning w-full max-w-sm placeholder:text-sm" placeholder="Enter your Phone number" required/>
      <label>Message</label>
      <textarea name="message" className="input input-bordered input-warning w-full max-w-sm h-20 placeholder:text-sm" placeholder="message...." required/>
      <input type="submit" value="Send" className="btn w-full max-w-sm"/>
    </form>
    <Toaster
            className="z-50"
        position="bottom-right"
        reverseOrder={false}
        />
    </div>
    
  );
};