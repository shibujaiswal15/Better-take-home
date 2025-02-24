"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { ButtonPrimary } from "../Buttons";
import { ICalculatorInput } from "@/helpers/interfaces";
import { useRouter, useSearchParams } from "next/navigation";

export default function Calculator() {

    const searchParams = useSearchParams();
    const router = useRouter();

    const defaultTaxes = searchParams.get("taxes") ? Number(searchParams.get("taxes")) : 265;
    const defaultZip = searchParams.get("zip") ? Number(searchParams.get("zip")) : 302002;

    // State for inputs
    const [inputs, setInputs] = useState<ICalculatorInput>({
        homePrice: 300000,
        downPayment: 60000,
        interestRate: 6.5,
        loanTerm: 30,
        propertyTaxes: defaultTaxes,
        homeInsurance: 132,
        hoaFees: 132,
        utilities: 100,
    });

    const [zip, setZip] = useState<number>(defaultZip);

    // Ref for range input
    const rangeInputRef = useRef<HTMLInputElement>(null);

    // Function to calculate principal and interest
    const calculatePrincipalAndInterest = ({
        homePrice,
        downPayment,
        interestRate,
        loanTerm,
    }: ICalculatorInput): number => {
        const loanAmount = homePrice - downPayment;
        const monthlyInterestRate = interestRate / 100 / 12;
        const numberOfPayments = loanTerm * 12;

        // Standard fixed-rate mortgage formula:
        const principalAndInterest =
            loanAmount *
            ((monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
                (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1));

        return principalAndInterest;
    };

    // Function to format numbers with commas
    const formatNumber = (num: number): string => {
        const formattedNum = num % 1 !== 0 ? num.toFixed(2) : num.toString(); // Round if floating point
        return formattedNum.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Insert commas
    };

    // Memoized principalAndInterest and monthlyPayment
    const principalAndInterest = useMemo(() => calculatePrincipalAndInterest(inputs), [inputs]);

    const monthlyPayment = useMemo(() => principalAndInterest + inputs.propertyTaxes + inputs.homeInsurance + inputs.hoaFees + inputs.utilities, [principalAndInterest, inputs]);

    // Effect to update URL when inputs change
    useEffect(() => {
        // Update URL when taxes or zip change
        const newParams = new URLSearchParams(searchParams.toString());

        newParams.set("taxes", inputs.propertyTaxes.toString());
        newParams.set("zip", defaultZip.toString()); // Keeping zip static for now

        router.push(`?${newParams.toString()}`, { scroll: false });
    }, [inputs.propertyTaxes, inputs.homeInsurance, defaultZip, router, searchParams]);

    // Effect to update range progress
    useEffect(() => {
        const range = rangeInputRef.current;

        const updateRangeProgress = () => {
            if (range) {
                const value = Number(range.value);
                const min = Number(range.min) || 0;
                const max = Number(range.max) || 100;
                const progress = ((value - min) / (max - min)) * 100;
                range.style.setProperty('--range-progress', `${progress}%`);
            }
        };

        range?.addEventListener('input', updateRangeProgress);

        // Initial call to set default value
        updateRangeProgress();

        return () => {
            range?.removeEventListener('input', updateRangeProgress);
        };
    }, [inputs, rangeInputRef]);

    return (
        <>
            <section id="calculator">
                <h2>
                    {"Mortgage calculator"}
                </h2>

                <p className="sub-head">
                    {"Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment."}
                </p>

                <div className="flex hpm">
                    <Input
                        label="home-price"
                        head="Home price"
                        text="$"
                        type="number"
                        value={inputs.homePrice}
                        onChange={(e) => setInputs((prev) => ({ ...prev, homePrice: Number(e.target.value) }))}
                    />

                    <div className="home-price">
                        <span style={{ fontWeight: "600" }}>
                            {"Monthly payment"}
                        </span>

                        <div className="fix disabled flex">
                            <div>{"$" + formatNumber(monthlyPayment) + "/mo"}</div>
                        </div>
                    </div>

                    <ButtonPrimary className="see-stories-btn dark">
                        {"Get pre-approved"}
                    </ButtonPrimary>
                </div>

                <div className="range">
                    <input
                        ref={rangeInputRef}
                        type="range"
                        name="h-price"
                        id="h-price"
                        min="50000"
                        max="3000000"
                        step="1000"
                        value={inputs.homePrice}
                        onChange={(e) =>
                            setInputs((prev) => ({ ...prev, homePrice: Number(e.target.value) }))
                        }
                    />
                </div>

                <div className="flex dp">
                    <div className="flex">
                        <Input
                            label="zip"
                            head="ZIP code"
                            type="number"
                            value={zip}
                            onChange={(e) => setZip(Number(e.target.value || 0))}
                        />

                        <label htmlFor={"down-payment"} className={"down-payment"}>
                            <span>
                                {"Down payment"}
                            </span>

                            <div className="fix flex">
                                <input
                                    id="down-payment"
                                    type="number"
                                    value={inputs.downPayment}
                                    onChange={(e) => setInputs((prev) => ({ ...prev, downPayment: Number(e.target.value) }))}
                                />
                            </div>
                        </label>
                    </div>

                    <div className="flex">
                        <Input
                            label="interest-rate"
                            head="Interest rate"
                            type="number"
                            value={inputs.interestRate}
                            onChange={(e) => setInputs((prev) => ({ ...prev, interestRate: Number(e.target.value) }))}
                        />

                        <Input
                            label="loan-length"
                            head="Length of loan (years)"
                            dropdownItems={[30, 20, 15]}
                            value={inputs.loanTerm}
                            selectedItem={inputs.loanTerm}
                            setDropDownItem={(item) => setInputs((prev) => ({ ...prev, loanTerm: (item as number) }))}
                        />
                    </div>
                </div>
            </section>

            <section id="payment-breakdown">
                <div className="flex">
                    <div>
                        <h3>
                            {"Monthy payment breakdown"}
                        </h3>

                        <div className="payment-breakdown">
                            {"$" + formatNumber(monthlyPayment) + "/mo"}
                        </div>

                        <div className="flex payment-breakdown-visual" style={{ width: "700px", maxWidth: "95vw" }}>
                            {
                                [principalAndInterest, inputs.propertyTaxes, inputs.homeInsurance, inputs.hoaFees, inputs.utilities].map((item, idx) => {
                                    const total = principalAndInterest + inputs.propertyTaxes + inputs.homeInsurance + inputs.hoaFees + inputs.utilities;

                                    const calculatedWidth = total > 0 ? `${(item / total) * 100}%` : "0%";
                                    console.log(calculatedWidth, item);

                                    return <div
                                        key={idx}
                                        className={`visual-${idx}`}
                                        style={{ width: calculatedWidth }}
                                    />
                                })
                            }
                        </div>
                    </div>

                    <div className="other-params">
                        <div className="flex" style={{ paddingBottom: "2rem" }}>
                            <div className="v-1">
                                {"Principal & interest"}
                            </div>
                            <div style={{ width: "150px" }}>
                                {"$" + formatNumber(principalAndInterest)}
                            </div>
                        </div>
                        <div className="flex">
                            <div className="v-2">
                                {"Property taxes"}
                            </div>
                            <Input
                                label="property-taxes"
                                text="$"
                                type="number"
                                value={inputs.propertyTaxes}
                                onChange={(e) => setInputs((prev) => ({ ...prev, propertyTaxes: Number(e.target.value) }))}
                            />
                        </div>
                        <div className="flex">
                            <div className="v-3">
                                {"Homeowners insurance"}
                            </div>
                            <Input
                                label="home-insurance"
                                text="$"
                                type="number"
                                value={inputs.homeInsurance}
                                onChange={(e) => setInputs((prev) => ({ ...prev, homeInsurance: Number(e.target.value) }))}
                            />
                        </div>
                        <div className="flex">
                            <div className="v-4">
                                {"HOA fees"}
                            </div>
                            <Input
                                label="hoa-fees"
                                text="$"
                                type="number"
                                value={inputs.hoaFees}
                                onChange={(e) => setInputs((prev) => ({ ...prev, hoaFees: Number(e.target.value) }))}
                            />
                        </div>
                        <div className="flex">
                            <div className="v-5">
                                {"Utilities"}
                            </div>
                            <Input
                                label="utilities"
                                text="$"
                                type="number"
                                value={inputs.utilities}
                                onChange={(e) => setInputs((prev) => ({ ...prev, utilities: Number(e.target.value) }))}
                            />
                        </div>
                        <div className="flex">
                            <button className="copy-link-btn" onClick={() => window.navigator.clipboard.writeText(window.location.href)}>
                                {"Copy estimate link"}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    head?: string;
    text?: string;
    selectedItem?: string | number;
    dropdownItems?: string[] | number[];
    setDropDownItem?: (item: string | number) => void;
}

const Input = ({ label, head, text, dropdownItems, selectedItem, setDropDownItem, ...props }: IInputProps) => {

    if (dropdownItems) {
        return (
            <label htmlFor={label} className={label}>
                {head && <span>{head}</span>}

                <div className="fix flex">
                    {text}
                    <select id={label} onChange={(e) => setDropDownItem && setDropDownItem(e.target.value)}>
                        {dropdownItems.map((item, i) => (
                            <option
                                key={i}
                                value={item}
                                className={`${selectedItem === item && "selected"}`}
                            >
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
            </label>
        );
    }

    return (
        <label htmlFor={label} className={label}>
            {head && <span>{head}</span>}

            <div className="fix flex">
                {text}
                <input id={label} {...props} />
            </div>
        </label>
    );
};


