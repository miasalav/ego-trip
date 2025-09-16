import React from 'react'
import { useState } from 'react';
import emailjs from "emailjs-com";

const TextForm = () => {
    const [message, setMessage] = useState("");
    const [messageSent, setMessageSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
        .send(
            "service_ta20ypr",
            "template_l3sax0p",
            { message },
            "HFQFzMdXuc-F0Cd2z",
        )
        .then(
            () => setMessageSent(true),
            (err) => alert("Error sending message: " + err.text)
        );
      };
  return (
    <>
    {messageSent ? (
        <div className='w-full h-full flex items-center justify-center'>
        <p className='text-gray-900 text-center pb-20 text-2xl'>Message Received!</p>
        </div>
    ) : (
        <form onSubmit={handleSubmit} className="form-content max-w-[350px]">
            <h3 className="text-gray-900 text-3xl text-center mb-4">MESSAGE IN A BOTTLE</h3>
            <textarea placeholder="write us some thoughts hoe" value={message} onChange={(e) => setMessage(e.target.value)} className="bg-[#dfddcf] w-full h-[200px] border border-[#bcbaac] text-gray-900 p-4"></textarea>
            <button type="submit" className="text-white font-bold text-lg w-full py-2 bg-[#bcbaac] hover:bg-[#929185] transition duration-200">send message</button>
        </form>
    )
    }
    </>
  )
}

export default TextForm
