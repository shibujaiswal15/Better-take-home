import Image from "next/image";
import Link from "next/link";
import { IoMdCall } from "react-icons/io";

export default function StartHeader() {

    return (
        <header id="start-header" className="flex">
            <h1>
                <span>
                    {"Better"}
                </span>
                <span>
                    {"Mortgage"}
                </span>
            </h1>

            <Link href="tel:4155238837" className="flex">
                <IoMdCall className="tel-icon" />
                <span className="desktop">
                    {" Need help? Call (415) 523-8837"}
                </span>
            </Link>

            <Image
                src="/betty1.jpg"
                alt="Betty"
                width={50}
                height={50}
                className="betty-img"
            />
        </header>
    );
};
