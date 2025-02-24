import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/Hero"));
const WhyBetter = dynamic(() => import("@/components/WhyBetter"));
const GotQuestions = dynamic(() => import("@/components/GotQuestions"));
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Simple, Online Mortgage | Better Mortgage",
    description: "Get a better mortgage with Better Mortgage. Apply online and get a decision in minutes."
};

export default function Page() {

    return (
        <main>
            <Hero />
            <WhyBetter />
            <GotQuestions />
        </main>
    );
};
