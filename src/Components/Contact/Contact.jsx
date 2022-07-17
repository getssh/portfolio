import "./Contact.css";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Contact = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();

    const [emailDone, setEmailDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_n1iscgu', 'template_wnmdgeh', form.current, 'VpghDEMdDrY4QsCNn')
        .then((result) => {
            console.log(result.text);
            setEmailDone(preValue => !preValue)
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className="contact-form" id='Contact'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode ? '#fff' : ''}}>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}>

                </div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className="user"  placeholder="Name"/>
                <input type="email" name="user_email" className="user" placeholder="Email"/>
                <textarea name="message" className="user" placeholder="Message"/>
                <input type="submit" value="Send" className="button"/>
                <span>{emailDone && "Message sent! Thank you for contacting me."}</span>
                <div
                    className="blur c-blur1"
                    style={{ background: "var(--purple)" }}
                ></div>
            </form>
        </div>
    </div>
  )
}

export default Contact