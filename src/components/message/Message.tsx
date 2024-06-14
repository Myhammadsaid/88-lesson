import React, { ChangeEvent, FormEvent, useState } from "react";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";
import { motion } from "framer-motion";
import "./Message.css";

interface FormData {
  username: string;
  email: string;
  message: string;
}

let initialState: FormData = {
  username: "",
  email: "",
  message: "",
};

const Message: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className="message"
      >
        <div className="container">
          <div className="message__style">
            <div className="message__content">
              <div>
                <h1 className="message__text">Contact us</h1>
                <p className="message__par">
                  Send for us your request and we will get in touch with you as
                  soon as possible
                </p>
              </div>
              <div className="message__box">
                <div className="message__phone">
                  <img src={phone} alt="phone" />
                  <span>+380 98 782 82 23</span>
                </div>
                <div className="message__email">
                  <img src={email} alt="email" />
                  <span>mailmail@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="message__content">
              <form onSubmit={handleSubmit}>
                <div className="message__inputs">
                  <span>Name</span>
                  <input
                    onChange={handleChange}
                    required
                    type="text"
                    name="username"
                    placeholder="Your name"
                  />
                </div>
                <div className="message__inputs">
                  <span>E-mail</span>
                  <input
                    required
                    onChange={handleChange}
                    type="text"
                    name="email"
                    placeholder="Your email"
                  />
                </div>
                <div className="message__inputs">
                  <span>Message</span>
                  <textarea
                    onChange={handleChange}
                    required
                    placeholder="Your message"
                    name="message"
                  ></textarea>
                </div>
                <div className="message__btns">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="message__btn"
                  >
                    Send request
                  </motion.button>
                  <span>By sending request you agree to out Pivacy&Policy</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Message;
