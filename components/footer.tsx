"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { TfiYoutube } from "react-icons/tfi";
import Container from "./container";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <footer>
      <div className=" min-h-[800px] bg-footer-bg bg-no-repeat bg-cover  w-full h-full">
        <Container className=" py-7">
          <div>
            <p className="sub-heading  leading-[1.70] lg:leading-[2.40] text-left text-white ">
              Join Our
            </p>
            <h2 className="heading1 leading-none text-left text-white">
              News Letter
            </h2>
          </div>
          <div className="flex py-5 justify-between items-center">
            <p className=" lg:block hidden max-w-[536px] text-lg text-white leading-6 tracking-[0.54px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" flex items-center gap-4"
            >
              <input
                placeholder="Enter Email"
                className="btn px-3 focus:outline-none bg-white hover:bg-opacity-80 text-secondary"
                required
                {...register("email")}
              />

              <button
                type="submit"
                className="btn bg-white hover:bg-opacity-80 text-secondary"
              >
                Go
              </button>
            </form>
          </div>
          <div className="grid pt-16 sm:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <h2 className=" text-[1.375em] font-bold leading-none text-left text-white">
                Contact Us
              </h2>
              <ul className=" space-y-3 py-5">
                <li className=" text-white text-lg flex items-center gap-2">
                  <FaLocationPin />
                  <span>12312,ABCD Ab.#1234</span>
                </li>
                <li className=" text-white text-lg flex items-center gap-2">
                  <FaPhone />
                  <span>123-456-9870</span>
                </li>
                <li className=" text-white text-lg flex items-center gap-2">
                  <FaPhone />
                  <span>123-456-9870</span>
                </li>
                <li className=" text-white text-lg flex items-center gap-2">
                  <HiOutlineMail />
                  <span>info@mosqueonline</span>
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className=" text-[1.375em] font-bold leading-none text-left text-white">
                Quick Links
              </h2>
              <ul className=" space-y-3 py-5">
                <li className=" text-white text-lg flex items-center gap-2">
                  <Link href={"/"}>Home</Link>
                </li>
                <li className=" text-white text-lg flex items-center gap-2">
                  <Link href={"#about"}>About</Link>
                </li>
                <li className=" text-white text-lg flex items-center gap-2">
                  <Link href={"#Pillars_of_Islam"}>Pillars Of Islam</Link>
                </li>
                <li className=" text-white text-lg flex items-center gap-2">
                  <Link href={"#gallery"}>Gallery</Link>
                </li>
                <li className=" text-white text-lg flex items-center gap-2">
                  <Link href={"#contact"}>Contact</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className=" text-[1.375em] font-bold leading-none text-left text-white">
                Quick Links
              </h2>
              <ul className=" space-y-3 py-5">
                <li className=" text-white text-lg flex items-center gap-2">
                  <Link href="#namaz_time">Namaz Timings</Link>
                </li>
                <li className=" text-white text-lg flex items-center gap-2">
                  <Link href={"#faq"}>FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className=" text-[1.375em] font-bold leading-none text-left text-white">
                Contact Us
              </h2>
              <ul className=" py-5 hidden sm:flex text-white items-center gap-2">
                <li>
                  <Link href={""} target="_blank">
                    <FaFacebookF size={24} />
                  </Link>
                </li>
                <li>
                  <Link href={""} target="_blank">
                    <FaTwitter size={24} />
                  </Link>
                </li>
                <li>
                  <Link href={""} target="_blank">
                    <FaInstagram size={24} />
                  </Link>
                </li>
                <li>
                  <Link href={""} target="_blank">
                    <TfiYoutube size={24} />
                  </Link>
                </li>
                <li>
                  <Link href={""} target="_blank">
                    <FaLinkedinIn size={26} />
                  </Link>
                </li>
                <li>
                  <Link href={""} target="_blank">
                    <FaGooglePlusG size={26} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" border-t-2 border-white pb-5 mt-16 lg:mt-24 ">
            <h3 className=" text-lg lg:text-[22px]  text-white pt-5 font-bold text-center">
              TERMS & PRIVACY POLICY
            </h3>
            <p className=" text-sm lg:text-lg text-center font-normal text-white max-w-[1034px] mx-auto">
              By accessing this Site, you accept the Mosques.online Terms and
              Conditions of Use. GeoTech acknowledges and honors the privacy of
              users of www.mosque.online and other services offered through this
              domain (the “Website”).
            </p>
          </div>
        </Container>
      </div>
      <div className=" bg-white py-5">
        <p className=" text-sm lg:text-lg text-center">
          Copyright © 2022 mosques.online. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default dynamic(() => Promise.resolve(Footer), {
  ssr: false,
});
