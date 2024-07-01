"use client";
import Layout from "../../components/Layout";
import Carousel from "../../components/corousel";

import Corousal from "../crescoComponent/corousalProjects";
import React, { useState, useEffect } from "react";

const questions = [
  "What is Azizi Mina?",
  "Where is Azizi Mina located?",
  "What types of residences are available at Azizi Mina?",
  "What amenities are available at Azizi Mina?",
  "How can I book a visit to Azizi Mina?",
  "Does Azizi Mina offer flexible payment plans?",
];

const answers = [
  "Azizi Mina is a luxurious residential complex in Palm Jumeirah, Dubai, developed by Azizi Developments.",
  "It is situated in the core of Palm Jumeirah, offering easy access to the Arabian Gulf, Dubai Marina, Mall of the Emirates, and other key locations in Dubai.",
  "The complex offers one-, two-, and three-bedroom apartments, penthouses, and villas.",
  "Amenities include an infinity pool, private beach access, fitness centers, spa and wellness centers, lush gardens, and 24/7 security.",
  "You can call the representatives of Azizi Developments to schedule a visit.",
  "Yes, Azizi Developments provides a variety of residence options and flexible payment plans.",
];

export default function AziziMina() {
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
                  Located in the Heart of Palm Jumeirah
                </div>
                <span className="vr" />
                <div>Prime Location with Unparalleled Access</div>
              </div>
              {/* /.End Meta Info */}
              <h1 className="fw-semibold display-4 text-white">
                Azizi Mina offers Luxurious Living in Palm Jumeirah
              </h1>
              {/* /.End of header title */}
              {/* Start Author Info */}

              {/* /.End Author Info */}
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
                    Azizi Mina, an example of luxury living with modern designs
                    and endless amenities available, is situated in the core of
                    Palm Jumeirah, one of Dubai’s most sought-after locations.
                    Azizi Developments has the privilege to offer such an
                    extraordinary opportunity to own your houses nowhere but in
                    Palm Jumeirah, in the Azizi Mina.
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
                Amenities You Get with Azizi Mina
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
              src="/assets/img/azizi/10.jpg" // Assuming assets folder is at root
              alt="Blog Image"
              className="responsive-img absolute inset-0 w-full rounded-xl h-full object-cover object-center"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <p className="text-gray-700 mb-4">
              Azizi Mina is designed in a way that attracts every type of
              lifestyle. With world-class amenities and facilities available
              right at your door and in your community, you get a premium chance
              to live a luxurious lifestyle in the most prestigious location,
              the Palm Jumeirah of Dubai.
            </p>
            <ul className="list-checked mb-9 mb-md-10 ps-0 text-gray-800">
              <li>
                <strong>Infinity Pool:</strong> The neat and clean waters of
                Palm Jumeirah, when contracted into a luxurious swimming pool at
                Azizi Mina, take all your exhaustion of the day and allow you to
                have a freshening feel.
              </li>
              <li>
                <strong>Secure Your Chance Now!</strong> Don’t wait to book your
                desired dream home at Azizi Rivera, situated at the most
                strategic location of Dubai, The Palm Jumeirah, where you are
                facilitated with all your needed amenities. Contact us now to
                get more information about Azizi Mina, and Azizi Developments,
                and secure your chance to have a brilliant home there.
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
                    Azizi Developments boasts an extensive portfolio of projects
                    across prime locations in Dubai, <br />
                    including Al Furjan, Palm Jumeirah, Dubai Healthcare City,
                    and Meydan. Some standout projects include:
                  </p>
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>

          <Corousal />

          <div className="row">
            <div className="col-md-10 offset-md-1" data-aos="">
              {/* Start Section Header Title */}
              <div className="section-header text-center mb-3 mt-5">
                {/* Start Subtitle */}
                <div className="bg-[#DAB852] d-inline-block  mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
                  <span className="font-bold text-xl">
                    Sustainability & Continuous Innovation
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
                  Azizi Developments is on a mission to keep the environment
                  neat and clean as well as believes in keeping the Earth
                  liveable forever. That’s why we have incorporated the optional
                  as well as included features of energy-efficient systems,
                  water conservation measures, and eco-friendly materials in all
                  of our projects, including Azizi Mina. We feel it our
                  responsibility to contribute to a greener and more sustainable
                  future.
                </p>
                <ul className="list-checked mb-9 mb-md-10 ps-0 text-gray-800">
                  <li>
                    <strong> Book Your Visit to Azizi Aliyah : </strong>{" "}
                    Schedule a visit to explore the elegance and convenience of
                    Azizi Aliyah. Our representatives are ready to help you find
                    your dream home in Dubai's prime location.
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
                    What makes Azizi Mina that famous?
                  </span>
                </div>
                {/* /. End Subtitle */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>
          <div className="container mx-auto mb-2">
            <div className="flex flex-col  overflow-hidden">
              <div className="p-2 flex flex-col justify-center">
                <p className="text-gray-700 mb-2 text-center">
                  Azizi Developments is on a mission to keep the environment
                  neat and clean as well as believes in keeping the Earth
                  liveable forever. That’s why we have incorporated the optional
                  as well as included features of energy-efficient systems,
                  water conservation measures, and eco-friendly materials in all
                  of our projects, including Azizi Mina. We feel it our
                  responsibility to contribute to a greener and more sustainable
                  future.
                </p>
              </div>
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
                  Location and Accessibility:
                </h2>
                <p className="mb-4">
                  Situated in Palm Jumeirah, Azizi Mina connects you to most of
                  Dubai’s strategic places. The Arabian Gulf, Dubai Marina, Mall
                  of the Emirates, and most of Dubai’s attractive places are
                  just 2 to 5 kilometers away from Azizi Mina. Guess what? The
                  iconic Burj Khalifa and The Dubai Mall are just minutes away,
                  so close that you can see them from your balcony or the
                  terrace. For business persons, Azizi Mina proves to be a
                  strategic location as it’s close to airports, railway
                  stations, and key marketplaces.
                </p>
                <hr className="mt-3 mb-3" />
                <h2 className="mb-2 text-lg font-bold">
                  Brilliant Architecture:
                </h2>
                <p className="mb-4">
                  We bet you get a true elegance and feeling at Azizi Mina only.
                  From clean roadlines, expansive glass windows, and spacious
                  balconies, Azizi Mina allows you to experience natural light
                  and panoramic views. Moreover, the building is structured in a
                  way that makes your moods happy, having the strength of an
                  unimaginable lifetime.
                </p>
                <hr className="mt-3 mb-3" />
                <h2 className="mb-2 text-lg font-bold">
                  Luxurious Residences:{" "}
                </h2>
                <p className="mb-4">
                  Azizi Mina features beautiful homes of one-, two-, and
                  three-bedroom apartments, penthouses, villas, and much more.
                  All of our residences are constructed with premium materials
                  and finished with high-quality appliances. The open-plan
                  layouts create a sense of space and fluidity, whereas the
                  beautiful interior designs provide you with seamless comfort.
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

      <div>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {/* Start Section Header Title */}
              <div className="section-header text-center mb-5" data-aos="">
                {/* Start Section Header title */}
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                  Azizi Mina <br /> Luxurious Life in Palm Jumeirah
                </h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">
                  Azizi Mina, developed by Azizi Developments, epitomizes luxury
                  living in the heart of Palm Jumeirah, Dubai. Enjoy modern
                  designs, endless amenities, and unparalleled access to Dubai’s
                  most iconic locations. Discover why Azizi Mina is the premier
                  choice for a sophisticated and comfortable lifestyle.
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
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
                  Discover Luxurious Living <br /> at Azizi Mina
                </h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">
                  Experience the epitome of luxury living with Azizi Mina,
                  located in the heart of Palm Jumeirah.
                  <br />
                  From modern designs to endless amenities, Azizi Mina offers
                  unparalleled comfort and convenience in one of Dubai’s most
                  prestigious locations.
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
