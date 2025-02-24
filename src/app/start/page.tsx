import dynamic from "next/dynamic";
const Start = dynamic(() => import("@/components/start/Start"));
const StartHeader = dynamic(() => import("@/components/start/StartHeader"));
import { Metadata } from "next";
import "@/styles/start.css";

export const metadata: Metadata = {
    title: "Start | Better Mortgage",
    description: "Start your mortgage application with Better Mortgage."
};

export default function Page() {

    return (
        <>
            <StartHeader />
            <main>
                <Start />
            </main>
        </>
    );
};