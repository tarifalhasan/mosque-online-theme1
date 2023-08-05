import { history_image } from "@/assets/images";
import Image from "next/image";
import Container from "./container";

const About = () => {
  return (
    <section id="m_about" className=" relative  ">
      <Container>
        <div className="flex gap-10 lg:justify-between flex-col lg:flex-row lg:items-center">
          <div className=" space-y-5 w-full lg:basis-1/2">
            <div>
              <p className="sub-heading text-left leading-tight ">
                Few Words About
              </p>
              <h2 className="heading1 text-left leading-tight">
                History Of Center
              </h2>
            </div>
            <p className="text-base sm:text-lg font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <span className=" block font-bold">
              The Mosque is the #1 Islamic Center in the Country!
            </span>
            <ul className="  grid marker:text-primary list-inside list-disc gap-1 grid-cols-2">
              <li className="text-sm lg:text-lg">Astonishing Facilities </li>
              <li className="text-sm lg:text-lg"> Helping Communities</li>
              <li className="text-sm lg:text-lg">Leads Charity Events</li>
              <li className="text-sm lg:text-lg">Schooling Children </li>
              <li className="text-sm lg:text-lg">Feeding HungryPeople </li>
              <li className="text-sm lg:text-lg">Providing Homes</li>
            </ul>
            <button className="btn bg-primary">Learn More</button>
          </div>
          <div>
            <Image
              className=" max-w-[523.18px] max-h-[523.18px] w-full h-full object-cover"
              src={history_image}
              alt="history"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
