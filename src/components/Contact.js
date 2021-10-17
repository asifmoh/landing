import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import bounce from "../script/bounce";

export default function Contact() {

  

  const [thank, setThank] = useState(false);

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.title = "Mothercode | Contact Me";
   
    setTimeout(() => setThank(false), 5000);
    bounce();
  });

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 40,
  };

  return (
    <>
      {thank &&
        <div style={{ position: "absolute", zIndex: 999999, top: "10px", left: "50%", transform: "translate(-50%, 0%)" }}>
          <div style={{
            padding: "2rem 4rem", backgroundColor: "#222", 
            textAlign: "center", borderRadius: "1rem",
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
          }}>
            <h3 style={{ color: "#23ffde", fontSize: "2rem" }}>
              Thank you !
            </h3>
            <p style={{ color: "#fff", fontSize: "1rem" }}>We will soon get in touch</p>
          </div>
        </div>
      }
      <div className="container home-page" style={{ zoom: "95%" }}>
        <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
        <div className="text-zone">
          <h1
            aria-label=" Mothercode Contact."
            className="blast-root"
          >
            <span className="blast" style={{ color: "#23ffde" }}>
              C
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              o
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              n
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              t
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              a
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              c
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              t&nbsp;
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              U
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              S
            </span>
          </h1>
          <p>
          Master the art of coding! Learn how to code in many languages for interactive websites and apps. Send us an Email for more information. 
          </p>

          <div className="contact">
            <form
              className="form"
              action="https://formsubmit.co/b6a7714e1b4daa06870a4ac3e0718e01"
              method="POST"
              autoComplete="off"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://asifmoh.github.io/contact?response=true" />
              <input type="text" name="_honey" style={{ "display": "none" }} />
              <motion.input
                id="name"
                type="text"
                name="name"
                placeholder="Name *"
                required={true}
                initial={{ y: "120vh" }}
                animate={{ y: 0 }}
                layout
                transition={{ ...spring, delay: 0.1 }}
              />
              &nbsp;
              <motion.input
                id="email"
                type="email"
                name="email"
                placeholder="Email *"
                required={true}
                initial={{ y: "120vh" }}
                animate={{ y: 0 }}
                layout
                transition={{ ...spring, delay: 0.2 }}
              />
              <br />
              <motion.input
                id="sbj"
                type="text"
                name="subject"
                placeholder="Subject (optional)"
                initial={{ y: "120vh" }}
                animate={{ y: 0 }}
                layout
                transition={{ ...spring, delay: 0.4 }}
              />
              <br />
              <motion.textarea
                id="msg"
                type="text"
                name="message"
                placeholder="Message *"
                required={true}
                cols="50"
                rows="10"
                initial={{ y: "120vh" }}
                animate={{ y: 0 }}
                layout
                transition={{ ...spring, delay: 0.7 }}
              ></motion.textarea>
              <br />
              <motion.input
                id="sub-btn"
                type="submit"
                value="Send"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              />
            </form>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              style={{
                color: "aliceblue",
                maxWidth: "60%",
                fontSize: "1em",
                margin: "5px 0 5px 2px",
                transform: "translateY(-40px)",
              }}
            >
              Or you can just mail us at ~&nbsp;
              <a
                href="mailto:mohiuddin.asif@gmail.com"
                style={{ color: "#23ffde", fontSize: "1.3em" }}
              >
                mohiuddin.asif@gmail.com
              </a>
            </motion.p>
          </div>
        </div>

        <span className="tags bottom-tags">
          &nbsp;&nbsp;&nbsp;&lt;/body&gt;
          <br />
          &lt;/html&gt;
        </span>
      </div>

    
        <div id="contactsvg">
        <img
          alt="hacker"
          src={`https://raw.githubusercontent.com/asifmoh/asifmoh/main/assets/contact.svg`}
        />
     
      </div>
      
    </>
  );
}
