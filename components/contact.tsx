"use client";

import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";

import { contact_image } from "@/assets/images";
import dynamic from "next/dynamic";
import Image from "next/image";
import Container from "./container";

const Contact = () => {
  const [isClient, setIsClient] = useState(false);

  const [varified, setVarified] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  function onChange(value: any) {
    console.log("Captcha value:", value);
    setVarified(true);
  }
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="contact" className=" py-6 lg:py-14">
      <Container>
        <div className="">
          <div className=" grid gap-10 lg:gap-12 lg:grid-cols-2">
            <div>
              <Image
                className=" mx-auto  w-full  h-full "
                src={contact_image}
                alt="contact_assets"
              />
            </div>
            <div>
              <h2 className=" heading1">Contact Us</h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                action="#"
                className=" space-y-5"
              >
                <div>
                  <input
                    type="text"
                    id="email"
                    {...register("email")}
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <input
                    type="textt"
                    {...register("Title_Subject")}
                    id="Title_Subject"
                    placeholder="Title/Subject"
                  />
                </div>
                <div>
                  <textarea
                    {...register("message")}
                    id="message"
                    className=" h-[158px]"
                    placeholder="Write your message.."
                  />
                </div>
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={onChange}
                />
                <button
                  type="submit"
                  disabled={!varified}
                  className="btn bg-primary hover:bg-opacity-90"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Contact), {
  ssr: false,
});
