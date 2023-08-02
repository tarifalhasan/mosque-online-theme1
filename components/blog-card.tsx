import { BlogCardProps } from "@/types"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { FaUserAlt } from "react-icons/fa"
import { MdOutlineDateRange } from "react-icons/md"




const BlogCard: React.FC<BlogCardProps> = ({ title, image, description, link = "", authorName, date }) => {
    return (
        <div className=" bg-white flex  md:flex-row flex-col shadow-4xl ">
            <div className=" basis-[40%]">
                <Image className=" w-full h-full object-cover" src={image} alt="dfd" />
            </div>
            <div className="  py-5 px-6  basis-[60%] space-y-3">
                <h3 className=" text-secondary text-[1.375em] font-bold">{title}</h3>
                <ul className=" flex items-center justify-between">
                    <li className=" inline-flex items-center gap-1">
                        <MdOutlineDateRange size={20} className="text-primary" />
                        <span className=" text-base lg:text-lg">{date}</span>
                    </li>
                    <li className=" inline-flex items-center gap-1">
                        <FaUserAlt size={20} className="text-primary" />
                        <span className=" text-base lg:text-lg">{authorName}</span>
                    </li>
                </ul>
                <p className=" text-base">{description}
                </p>
                <Link href={link} className="text-[#0D716C] pt-4 text-base"> View Details</Link>
            </div>
        </div>
    )
}

export default BlogCard