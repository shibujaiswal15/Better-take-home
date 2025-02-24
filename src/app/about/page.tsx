import dynamic from "next/dynamic";
const ChangingThings = dynamic(() => import("@/components/about/ChangingThings"));
const CompanyTimeline = dynamic(() => import("@/components/about/CompanyTimeline"));
const OurMission = dynamic(() => import("@/components/about/OurMission"));
const Story = dynamic(() => import("@/components/about/Story"));
import { Metadata } from "next";
import "@/styles/about.css";

export const metadata: Metadata = {
    title: "Our Company | Better Mortgage",
    description: "Learn more about Better Mortgage, a leading online mortgage lender."
};

export default function Page() {

    return (
        <main>
            <OurMission />
            <Story />
            <ChangingThings />
            <CompanyTimeline />
        </main>
    );
};
