import Image from "next/image";
import { ButtonPrimary } from "./Buttons";
import { CiStopwatch } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa6";
import "@/styles/hero.css";

export default function Hero() {

    return (
        <section id="hero">
            <div>
                <h2>
                    {"Mortgages made simple"}
                </h2>

                <div className="flex">
                    <div>
                        <ButtonPrimary>
                            {"Start my approval"}
                        </ButtonPrimary>
                        <p
                            className="flex"
                            style={{ padding: "0.8rem", alignItems: "center", gap: "0.5rem" }}
                        >
                            <CiStopwatch size={22} />
                            {"3 min | No credit impact"}
                        </p>
                    </div>

                    <div className="google-ratings">
                        <div className="flex" style={{ gap: "0.3rem", color: "orange", alignItems: "center" }}>
                            <FcGoogle size={32} />
                            <FaStar size={25} />
                            <FaStar size={25} />
                            <FaStar size={25} />
                            <FaStar size={25} />
                            <FaStar size={25} />
                        </div>
                        <p>
                            {"4.6 stars | 3177 Google reviews"}
                        </p>
                    </div>
                </div>
            </div>

            <Image
                src="/hero-variant.webp"
                alt="Better"
                className="hero-variant"
                width={593}
                height={776}
                loading="eager"
                priority
            />
        </section>
    );
}
