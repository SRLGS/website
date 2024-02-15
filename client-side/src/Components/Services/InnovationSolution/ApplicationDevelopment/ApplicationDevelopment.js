import React from "react";
import { Fade } from "react-awesome-reveal";
import "./ApplicationDevelopment.css";

const cards = [
  {
    id: 1,
    imageUrl:
      "https://27058982.fs1.hubspotusercontent-eu1.net/hubfs/27058982/ACP%20-%20Innovation%20Solutions%20-Application%20Development-01.jpg",
    title: "Enterprise Applications",
    description:
      "Abacus offers unmatched expertise in building enterprise-level applications that provide high availability and superior performance. Our end-to-end services are tailored to meet the unique needs of each client, whether they need to improve their existing applications or develop new ones from scratch. With years of experience in building complex enterprise applications, our team provides full lifecycle support to help businesses improve visibility, flexibility, and reliability in managing real-time information. Our Enterprise Application Services are designed to help clients stay ahead of the competition and achieve their business goals with confidence.",
  },
  {
    id: 2,
    imageUrl:
      "https://27058982.fs1.hubspotusercontent-eu1.net/hubfs/27058982/ACP%20-%20Innovation%20Solutions%20-Application%20Development-02.jpg",
    title: "Cloud Native Application Development Services",
    description:
      "Abacus' Cloud Native Application Development Services provide businesses with the capability, scalability, and speed needed to drive agility and digitization through feature-rich applications. Our lean startup services jumpstart cloud-native application development, while our full-scale development offerings integrate trained engineering, unique tools, accelerators, and best practices to address your business and technology challenges. We offer flexible options for quick wins, proofs-of-concept, and end-to-end application lifecycle services that transform your development practices to efficient and agile cloud-based solutions.",
  },
  {
    id: 3,
    imageUrl:
      "https://27058982.fs1.hubspotusercontent-eu1.net/hubfs/27058982/ACP%20-%20Innovation%20Solutions%20-Application%20Development-03.jpg",
    title: "Product & MVP Development",
    description:
      "In today's fast-paced tech industry, companies need quick, low-risk solutions that address their customers' needs at scale. Abacus leverages Agile, DevOps, and MVP development methodologies to help businesses create software prototypes, minimum viable products, and proof of concepts. This approach helps avoid common pitfalls and determines whether a product is fit for the desired market. For startups, MVP development with software or mobile app prototyping can help them bootstrap or secure funding by demonstrating traction to potential investors. Even established companies benefit from MVP development as it provides strategic agility and the ability to adapt to a rapidly evolving market.",
  },
  {
    id: 4,
    imageUrl:
      "https://27058982.fs1.hubspotusercontent-eu1.net/hubfs/27058982/ACP%20-%20Innovation%20Solutions%20-Application%20Development-04.jpg",
    title: "UI & UX Services",
    description:
      "Abacus is dedicated to creating stunning digital products that drive growth for the world's top brands and startups. Today's digital disruptors are not only changing the game with their technology and ideas but also through exceptional user experience design that reduces friction, addresses user frustration, and creates delightful digital experiences. Research and experience both show that investing in user experience design from the outset of a project and continuing post-launch leads to higher customer satisfaction, which ultimately translates into reduced costs, repeat customers, and loyal advocates, without having to spend heavily on advertising.",
  },
];

export default function ApplicationDevelopment() {
  return (
    <div className="ApplicationDevelopmentTotalContainer">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12">
            <div>
              <div className="ApplicationDevelopmentImageContainer mr-0 w-100"></div>

              <div className="ApplicationDevelopmentcontent-container">
                <Fade direction="up">
                  <h6 className="p-2  mb-3 ApplicationDevelopmentSubHeadings">
                    Innovation Solutions
                  </h6>
                  <h1 className="p-2 mb-3 ApplicationDevelopmentHeading">
                    Create, Customise <br /> And Manage Apps - <br /> Begin Now!
                  </h1>
                  <p className="p-2 mb-3 ApplicationDevelopmentParagraph">
                    Transforming Businesses with Customized Apps
                  </p>
                </Fade>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <p style={{ fontSize: "18px" }} className="p-4 pl-3 mt-3">
              In today's data-driven world, businesses cannot afford to ignore
              the power of Advanced Analytics and Business Intelligence (BI).
              These tools can provide a competitive edge by unlocking valuable
              insights from data, improving decision-making, increasing
              operational efficiency, and identifying new growth opportunities.
              By leveraging both BI and Advanced Analytics, businesses can make
              data-driven decisions and stay ahead of the curve.
            </p>
          </div>
          <div className="col-12 col-lg-6 p-5 d-flex justify-content-center">
            <Fade direction="down">
              <div className="ApplicationDevelopmentCardsContainer shadow">
                <h1
                  className="p-3 text-center pl-0   mb-0 ApplicationDevelopmentEnquiryHeading"
                  style={{
                    marginBottom: "0px",
                    color: "#ffffff",
                    fontWeight: "bold",
                    background: "#4353ff",
                  }}
                >
                  Enquire Now
                </h1>
                <form className="p-3" style={{ background: "#ffffff" }}>
                  <p className="mb-2 mt-2 text-left p-2">
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
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mt-3 mb-3">
              Omnifinity Application Development Services
            </h1>
          </div>
          {cards.map((each, index) => (
            <div className="col-12 mt-3 mb-3 p-3 ApplicationDevelopmentCardsContent text-center col-md-6">
              <img
                height="150"
                width="150"
                src={each.imageUrl}
                alt={`${index + each.title}`}
              />
              <h3 style={{ color: "#134391" }} className="mb-2 mt-2 p-2">
                {each.title}
              </h3>
              <p className="mb-2 mt-2 p-4">{each.description}</p>
            </div>
          ))}
        </div>
        <div className="col-12 text-center  ApplicationDevelopmentCardsContent  p-3">
          <img src="https://27058982.fs1.hubspotusercontent-eu1.net/hubfs/27058982/ACP%20-%20Innovation%20Solutions%20-Application%20Development-05.jpg" alt="" />
          <h3  className="mb-2 mt-2 p-2" style={{ color: "#134391" }}>Mobile Applications Development</h3>
          <p className="mb-2 mt-2 p-4">
            Our focus is on delivering unparalleled mobile app development
            services that elevate our clients' businesses to new heights. We
            pride ourselves on utilizing cutting-edge tools and frameworks to
            create high-quality, user-centric applications that span a wide
            range of niches. By partnering with us, our clients can expect to
            attract a larger user base and increase their business impact
            through robust functionality, exceptional features, and visually
            stunning interfaces.
          </p>
        </div>
      </div>
    </div>
  );
}
