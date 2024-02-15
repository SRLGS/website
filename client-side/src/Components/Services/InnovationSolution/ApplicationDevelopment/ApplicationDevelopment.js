import React from 'react'
import { Fade } from "react-awesome-reveal";
import "./ApplicationDevelopment.css"

export default function ApplicationDevelopment() {
  return (
    <div className="AnalyticsTotalContainer">
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-12">
          <div>
            <div className="AnalyticsImageContainer"></div>
  
            <div className="content-container">
              <Fade direction="up">
                <h6 className="pl-5 ml-5 mb-3" style={{ fontSize: "30px" }}>
                  Innovation Solutions
                </h6>
                <h1
                  className="pl-5 ml-5 mb-3"
                  style={{ fontSize: "65px", fontWeight: "bold" }}
                >
                  Advanced Analytics & <br /> Business Intelligence
                </h1>
                <p className="pl-5 ml-5 mb-3" style={{ fontSize: "25px" }}>
                  Actionable Insights, Transformative Results
                </p>
              </Fade>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <p style={{ fontSize: "18px" }} className="p-4 pl-3 mt-3">
            In today's data-driven world, businesses cannot afford to ignore the
            power of Advanced Analytics and Business Intelligence (BI). These
            tools can provide a competitive edge by unlocking valuable insights
            from data, improving decision-making, increasing operational
            efficiency, and identifying new growth opportunities. By leveraging
            both BI and Advanced Analytics, businesses can make data-driven
            decisions and stay ahead of the curve.
          </p>
        </div>
        <div className="col-12 col-md-6 p-5">
          <Fade direction="down">
            <div className="AnalyticsCardsContainer shadow">
              <h1
                className="p-3 text-center mb-0 AnalyticsHeading"
                style={{
                  marginBottom: "0px",
                  color: "#ffffff",
                  fontWeight: "bold",
                  background: "#4353ff",
                }}
              >
                Enquire Now
              </h1>
              <form className="p-3">
                <p className="mb-2 mt-2 text-center p-2">
                  Please fill in your information and we'll get in touch with
                  you.
                </p>
                <label htmlFor="firstName">
                  First Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  required
                  type="text"
                  id="firstName"
                  className="w-100 mt-3 p-2 mb-3"
                />
                <label htmlFor="lastName">
                  Last Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  required
                  type="text"
                  id="lastName"
                  className="w-100 mt-3 p-2 mb-3"
                />
                <label htmlFor="email">
                  Email<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  className="w-100 mt-3 p-2 mb-3"
                />
                <label htmlFor="phoneNumber">
                  Phone Number <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  required
                  type="tel"
                  id="phoneNumber"
                  className="w-100 mt-3 p-2 mb-3"
                />
                <label htmlFor="CompanyName">
                  Company Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  required
                  type="text"
                  id="CompanyName"
                  className="w-100 mt-3 p-2 mb-3"
                />
                <label htmlFor="jobTitle">
                  Job Title <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  required
                  type="text"
                  id="jobTitle"
                  className="w-100 mt-3 p-2 mb-3"
                />
                <label htmlFor="countryRegion">
                  Country/Region <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  required
                  type="text"
                  id="countryRegion"
                  className="w-100 mt-3 p-2 mb-3"
                />
                <label htmlFor="message">
                  Message <span style={{ color: "red" }}>*</span>
                </label>
                <textarea
                  required
                  rows="5"
                  cols="85"
                  id="message"
                  className="w-100 mb-3"
                ></textarea>
                <button
                  type="submit"
                  className="p-3"
                  style={{
                    height: "45px",
                    width: "100px",
                    border: "none",
                    background: "#0f4494",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#ffffff",
                    borderRadius: "8px",
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  </div>
  
  )
}
