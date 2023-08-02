import Link from "next/link";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaLinkedinIn,
  FaMoon,
  FaSun,
  FaTwitter,
} from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import Container from "../container";
const TopHeader = () => {
  return (
    <Container className="">
      <div className=" relative">
        <div className="flex lg:absolute left-0 top-0 right-0  mt-2 items-center justify-center lg:justify-end">
          <div className=" border-b border-black flex flex-col sm:pb-2 sm:flex-row items-center gap-2 sm:gap-4">
            <ul className=" flex items-center gap-4">
              <li className=" flex items-center gap-1">
                <FaSun className=" text-sm  text-primary" />
                <span className=" text-black">
                  Sunrise At: <span className=" text-primary">6:10 AM </span>
                </span>
              </li>
              <li className=" flex items-center gap-1">
                <FaMoon className=" text-sm  text-primary" />
                <span className=" text-black">
                  Sunset At: <span className=" text-primary">3:55 PM </span>
                </span>
              </li>
            </ul>
            <ul className=" hidden sm:flex items-center gap-2">
              <li>
                <Link href={""} target="_blank">
                  <FaFacebookF className="text-lg" />
                </Link>
              </li>
              <li>
                <Link href={""} target="_blank">
                  <FaTwitter className="text-lg" />
                </Link>
              </li>
              <li>
                <Link href={""} target="_blank">
                  <FaInstagram className="text-lg" />
                </Link>
              </li>
              <li>
                <Link href={""} target="_blank">
                  <TfiYoutube className="text-lg" />
                </Link>
              </li>
              <li>
                <Link href={""} target="_blank">
                  <FaLinkedinIn className="text-lg" />
                </Link>
              </li>
              <li>
                <Link href={""} target="_blank">
                  <FaGooglePlusG className="text-lg" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TopHeader;
