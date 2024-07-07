import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/logo.svg'
import call_icon from '../../assets/call_icon.svg';
/* Add the Web3Form API */

const Contact = () => {
/* past the react form */
const onSubmit = async (event) => {
  event.preventDefault();

  
  const formData = new FormData(event.target);

  formData.append("access_key", "c69a1de1-89af-43f8-b674-bbc3928b43b1");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  }).then((res) => res.json());

  if (res.success) {
    alert(res.message);
  }
};

  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently avaliable to take on new projects.so feel free to send
            me a message about anything that you want me to work on.You can
            contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>satishgupta@07</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+72390-39391</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p> Noida sector-62</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <labe htmlFor="">Your Name </labe>
          <input type="text" placeholder="Enter your name" name="name" />
          <labe htmlFor="">Your Email </labe>
          <input type="email" placeholder="Enter your email" name="email" />
          <labe htmlFor="">Write your message here</labe>
          <textarea type="text" placeholder="Enter your message" row='8' name="message" />
          <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;