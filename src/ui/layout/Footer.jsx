/* eslint-disable no-unused-vars */
import React from "react";

export default function Footer() {
  return (
    <div className="px-[1rem]">
      <div className="container flex flex-col mx-auto py-[2rem]">
        <div className="flex justify-between items-center">
          <a href="#" className="text-[2.4rem] font-[700] text-[#252B42]">
            Bandage
          </a>
          <div className="flex gap-x-[1.5rem] w-[30rem] justify-end">
            <a href="#" className="text-[2.4rem]">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="text-[2.4rem]">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="text-[2.4rem]">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>
        <hr className="my-[3rem]" />
        <div
          id="footer-links"
          className="flex flex-auto justify-between flex-wrap max-md:flex-col max-md:gap-[3rem]"
        >
          <div className="flex flex-col gap-[1rem] flex-1">
            <h5>Company Info</h5>
            <a href="#">About Us</a>
            <a href="#">Carrier</a>
            <a href="#">We are Hiring!</a>
            <a href="#">Blog</a>
          </div>
          <div className="flex flex-col gap-[1rem] flex-1">
            <h5>Legal</h5>
            <a href="#">About Us</a>
            <a href="#">Carrier</a>
            <a href="#">We are Hiring!</a>
            <a href="#">Blog</a>
          </div>
          <div className="flex flex-col gap-[1rem] flex-1">
            <h5>Features</h5>
            <a href="#">Business Marketing</a>
            <a href="#">User Analytic</a>
            <a href="#">Live Chat</a>
            <a href="#">Unlimited Support</a>
          </div>
          <div className="flex flex-col gap-[1rem] flex-1">
            <h5>Resources</h5>
            <a href="#">iOS & Android</a>
            <a href="#">Watch a Demo</a>
            <a href="#">Customers</a>
            <a href="#">API</a>
          </div>
          <div className="flex flex-col gap-[1rem] flex-[8%]">
            <h5>Get in Touch</h5>
            <form className="flex border-black border-solid border-5">
              <input
                type="email"
                placeholder="Your Email"
                className="p-[1rem] w-[60%] text-[#737373] bg-[#E6E6E6]"
              />
              <button
                type="submit"
                className="p-[0.5rem] w-[40%] bg-[#23A6F0] text-[white] text-[1.4rem]"
              >
                Subscribe
              </button>
            </form>
            <p className="text-[#737373] text-[1.2rem] ">
              Lorem impsum dolor amit
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA]">
        <div className="container mx-auto">
          <p className="font-[500] text-[#737373] py-[2rem]">
            Design By: FigmaLand - Coded By: Inanc Ciftci
          </p>
        </div>
      </div>
    </div>
  );
}
