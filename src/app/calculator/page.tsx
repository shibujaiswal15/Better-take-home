import dynamic from "next/dynamic";
const Calculator = dynamic(() => import("@/components/mortgage/Calculator"));
const MortgageExplanation = dynamic(() => import("@/components/mortgage/MortgageExplanation"));
import { Suspense } from "react";
import { Metadata } from "next";
import "@/styles/mortgage.css";

export const metadata: Metadata = {
    title: "Mortgage Calculator | Better Mortgage",
    description: "Calculate your mortgage payments with our mortgage calculator."
};

export default function Page() {

    return (
        <main>
            <Suspense>
                <Calculator />
            </Suspense>
            <MortgageExplanation />
        </main>
    );
};
