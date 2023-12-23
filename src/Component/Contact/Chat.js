import React from 'react';
import { ContactUs } from './ContactUs';

const Chat = () => {
    return (
        <div>

<input type="checkbox" id="Chat-model" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="Chat-model" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-xl font-extrabold">If there is any need then you can message</h3>
    <ContactUs></ContactUs>
  </div>
</div>
        </div>
    );
};

export default Chat;