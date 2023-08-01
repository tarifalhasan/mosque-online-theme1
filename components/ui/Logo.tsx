import logo from "@/assets/images/logo.svg"
import Image from 'next/image'
import Link from 'next/link'
const Logo = () => {
    return (
        <Link href={"/"}>
            <Image className=" w-16 h-24 lg:w-28 lg:h-[110px]" src={logo} alt='logo' />
        </Link>
    )
}

export default Logo