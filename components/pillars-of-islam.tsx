import { PillarsOfIslamData } from "@/constant/data";
import Image from "next/image";
import Container from "./container";

const PillarsOfIslam = () => {
  return (
    <section
      id="Pillars_of_Islam"
      className="s bg-pillars-of-islam bg-no-repeat bg-cover w-full h-full min-h-[632px] grid place-items-center  py-16"
    >
      <Container>
        <div>
          <p className="sub-heading text-center text-white leading-tight ">
            Associated Mosquet
          </p>
          <h2 className="heading1 text-center leading-tight text-white">
            Pillars Of Islam
          </h2>
        </div>
        <div className="grid pt-20 grid-cols-3 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {PillarsOfIslamData.map((data) => (
            <div key={data.id}>
              <Image
                className=" w-[75%] sm:w-[55%] lg:w-[85%] block mx-auto"
                src={data.icon}
                alt={data.name}
              />
              <div className=" pt-4">
                <h2 className="text-shadow leading-[19px] text-center text-[1em] sm:text-[1.75em] font-bold text-white">
                  {data.name}
                </h2>
                <h2 className="text-shadow text-center text-[1em] sm:text-[1.75em] font-bold text-white">
                  ({data.surname})
                </h2>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PillarsOfIslam;
