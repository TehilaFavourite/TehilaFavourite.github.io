import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_6eqda9a",
      "template_zswqs03",
      form.current,
      "vdsIYxCJWjirmv7ri"
    );

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>tehilafavourite@gmail.com</h5>
            <a href='mailto:tehilafavourite@gmail.com' target='_blank'>
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <FaTelegramPlane className='contact__option-icon' />
            <h4>Telegram</h4>
            <h5>Favour Ajaye</h5>
            <a href='https://t.me/deecentralized' target='_blank'>
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <AiOutlineLinkedin className='contact__option-icon' />
            <h4>Linkedin</h4>
            <h5>Favour Ajaye</h5>
            <a
              href='https://www.linkedin.com/in/ajaye-favour-blockchain-developer'
              target='_blank'
            >
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <BsTwitter className='contact__option-icon' />
            <h4>Twitter</h4>
            <h5>Favour Ajaye</h5>
            <a href='https://twitter.com/teheelaa' target='_blank'>
              Check me on twitter
            </a>
          </article>

          <article className='contact__option'>
            <BsGithub className='contact__option-icon' />
            <h4>Github</h4>
            <h5>Favour Ajaye</h5>
            <a href='https://github.com/TehilaFavourite' target='_blank'>
              Check my repositeries on Github
            </a>
          </article>

          <article className='contact__option'>
            <BsMedium className='contact__option-icon' />
            <h4>Blockchain Articles</h4>
            <h5>Favour Ajaye</h5>
            <a href='https://favoriteblockchain.medium.com/' target='_blank'>
              Read my Blockchain articles here
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your FullName' required />
          <input type='text' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            rows='7'
            placeholder='Your message'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
