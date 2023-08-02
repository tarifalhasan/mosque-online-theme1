import gallery_image1 from "@/assets/images/g1.svg";
import gallery_image2 from "@/assets/images/g2.svg";
import gallery_image3 from "@/assets/images/g3.svg";
import Image from "next/image";
import Container from "./container";
const OurGallery = () => {
  return (
    <section id="gallery">
      <Container className=" space-y-5">
        <div>
          <p className="sub-heading  leading-[1.70] lg:leading-[2.40] text-center ">
            Associated Mosque
          </p>
          <h2 className="heading1 leading-none text-center">Our Gallery</h2>
        </div>
        <p className=" mx-auto text-base  text-center lg:text-lg lg:max-w-[85%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>

        <div className=" grid gap-6 grid-cols-12">
          <div className="  col-span-12 lg:col-span-7">
            <Image
              className=" w-full h-full object-cover"
              src={gallery_image1}
              alt="gallery_1"
            />
          </div>
          <div className=" col-span-12 lg:col-span-5">
            <div className=" grid gap-y-6 grid-rows-2">
              <Image
                className=" w-full h-full object-cover"
                src={gallery_image3}
                alt="gallery_3"
              />
              <Image
                className=" w-full h-full object-cover"
                src={gallery_image2}
                alt="gallery_2"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="btn bg-primary">View More</button>
        </div>
      </Container>
    </section>
  );
};

export default OurGallery;
