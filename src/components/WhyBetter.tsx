"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useHeader } from "@/context/HeaderContext";
import { whyBetterData } from "@/helpers/constants";
import { ButtonPrimary, ButtonSecondary } from "./Buttons";
import { IoIosStar } from "react-icons/io";
import "@/styles/why_better.css";

export default function WhyBetter() {

    const { setIsHome } = useHeader();

    const [wBetter, setWBetter] = useState<number>(0);
    const sectionRef = useRef<HTMLElement>(null);

    // Set isHome to true when user scrolls to the top of the page
    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                if (rect.top <= 80) {
                    setIsHome(false);
                } else {
                    setIsHome(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setIsHome]);

    return (
        <section ref={sectionRef} id="why-better" className="flex">
            <div className="flex">
                <Image
                    src={whyBetterData[wBetter].image}
                    alt={whyBetterData[wBetter].name}
                    width={341}
                    height={606}
                    className="w-better-img"
                />

                <div className="flex w-better-container">
                    {
                        whyBetterData.map((item, idx) => (
                            <ButtonSecondary
                                key={idx}
                                onClick={() => setWBetter(idx)}
                                className={`${whyBetterData[wBetter].name === item.name && "active"} w-better-btn`}
                            >
                                {item.name}
                            </ButtonSecondary>
                        ))
                    }
                </div>
            </div>

            <div>
                <p className="w-better-text">
                    {"Find out why we're better"}
                </p>

                <ButtonPrimary className="see-stories-btn dark">
                    {"See all our stories"}
                </ButtonPrimary>

                <div className="trustpilot flex">
                    <span className="icon">
                        <IoIosStar size={20} />
                    </span>
                    <span className="main-txt">
                        {"Trustpilot"}
                    </span>
                    <span className="sub-txt">
                        {"Excellent 4.4"}
                    </span>
                    <span>
                        {" out of 5"}
                    </span>
                </div>
            </div>
        </section>
    );
};