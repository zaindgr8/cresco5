"use client";
import Layout from "../../components/Layout";
import Carousel from "../../components/corousel";
import Link from "next/link";
import Corousal from "../crescoComponent/corousalProjects";
import React, { useState, useEffect } from "react";

const questions = [
  "What is Azizi Aliyah?",
  "Where is Azizi Aliyah located?",
  "What types of residences are available at Azizi Aliyah?",
  "What amenities are available at Azizi Aliyah?",
  "How can I book a visit to Azizi Aliyah?",
  "Does Azizi Aliyah offer flexible payment plans?",
];

const answers = [
  "Azizi Aliyah is a luxurious residential complex in Al Jaddaf, Dubai, developed by Azizi Developments.",
  "It is situated in Al Jaddaf, close to health city, Downtown Dubai, Burj Khalifa, and Dubai International Airport.",
  "The complex offers studio, one-bedroom, and two-bedroom apartments.",
  "Amenities include a swimming pool, fitness centers, lush green spaces, 24/7 security, and covered parking.",
  "You can call the representatives of Azizi Developments to schedule a visit.",
  "Yes, Azizi Developments provides a variety of residence options and flexible payment plans.",
];

export default function AziziAliyah() {
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
          src="assets/img/azizi/7.jpg"
          alt=""
          className="h-100 object-fit-cover position-absolute w-100 top-0 left-0"
        />
        <div className="container position-relative z-1">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8 text-center">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-17 gap-2 hstack justify-content-center mb-1 text-capitalize">
                <div className="text-white fw-medium">
                  Discover Luxurious Living in Dubai's Health City, Al Jaddaf
                </div>
                <span className="vr" />
                <div>Prime Location Near Key Areas</div>
              </div>
              {/* /.End Meta Info */}
              <h1 className="fw-semibold display-4 text-white">
                New Standards of Urban Life with Azizi Aliyah
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
                    Azizi Aliyah is one of the most luxurious places to reside
                    in Dubai, particularly the health city, Al Jaddaf. Developed
                    by Azizi Developments, one of the leading real estate
                    developers in the UAE, Azizi Aliyah features all the modern
                    values of a residence, i.e., a stress-free environment, an
                    elegant style, and convenient comfort, settling the new
                    standards of residential living in one of the busiest lands
                    in the world.
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
                <strong>Swimming Pool:</strong> the most sought after homes in
                Dubai made for residential and commercial purposes.
              </li>
              <li>
                <strong>Fitness & Wellness Centers:</strong> Azizi Aliyah offers
                a fully equipped gym, modern fitness equipment, and separate
                sauna and steam rooms for men and women, promoting a healthy
                lifestyle for residents.
              </li>
              <li>
                <strong>Lush Green Spaces: </strong> rtfully crafted gardens and
                green spaces enhance the natural beauty, offering residents
                peaceful morning and evening walks.
              </li>
              <li>
                <strong>24/7 Security: </strong>Azizi Aliyah ensures safety with
                high-level security systems, 24/7 CCTV cameras, and dedicated
                security personnel.
              </li>
              <li>
                <strong>Covered Parking: </strong>Azizi Aliyah ensures safety
                with high-level security systems, 24/7 CCTV cameras, and
                dedicated security personnel.
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
                    Secure Your Chance Now!
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
                  So, just take your phone and call our representatives to book
                  your visit to Azizi Aliyah and own a home at a strategic place
                  you may never find anywhere else. Azizi Developments hears all
                  your needs, requirements, and preferences, and gives you a
                  variety of residence options as well as flexibility in
                  payments, ensuring that everyone can own a home with us.
                </p>
                <ul className="list-checked mb-9 mb-md-10 ps-0 text-gray-800">
                  <li>
                    <strong> Book Your Visit to Azizi Aliyah : </strong>{" "}
                    Schedule a visit to explore the elegance and convenience of
                    Azizi Aliyah. Our representatives are ready to help you find
                    your dream home in Dubai's prime location.
                  </li>
                  <li>
                    <strong> Flexible Payment Options : </strong> Schedule a
                    Azizi Developments offers various residential options and
                    flexible payment plans, making homeownership accessible and
                    tailored to your needs and preferences.
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <img
                  src="/assets/img/azizi/10.jpg" // Assuming assets folder is at root
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
                    Why Choose Azizi Aliyah?
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
                      src="assets/img/azizi/10.jpg"
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
                        src="assets/img/azizi/8.jpg"
                        className="img-fluid rounded-3"
                        alt=""
                      />
                    </div>
                    {/* Image */}
                    <div className="col-12">
                      <img
                        src="assets/img/azizi/11.jpg"
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
                  Located in the highly desired Al Jaddaf area, Azizi Aliyah is
                  strategically positioned. It's just 3 km from medical
                  facilities, 10 km from Downtown Dubai, Burj Khalifa, and The
                  Dubai Mall, and 8 km from Dubai International Airport, ideal
                  for frequent travelers.
                </p>
                <hr className="mt-3 mb-3" />
                <h2 className="mb-2 text-lg font-bold">
                  rchitectural Excellence
                </h2>
                <p className="mb-4">
                  The unique architectural design of Azizi Aliyah has pleased
                  everyone with its sleek lines, expansive glass facades, and
                  elegant interiors. The structure of the building allows the
                  natural light to pass more and a view of the Dubai skyline
                  further enhances the beauty.
                </p>
                <hr className="mt-3 mb-3" />
                <h2 className="mb-2 text-lg font-bold">Luxurious Residences</h2>
                <p className="mb-4">
                  Azizi Aliyah has a vast variety of residential units,
                  including studio, one-bedroom, and two-bedroom apartments,
                  with each of them designed with close attention to detail,
                  including high-quality finishes, modern fixtures, and premium
                  materials. From the bedrooms to storage spaces and kitchens to
                  bathrooms, everything in all the units features a stylish look
                  and modern appearance.
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
                  Azizi Aliyah <br /> New Standards of Urban Life
                </h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">
                  Azizi Aliyah, developed by Azizi Developments, offers
                  luxurious living in Al Jaddaf, Dubai. Experience stress-free
                  living with elegant style and convenient comfort. Learn more
                  about our offerings and why Azizi Aliyah is the go-to choice
                  for a luxury lifestyle in Dubai.
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
                  Explore more renowned <br /> developers in Dubai
                </h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">
                  Whether you're looking for luxury real estate, innovative
                  architectural designs, or sustainable urban developments,{" "}
                  <br />
                  you'll find detailed profiles and project highlights that
                  showcase the excellence and expertise of Dubai's top
                  developers.
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
