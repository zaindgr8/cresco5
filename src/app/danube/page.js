"use client";
import Layout from "../../components/Layout";
import Carousel from "../../components/corousel";

import Corousal from "../crescoComponent/corousalProjects";
import React, { useState, useEffect } from "react";

const questions = [
  "Why Choose Danube Properties?",
  "What makes Danube Properties a trusted developer in the UAE?",
  "What are the key advantages of investing with Danube Properties?",
  "What is the latest project by Danube Properties?",
  "How can I become a part of Danube Properties' projects?",
];

const answers = [
  "Danube Properties, since it began working in the UAE, has become one of the top four leading and most trusted developers in the Real Estate industry. The trust our clients place in us has a reason – We deliver high-quality homes with elegant designs and state-of-the-art facilities in prime locations in UAE, all at a cost reasonable to a diverse range of clients. We believe in following a strategic and client-centric approach based on the desires, needs, and preferences of our clients, turning their dreams into a real home.",
  "Danube Properties started its journey in Dubai in 1993 and has grown into a large-scale development giant with a strong reputation as a trusted partner of clients looking for their dream homes. Timely delivery and architectural excellence have been the core principles of our working strategy since inception.",
  "Investing with Danube Properties offers advantages such as freehold ownership, high return on investment, over 30 years of industry trust, flexible payment plans, timely project delivery, and prime locations across the UAE.",
  "DIAMONDOZ, the latest project launched by Danube Properties, is located in Jumeirah Lake Towers, offering studios to three-bedroom units with sleek designs and facilities like a fitness center, infinity pool, and retail outlets.",
  "To become part of Danube Properties' projects, contact us now to explore our developments, start your investment journey, and own a home in prime UAE locations.",
];

export default function Danube() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const shuffleQuestions = () => {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
  };

  useEffect(() => {
    shuffleQuestions();
  }, []);

  const toggleAnswer = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };

  return (
    <Layout>
      {/* Start Page Header */}
      <div className="blog-header position-relative text-white">
        <img
          src="assets/img/azizi/5.JPG"
          alt=""
          className="h-100 object-fit-cover position-absolute w-100 top-0 left-0"
        />
        <div className="container position-relative z-1">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8 text-center">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-17 gap-2 hstack justify-content-center mb-1 text-capitalize">
                <div className="text-white fw-medium">
                  Located in the Heart of MBR City
                </div>
                <span className="vr" />
                <div>Prime Location with Unparalleled Access</div>
              </div>
              {/* /.End Meta Info */}
              <h1 className="fw-semibold display-4 text-white">
                Danube Properties: Your Trusted Developer in the UAE
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* /.End Page Header */}
      <div className="">
        <div className="container mt-3">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-xxl-8">
              <article className="post single-post">
                <div className="row">
                  <div className="col-md-10 offset-md-1" data-aos="fade-down">
                    {/* Start Section Header Title */}
                    <div className="section-header text-center ">
                      {/* Start Subtitle */}
                      <div className="bg-[#DAB852] d-inline-block  mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
                        <span className="font-bold text-xl">ABOUT US</span>
                      </div>
                      {/* /. End Subtitle */}
                    </div>
                    {/*/. End Section Header */}
                  </div>
                </div>
                <div className="entry-content">
                  <p className="mt-2">
                    Danube Properties, since it began working in the UAE, has
                    become one of the top four leading and most trusted
                    developers in the Real Estate industry. The trust our
                    clients place in us has a reason – We deliver high-quality
                    homes with elegant designs and state-of-the-art facilities
                    in prime locations in UAE, all at a cost reasonable to a
                    diverse range of clients. We believe in following a
                    strategic and client-centric approach based on the desires,
                    needs, and preferences of our clients, turning their dreams
                    into a real home.
                  </p>

                  <figure className="caption aligncenter w-[500px]">
                    <img
                      src="assets/img/azizi/azziz.jpg"
                      className="img-fluid rounded-3 w-[100%] "
                      alt=""
                    />
                    <figcaption className="caption-text fs-11 text-center text-muted text-uppercase mt-2">
                      MIRWAIS AZIZI , CHAIRMAN, Azizi Aliyah
                    </figcaption>
                  </figure>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-10 offset-md-1" data-aos="">
          {/* Start Section Header Title */}
          <div className="section-header text-center mb-2">
            {/* Start Subtitle */}
            <div className="bg-[#DAB852] d-inline-block  mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
              <span className="font-bold text-xl">
                Why Choose Danube Properties?
              </span>
            </div>
            {/* /. End Subtitle */}
          </div>
          {/*/. End Section Header */}
        </div>
      </div>

      <div className="container mx-auto mb-5">
        <div className="flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/2 h-64 md:h-auto relative">
            <img
              src="/assets/img/azizi/10.JPG" // Assuming assets folder is at root
              alt="Blog Image"
              className="responsive-img absolute inset-0 w-full rounded-xl h-full object-cover object-center"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <ul className="list-checked mb-9 mb-md-10 ps-0 text-gray-800">
              <li>
                <strong>Freehold Ownership:</strong> Secure full ownership of
                your property, allowing you to use, reconstruct, or sell it at
                any time in the UAE.
              </li>
              <li>
                <strong>High Return on Investment:</strong> Our projects offer
                ever-increasing market value and the best return on investment.
              </li>
              <li>
                <strong>30 Years of Trust:</strong> With over three decades of
                experience, we are a trusted name in UAE real estate.
              </li>
              <li>
                <strong>Best Payment Plan:</strong> We offer flexible payment
                plans to suit residents, foreigners, and investors.
              </li>
              <li>
                <strong>Timely Delivery:</strong> We deliver all projects on
                time, ensuring you receive your dream home as promised.
              </li>
              <li>
                <strong>Prime Locations:</strong> Our projects are strategically
                located for convenience and high investment potential.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-2">
        <div className="container pt-2">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {/* Start Section Header Title */}
              <div className="section-header text-center mb-5" data-aos="">
                {/* Start Subtitle */}
                <div className="row">
                  <div className="col-md-10 offset-md-1" data-aos="">
                    {/* Start Section Header Title */}
                    <div className="section-header text-center mb-3">
                      {/* Start Subtitle */}
                      <div className="bg-[#DAB852] d-inline-block rounded-pill section-header__subtitle text-capitalize text-gray-900">
                        <span className="font-bold text-xl">
                          OUR KEY PROJECTS
                        </span>
                      </div>
                      {/* /. End Subtitle */}
                    </div>
                    {/*/. End Section Header */}
                  </div>
                </div>

                <div className="sub-title fs-16">
                  <p>
                    Danube Properties, since it began working in the UAE, has
                    become one of the top four leading and most trusted
                    developers in the Real Estate industry. The trust our
                    clients place in us has a reason – We deliver high-quality
                    homes with elegant designs and state-of-the-art facilities
                    in prime locations in UAE, all at a cost reasonable to a
                    diverse range of clients. We believe in following a
                    strategic and client-centric approach based on the desires,
                    needs, and preferences of our clients, turning their dreams
                    into a real home.
                  </p>
                </div>

                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>

          {/* Integrate your Carousel component */}
          <Carousel />

          <div className="row">
            <div className="col-md-10 offset-md-1" data-aos="">
              {/* Start Section Header Title */}
              <div className="section-header text-center mb-3 mt-5">
                {/* Start Subtitle */}
                <div className="bg-[#DAB852] d-inline-block  mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
                  <span className="font-bold text-xl">
                    Latest Launch: DIAMONDZ by Danube
                  </span>
                </div>
                {/* /. End Subtitle */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>

          <div className="container mx-auto mb-5">
            <div className="flex flex-col md:flex-row overflow-hidden">
              <div className="md:w-1/2 p-6 flex flex-col justify-center">
                <p className="text-gray-700 mb-4">
                  Discover DIAMONDOZ, Danube Properties' latest project in
                  Dubai's Jumeirah Lake Towers. Offering studios to
                  three-bedroom units with sleek designs, it's perfectly located
                  near marketplaces and offices, providing a serene waterfront
                  living experience. Enjoy amenities like a fitness center,
                  infinity pool, and retail outlets. Please note, regulatory
                  approval is pending.
                </p>
                <ul className="list-checked mb-9 mb-md-10 ps-0 text-gray-800">
                  <li>
                    <strong>Become Part of Our Family</strong> Inspired by the
                    Join our family today! Invest in Danube’s exceptional
                    projects for high returns. Whether you seek a strategic
                    business location or a peaceful residence, we offer the
                    facilities you desire. Contact us now to explore our prime
                    UAE locations and start your investment journey.
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <img
                  src="/assets/img/azizi/10.JPG" // Assuming assets folder is at root
                  alt="Blog Image"
                  className="responsive-img absolute inset-0 w-full rounded-xl h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Our Future Aspects */}

          <div className="row">
            <div className="col-md-10 offset-md-1" data-aos="">
              {/* Start Section Header Title */}
              <div className="section-header text-center mb-3 mt-5">
                {/* Start Subtitle */}
                <div className="bg-[#DAB852] d-inline-block  mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
                  <span className="font-bold text-xl">
                    Residential Options You Get
                  </span>
                </div>
                {/* /. End Subtitle */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>

          <div className="about-text align-items-center g-4 justify-content-between row">
            <div className="col-md-12 col-lg-7">
              <div className="row g-3 g-sm-4 align-items-center">
                {/* Image */}
                <div className="col-6">
                  <div className="position-relative">
                    <div className="line-shape" />
                    <img
                      src="assets/img/azizi/10.JPG"
                      className="img-fluid rounded-3 position-relative"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="row g-3 g-sm-4">
                    {/* Image */}
                    <div className="col-12">
                      <img
                        src="assets/img/azizi/8.JPG"
                        className="img-fluid rounded-3"
                        alt=""
                      />
                    </div>
                    {/* Image */}
                    <div className="col-12">
                      <img
                        src="assets/img/azizi/11.JPG"
                        className="img-fluid rounded-3"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-5 ps-xxl-5">
              <div className="text-block">
                <h2 className="mb-2 text-lg font-bold">
                  Top-Notch Quality and Dedication
                </h2>
                <p className="mb-4">
                  We're committed to delivering promised quality, showcasing our
                  high-quality projects. Our team monitors every construction
                  step to ensure the best homes. We offer additional facilities
                  like advanced clean energy systems to personalize our approach
                  to individual needs.
                </p>
                <hr className="mt-3 mb-3" />
                <h2 className="mb-2 text-lg font-bold">Creative Designs:</h2>
                <p className="mb-4">
                  We specialize in creative designs that capture vibrant
                  cityscapes, serene landscapes, and elegant interiors, securing
                  projects with innovative ideas. Our dedicated teams turn
                  clients' dreams into reality through customized strategies,
                  focusing on preferences like open layouts, natural light, and
                  innovative storage solutions.
                </p>
                <hr className="mt-3 mb-3" />
                <h2 className="mb-2 text-lg font-bold">
                  Putting Customers First:{" "}
                </h2>
                <p className="mb-4">
                  Customer satisfaction is our top priority. We value customer
                  reviews throughout the home construction process, providing
                  efficient service and support. We prioritize your preferences,
                  whether it's a stunning view or a strategic location, aiming
                  to exceed expectations for a peaceful living experience. Our
                  after-sales support includes maintenance services and a
                  dedicated customer care hotline.
                </p>
              </div>
            </div>
          </div>

          {/* /.End Aspects */}
        </div>
      </div>

      <div className="row">
        <div className="col-md-10 offset-md-1" data-aos="">
          {/* Start Section Header Title */}
          <div className="section-header text-center mb-3 mt-5">
            {/* Start Subtitle */}
            <div className="bg-[#DAB852] d-inline-block  mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
              <span className="font-bold text-xl">FAQ's</span>
            </div>
            {/* /. End Subtitle */}
          </div>
          {/*/. End Section Header */}
        </div>
      </div>

      <div className="container py-4">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            {/* Start Section Header Title */}
            <div className="section-header text-center mb-5" data-aos="">
              {/* Start Section Header title */}
              <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                Danube Properties: Your Trusted Developer in the UAE
              </h2>
              {/* /.End Section Header Title */}
              {/* Start Section Header Sub Title */}
              <div className="sub-title fs-16">
                Danube Properties, since it began working in the UAE, has become
                one of the top four leading and most trusted developers in the
                Real Estate industry. The trust our clients place in us has a
                reason – We deliver high-quality homes with elegant designs and
                state-of-the-art facilities in prime locations in UAE, all at a
                cost reasonable to a diverse range of clients. We believe in
                following a strategic and client-centric approach based on the
                desires, needs, and preferences of our clients, turning their
                dreams into a real home.
              </div>
              {/* /.End Section Header Sub Title */}
              {/* Additional content about Danube Properties can be added here */}
            </div>
            {/*/. End Section Header */}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-2 mb-5 max-w-3xl">
        <ul className="list-none space-y-4">
          {questions.map((question, index) => (
            <li key={index}>
              <button
                className={`w-full flex items-center justify-between focus:outline-none rounded-lg px-4 py-2 text-left shadow hover:shadow-md ${
                  activeQuestion === index
                    ? "bg-gray-100 text-gray-700"
                    : "text-gray-900"
                }`}
                onClick={() => toggleAnswer(index)}
              >
                <span className="text-lg font-medium">{`Q${
                  index + 1
                }: ${question}`}</span>
                <svg
                  className={`h-6 w-6 transform transition duration-200 ease-in-out ${
                    activeQuestion === index ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeQuestion === index && (
                <div className="text-base leading-6 mt-2 px-4 pb-4">
                  {answers[index]}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* Start Articles Section */}

      <div className="py-5 border-top">
        <div className="row">
          <div className="col-md-10 offset-md-1" data-aos="">
            {/* Start Section Header Title */}
            <div className="section-header text-center mb-3 mt-5">
              {/* Start Subtitle */}
              <div className="bg-[#DAB852] d-inline-block  mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
                <span className="font-bold text-xl">Our developer</span>
              </div>
              {/* /. End Subtitle */}
            </div>
            {/*/. End Section Header */}
          </div>
        </div>

        <div className="container pb-5">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {/* Start Section Header Title */}
              <div className="section-header text-center mb-5">
                {/* Start Section Header title */}
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                  Find Your Dream Now!
                </h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">
                  Danube Properties offers you an extraordinary opportunity to
                  own an elegant house in prime locations across the UAE. With a
                  focus on high-quality homes, state-of-the-art amenities, and
                  strategic locations, Danube Properties ensures your dream home
                  becomes a reality.
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>
          <Carousel />
        </div>
      </div>

      {/* /. End Articles Section */}
    </Layout>
  );
}
