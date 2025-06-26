"use client";

import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

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

  console.log(formData);

  return (
    <div className={`modal ${isModalOpen ? "show-modal" : ""}`}>
      <div className="modalInner">
        <div className="headerLogo">
          <a href="">
            <img src="/images/headerlogo.svg" className="desktopImg" />
          </a>
        </div>
        <span
          className="close-button"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          <img src="/images/popup-close-icon.svg" className="mobileImg" />
        </span>
        <span
          className="close-buttonTwo"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          <img src="/images/backarrow-modal.svg" />
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
                <p>
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
