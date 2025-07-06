"use client";

import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import Image from "next/image";

const PrivatePreviewModal = ({ isModalOpen, setIsModalOpen }: any) => {
  const [formData, setFormData] = useState({
    visitorName: "",
    visitorEmail: "",
    visitorPhone: "",
  });

  const formHandler = (e: any) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = async (e: any) => {
    e.preventDefault();

    const data = new FormData();
    data.append("visitor_name", formData.visitorName);
    data.append("visitor_email", formData.visitorEmail);
    data.append("phoneid", formData.visitorPhone);

    await fetch(
      "https://ixdtm.com/projects/kalpataru-signature-wp/wp-json/contact-form-7/v1/contact-forms/840/feedback",
      {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Form Submitted", data);
      })
      .catch((error) => {
        console.error("Form Submission Error", error);
      });
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
    document.body.classList.remove("hideScrollbar");
    document.documentElement.classList.remove("hideScrollbarhtml");
  };

  return (
    <div className={`modal ${isModalOpen ? "show-modal" : ""}`}>
      <div className="modalInner">
        <div className="headerLogo">
          <a href="">
            <Image src="/images/headerlogo.svg" className="desktopImg" alt="" />
          </a>
        </div>
        <span className="close-button" onClick={closeModalHandler}>
          <Image src="/images/popup-close-icon.svg" className="mobileImg" alt="" />
        </span>
        <span className="close-buttonTwo" onClick={closeModalHandler}>
          <Image src="/images/backarrow-modal.svg" alt="" />
        </span>
        <div className="modal-content">
          <div className="meetingModal">
            <h2>Request a Private Preview</h2>
            <div className="innerForm">
              <form action="contact.php" method="post">
                <input
                  type="text"
                  id="name"
                  name="visitorName"
                  value={formData.visitorName}
                  placeholder="Name"
                  onChange={formHandler}
                  required
                />
                <input
                  type="email"
                  id="email"
                  name="visitorEmail"
                  value={formData.visitorEmail}
                  placeholder="Email ID"
                  onChange={formHandler}
                  required
                />
                <PhoneInput
                  country="in"
                  value={formData.visitorPhone}
                  onChange={(value, data, event, formattedValue) => {
                    setFormData({
                      ...formData,
                      visitorPhone: formattedValue,
                    });
                  }}
                  inputProps={{
                    name: "visitorPhone",
                    required: true,
                    placeholder: "Phone number",
                  }}
                />

                {/* <div className="inputNumber">
                  <select id="country" name="country">
                    <option value={+91}>+91</option>
                    <option value={+44}>+44</option>
                    <option value={+51}>+51</option>
                  </select>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone number"
                  />
                </div> */}
                <p onClick={formSubmitHandler}>
                  <input
                    className="wpcf7-form-control wpcf7-submit has-spinner"
                    type="submit"
                    value="I'm Interested"
                  />
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivatePreviewModal;
