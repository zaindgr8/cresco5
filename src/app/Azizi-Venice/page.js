"use client";
import Layout from "../../components/Layout";
import Carousel from "../../components/corousel";

import Corousal from "../crescoComponent/corousalProjects";
import React, { useState, useEffect } from "react";

const questions = [
  "What is Azizi Venice?",
  "Where is Azizi Venice located?",
  "Why should I invest in Azizi Venice?",
  "What are the key features of Azizi Venice?",
  "What amenities does Azizi Venice offer?",
  "What residential options are available at Azizi Venice?",
  "What is the living experience like at Azizi Venice?",
  "How is safety and security ensured at Azizi Venice?",
  "How can I book a residence at Azizi Venice?",
];

const answers = [
  "Azizi Venice is a luxurious residential development offering a Venetian-inspired lifestyle in Meydan One, Dubai, featuring stunning views of the Dubai Water Canal and the Meydan Racecourse.",
  "Located in South Dubai, Azizi Venice provides excellent connectivity, with proximity to Al Maktoum International Airport and key facilities.",
  "Investing in Azizi Venice offers a unique blend of luxury living, waterfront views, and a vibrant community atmosphere, making it a lucrative option in Dubai's real estate market.",
  "Key features of Azizi Venice include 100 mid-sized apartment buildings, 69 waterfront apartments, 261 waterfront villas, and an 18 km lagoon with artificial waves, offering a seaside experience.",
  "Azizi Venice boasts world-class amenities including retail outlets, gourmet restaurants, fitness centers, swimming pools, parks, and community spaces, enhancing the resident experience.",
  "Residential options at Azizi Venice include studios, one-bedroom, two-bedroom, and three-bedroom apartments, each offering scenic views and luxurious living spaces.",
  "Living at Azizi Venice promises a tranquil environment with picturesque views, reminiscent of Venice's charm and beauty.",
  "Safety and security at Azizi Venice are prioritized with 24/7 security systems and concierge services, ensuring a safe and secure living environment for residents.",
  "To book a residence at Azizi Venice, interested parties can contact Azizi Developments for more information on available units and flexible payment plans.",
];
export default function AziziVenice() {
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
                  Located in South Dubai
                </div>
                <span className="vr" />
                <div>Prime Location with Excellent Connectivity</div>
              </div>
              {/* /.End Meta Info */}
              <h1 className="fw-semibold display-4 text-white">
                Discover Azizi Venice: A Venetian Oasis in Dubai
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
                        <span className="font-bold text-xl">
                          About Azizi Venice
                        </span>
                      </div>
                      {/* /. End Subtitle */}
                    </div>
                    {/*/. End Section Header */}
                  </div>
                </div>
                <div className="entry-content">
                  <p className="mt-2">
                    Azizi Venice offers a luxury lifestyle in the core of Dubai,
                    making your life stress-free with its elegant structure,
                    endless facilities, and peaceful environment. Situated
                    beside the beautiful view of Dubai Water Canal, Azizi Venice
                    offers a variety of studios, one, two, and three-bedroom
                    apartments, each having a beautiful view of the Dubai
                    skyline, the peace-showering canal waters or the attracting
                    Racecourse of Meydan, and a comfortable stay you never had
                    before – the same you feel in Venice, a city of Italy known
                    for its beautiful waterways.
                  </p>
                  <ul className="list-checked mb-9 mb-md-10 ps-0 text-gray-800">
                    <li>
                      <strong>An Ideal Location:</strong> Azizi Venice is
                      strategically located near key facilities and services,
                      enhancing convenience for residents.
                    </li>
                    <li>
                      <strong>Connectivity:</strong> Enjoy seamless connectivity
                      with nearby transportation options, including the Dubai
                      Metro and Dubai International Airport.
                    </li>
                  </ul>
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
            <div className="bg-[#DAB852] d-inline-block mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
              <span className="font-bold text-xl">
                Exceptional Amenities and World-Class Facilities
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
            <p className="text-gray-700 mb-4">
              At Azizi Venice, we believe in offering more than just a home. Our
              world-class amenities are designed to enhance your lifestyle:
            </p>
            <ul className="list-checked mb-9 mb-md-10 ps-0 text-gray-800">
              <li>
                <strong>Retail and Dining:</strong> Azizi Venice has a vibrant
                street dedicated to charming cafes, gourmet restaurants, and
                boutique shops. Enjoy a variety of dining options and unique
                shopping experiences right in your building.
              </li>
              <li>
                <strong>Fitness and Recreation:</strong> We cater to diverse
                preferences with spaces dedicated to state-of-the-art fitness
                centers, refreshing swimming pools, and peaceful wellness areas.
              </li>
              <li>
                <strong>Parks and Green Spaces:</strong> Enjoy peaceful walks in
                our green gardens, offering a retreat from city life.
              </li>
              <li>
                <strong>Waterfront Living:</strong> Relax along our beautifully
                designed waterfront promenade along the Dubai Canal, perfect for
                walks and outdoor activities.
              </li>
              <li>
                <strong>Community Spaces:</strong> BBQ areas, playgrounds, and
                community clubs foster connections with friends and family, open
                day and night for snacks and activities.
              </li>
              <li>
                <strong>24/7 Security:</strong> Your safety is our priority with
                round-the-clock security systems and concierge services.
              </li>
              <li>
                <strong>Future Plans:</strong> Stay tuned for additions like a
                shopping mall, healthcare facilities, and sports courts,
                enhancing community life at Azizi Venice.
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
                    Azizi Rivera, inspired by French Mediterranean design, is
                    developed by Azizi Developments in Meydan District One,
                    Mohammed Bin Rashid City (MBR City), Dubai. More than a mere
                    residential building, Azizi Rivera is constructed with
                    modern architectural designs, state-of-the-art amenities,
                    and a variety of homes worth investing your hard-earned cash
                    in, making it an ideal place to live and find property for
                    sale in Dubai.
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
                    What Choose Azizi Rivera in MBR?
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
                  With lots of options available for you from many of the real
                  estate corporations in Dubai, Azizi Rivera still manages to
                  take the lead among them. What makes it an ideal place to
                  choose to live in Dubai is the feeling you get there.
                </p>
                <ul className="list-checked mb-9 mb-md-10 ps-0 text-gray-800">
                  <li>
                    <strong>Mind-Refreshing Views:</strong> Inspired by the
                    French Mediterranean, Azizi Rivera offers stunning views
                    across 69 mid-rise buildings, with lush greenery and
                    waterfront vistas.
                  </li>
                  <li>
                    <strong>Health & Fitness Facilities:</strong> Nearby key
                    hospitals and community fitness centers provide convenient
                    health and wellness options, including parks, fitness
                    centers, and swimming pools, promoting a healthy lifestyle.
                  </li>
                  <li>
                    <strong>Shop in Minutes:</strong> An integrated retail
                    district within the community offers a mega market for
                    dining and shopping, ensuring convenience for residents.
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
                <h2 className="mb-2 text-lg font-bold">Variety of Homes</h2>
                <p className="mb-4">
                  To meet the diverse needs of the residents of Dubai, we have a
                  lot of residential options for you, including studios, villas,
                  1-bedroom, and 2-bedroom apartments.
                </p>
                <hr className="mt-3 mb-3" />
                <h2 className="mb-2 text-lg font-bold">
                  Premium Living Experience:
                </h2>
                <p className="mb-4">
                  Each of the homes in Azizi Rivera gives you a pleasant
                  feeling, comfort, and stylish feel. Along with the
                  top-of-the-class materials used, we also offer personalization
                  options to those who want their homes the way they like to be.
                </p>
                <hr className="mt-3 mb-3" />
                <h2 className="mb-2 text-lg font-bold">Safety & Security: </h2>
                <p className="mb-4">
                  Beyond everything, the scenic views, and comfort, we
                  prioritize safety and security for you, your families, and
                  your drives. With the most advanced 24/7 security mechanisms
                  installed, you can relax in your apartments without any fears
                  of theft and privacy breaches
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
                  Azizi Rivera <br /> Modern Comfort and Stylish Living
                </h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">
                  Azizi Rivera, inspired by French Mediterranean design, is
                  developed by Azizi Developments in Meydan District One,
                  Mohammed Bin Rashid City (MBR City), Dubai. More than a mere
                  residential building, Azizi Rivera is constructed with modern
                  architectural designs, state-of-the-art amenities, and a
                  variety of homes worth investing your hard-earned cash in,
                  making it an ideal place to live and find property for sale in
                  Dubai.
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
                  Find Your Dream Now!
                </h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">
                  Azizi Rivera brings you an extraordinary opportunity to own an
                  elegant house in the core of Dubai, The MBR City – Where you
                  get all the facilities and amenities you can ever imagine.
                  More than that, with airports and railways being close, it
                  connects you to most of Dubai as well globally. So, don’t wait
                  anymore to book your premium residence at Azizi Rivera with
                  Azizi Developments.
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
