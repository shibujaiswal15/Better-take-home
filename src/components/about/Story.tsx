"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ButtonPrimary } from "../Buttons";
import { FiPlayCircle } from "react-icons/fi";

export default function Story() {

    const [playVideo, setPlayVideo] = useState<boolean>(false);

    // Prevent scrolling when video is playing
    useEffect(() => {
        if (playVideo) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
        }
    }, [playVideo]);

    return (
        <section id="story" className="flex">
            {
                playVideo && <div className="yt-video flex" onClick={() => setPlayVideo(false)}>
                    <iframe width="1322" height="548" src="https://www.youtube.com/embed/1KjYlLBM9j4" title="Better CEO - Vishal Garg" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ border: 0, borderRadius: "10px" }} onClick={(e) => e.stopPropagation()} />
                </div>
            }

            <div>
                <h2>
                    {"The status quo is broken"}
                </h2>

                <p>
                    {"The traditional processes around homeownership are opaque and stressful. Fees aren't transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It's a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that."}
                </p>

                <ButtonPrimary className="see-stories-btn dark">
                    {"Read Vishal's story"}
                </ButtonPrimary>
            </div>

            <div className="story-img" onClick={() => setPlayVideo(true)}>
                <Image
                    src="/vishal-mission.jpg"
                    alt="Vishal Mission"
                    width={456}
                    height={400}
                />

                <FiPlayCircle className="play-icon" size={80} />
            </div>
        </section>
    );
};
