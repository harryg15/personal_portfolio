import React, { useState } from 'react';

import { images } from '../../constants';  
import { AppWrap, MotionWrap } from '../../wrapper';  //../../ references the folder
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {  //for 'send message' button below
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {  //sanity specific object
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Feel Free To Get In Touch!</h2>   

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />  
          <a href="mailto:hello@micael.com" className="p-text">harry.grant99@gmail.com</a> 
        </div> 
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />  
          <a href="tel:+1 (123) 456-7890" className="p-text">+44 7932 010531</a>
        </div>
      </div>
      {!isFormSubmitted ? ( //below are the input forms for name and email. If form isnt submitted, show below
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea  // the message area input
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>  
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : ( //if it IS submitted, show the below
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);