import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitRequest = async (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    const response = await fetch("/send", { 
      method: 'POST', 
      headers: { 
          'Content-type': 'application/json'
      }, 
      body: JSON.stringify({name, email, message}) 
  }); 
    const resData = await response.json(); 
    if (resData.status === 'success'){
      alert("Message Sent."); 
      resetForm()
  }else if(resData.status === 'fail'){
      alert("Message failed to send.")
  }
  };

  function resetForm() {
      setName('');
      setEmail('');
      setMessage('');
  }

  return (
    <div>
      <div className="form-wrapper flex">
        <form
          className="form"
          onSubmit={submitRequest}
          method="POST"
        >
          <h2 className="form-h2">
            Contact
          </h2>
          <input
            className="name-input"
            placeholder="Name"
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
           />
          <div className="mb-4">
            <input
              className="email-input"
              type="text"
              name="email"
              placeholder="Email Address"
              onChange={e => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              className="message-input"
              name="message"
              type="text"
              placeholder="Your Message"
              onChange={e => setMessage(e.target.value)}
              value={message}
              required
            />
          </div>
          <div className="flex">
            <button
              className="nav__link"
              type="submit"
            >
              Send A Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
