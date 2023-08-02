import { EventsCardTypes } from "@/types";
import Link from "next/link";
import { BiSolidTime } from "react-icons/bi";
import { FaLocationPin } from "react-icons/fa6";

const EventsCard: React.FC<EventsCardTypes> = ({
  title,
  month,
  location,
  slug = "",
  day,
  authorName,
  backgroundImage,
}) => {
  return (
    <div
      className={`flex  ${
        backgroundImage !== null
          ? "text-white"
          : " text-black  bg-white shadow-event-card"
      } py-4 px-4  gap-4`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="">
        <h3 className={`text-[3.75em] leading-none font-bold`}>{day}</h3>
        <span className=" text-2xl font-bold">{month}</span>
      </div>
      <div className=" ">
        <h3 className=" text-[1.375em] leading-none font-bold">{title}</h3>
        <ul className=" flex py-2 gap-3 items-center justify-between">
          <li className=" inline-flex  items-center gap-1">
            <FaLocationPin size={20} />
            <span className=" text-sm xl:text-base">{location}</span>
          </li>
          <li className=" inline-flex items-center gap-1">
            <BiSolidTime size={20} />
            <span className="text-sm xl:text-base">{authorName}</span>
          </li>
        </ul>
        <Link
          href={slug}
          className={`${
            backgroundImage !== null ? "text-white" : " text-[#0D716C]"
          } mt-10 text-base`}
        >
          {" "}
          View Details
        </Link>
      </div>
    </div>
  );
};

export default EventsCard;
