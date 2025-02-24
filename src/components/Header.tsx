"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdCall } from "react-icons/io";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { FaCaretRight } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import "@/styles/header.css";
import { useHeader } from "@/context/HeaderContext";
import { usePathname } from "next/navigation";

const Header = () => {

    const [hamActive, setHamActive] = useState<boolean>(false);

    const { isHome } = useHeader();

    const pathname = usePathname();

    const toggleHamBurger = () => setHamActive(!hamActive);

    useEffect(() => {
        setHamActive(false);
    }, [pathname]);

    if (pathname.includes("/start")) return null;

    return (
        <header className={`${isHome && "home"} flex`}>
            <div className="flex">
                <h1>
                    <Link href="/">{"Better"}</Link>
                </h1>

                <Link className="desktop" href="/about">{"About Us"}</Link>
                <Link className="desktop" href="/calculator">{"Mortgage Calculator"}</Link>
                <Link className="desktop" href="/start">{"Start Page"}</Link>
            </div>

            <div className="flex">
                <Link href="tel:1234567890" className="call flex" aria-label="Call Us">
                    <IoMdCall />
                </Link>
                <Link className="desktop" href="/">{"Sign in"}</Link>
                <Link href="/" className="continue">{"Continue"}</Link>

                <button className="mobile" onClick={toggleHamBurger} aria-label="Open Menu">
                    <RxHamburgerMenu size={22} />
                </button>
            </div>

            <div className={`sidebar mobile ${hamActive && "active"}`}>
                <div className="flex head">
                    <h2>{"Better"}</h2>

                    <button onClick={toggleHamBurger} aria-label="Close Menu">
                        <RxCross2 size={32} />
                    </button>
                </div>

                <Link className="flex" href="/about">
                    {"About Us"}
                    <FaCaretRight size={16} />
                </Link>
                <Link className="flex" href="/calculator">
                    {"Mortgage Calculator"}
                    <FaCaretRight size={16} />
                </Link>
                <Link className="flex" href="/start">
                    {"Start Page"}
                    <FaCaretRight size={16} />
                </Link>

                <Link className="mob-call flex" href="tel:1234567890">
                    <IoMdCall size={24} />
                    {"Call us anytime at (123)4567890"}
                </Link>

                <div className="foot">
                    <Link href="/" className="continue">{"Continue"}</Link>
                    <Link href="/" className="mob-sign flex">
                        {"Sign in"}
                        <FaUser size={14} />
                    </Link>
                </div>
            </div>
        </header>
    )
};

export default Header;

