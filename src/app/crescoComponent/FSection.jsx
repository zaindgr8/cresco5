"use client";
import { DivideCircleIcon } from "lucide-react";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa6";
const FSection = () => {
  return (
    <>
      <div
        className="align-items-center d-flex hero-header overflow-hidden position-relative"
        style={{ height: "100vh", width: "100vw" }}
      >
        <div>
          <Image
            src="/assets/img/bg-cresco.jpg"
            layout="fill"
            alt="Hero GIF"
            className="h-100 w-100 object-fit-cover position-absolute  oblique-image top-0 video"
          />
        </div>

        <div
          className="container text-center flex items-center justify-center position-relative"
          style={{ height: "100%", width: "100%" }}
        >
          <div>
            <div>
              <div className="bg-[#E1B958] d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
                Cresco Real Estate LLC
              </div>
              <h1 className=" text-white  font-bold  text-5xl ">
                <span>
                  Unlock the Door <br /> To Your Dream Home
                </span>
              </h1>
              <div className="text-white pt-16 px-10 justify-center flex ">
                <FaArrowDown size={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FSection;
