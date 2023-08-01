import event1 from "@/assets/images/event1.svg"
import Image from "next/image"
import Link from "next/link"
import { FaUserAlt } from "react-icons/fa"
import { MdOutlineDateRange } from "react-icons/md"
import Container from "./container"
const OurEventsBlog = () => {
    return (
        <section id="events" className=" py-10">
            <Container>
                <div>
                    <p className="sub-heading  leading-[1.70] lg:leading-[2.40] text-center ">Events & Blog</p>
                    <h2 className="heading1 leading-none text-center">Our Events & Blog</h2>
                </div>
                <div className=" pt-10 grid gap-6 grid-cols-12">
                    <div className=" col-span-7 space-y-4" >

                        <div className=" bg-white flex  shadow-4xl ">
                            <div className=" basis-[40%]">
                                <Image className=" w-full h-full object-cover" src={event1} alt="dfd" />
                            </div>
                            <div className="  py-5 px-6  basis-[60%] space-y-3">
                                <h3 className=" text-secondary text-[1.375em] font-bold">Is Islam Old Philosophy?</h3>
                                <ul className=" flex items-center justify-between">
                                    <li className=" inline-flex items-center gap-1">
                                        <MdOutlineDateRange size={20} className="text-primary" />
                                        <span className=" text-base lg:text-lg"> Jan 6,2022</span>
                                    </li>
                                    <li className=" inline-flex items-center gap-1">
                                        <FaUserAlt size={20} className="text-primary" />
                                        <span className=" text-base lg:text-lg">Imam Ullah</span>
                                    </li>
                                </ul>
                                <p className=" text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                </p>
                                <Link href={""} className="text-[#0D716C] pt-4 text-base"> View Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className=" col-span-5">2</div>
                </div>
            </Container>
        </section>
    )
}

export default OurEventsBlog