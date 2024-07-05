<<<<<<< HEAD
import React, { useState } from "react";
import "./contact.css";
import contactImg from "../../assests/images/contact1.jpg";
import { FaLinkedin } from "react-icons/fa";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import { toast } from "react-toastify";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !msg) {
      toast.error("Please Provide All Fields");
      return;
    }
    try {
      const res = await axios.post("/api/v1/portfolio/send-email", {
        name,
        email,
        msg,
      });
      // Validation Success
      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
      console.log(error);
    }
  };

  const openWhatsApp = () => {
    const message = `Hello, I'm interested in your services.`;
    const url = `https://wa.me/923043637810?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="ocontact"
                      className="image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With Us
                        <a
                          href="https://www.linkedin.com/in/abdul-rahman-216a802bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedin color="blue" size={25} className="ms-2" />
                        </a>
                        <a
                          href="https://github.com/abdulRahman3070"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BsGithub color="black" size={25} className="ms-2" />
                        </a>
                        <a
                          href="https://www.facebook.com/profile.php?id=100056956593019&mibextid=ZbWKwL"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BsFacebook color="blue" size={25} className="ms-2" />
                        </a>
                        <a
                          href="https://www.instagram.com/r_hafizabdul?igsh=MXU0YjlwYjlnNWc2ag=="
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BsInstagram
                            color="#D10686"
                            size={25}
                            className="ms-2"
                          />
                        </a>
                        <button
                          onClick={openWhatsApp}
                          style={{
                            cursor: "pointer",
                            background: "none",
                            border: "none",
                            padding: 0,
                          }}
                        >
                          <AiOutlineWhatsApp
                            color="green"
                            size={25}
                            className="ms-2"
                          />
                        </button>
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        className="mb-3"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Write your message"
                        className="mb-3"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button" onClick={handleSubmit}>
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
=======
>>>>>>> af53cc0779555fd6e43811ed8d6edc2949f04667
