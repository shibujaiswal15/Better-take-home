import { IGotQuestionCategory, IWhyBetter } from "./interfaces";
import { AiOutlineHome, AiOutlineDollarCircle } from "react-icons/ai";
import { CgSmartHomeHeat } from "react-icons/cg";
import { FcMoneyTransfer } from "react-icons/fc";
import { TbCirclePercentage } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";


export const whyBetterData: IWhyBetter[] = [
    {
        name: "Arian",
        image: "/still-quote-Arian.webp"
    },
    {
        name: "Amanda",
        image: "/still-quote-Amanda.webp"
    },
    {
        name: "Paul",
        image: "/still-quote-Paul.webp"
    },
];

export const gotQuestionsData: IGotQuestionCategory[] = [
    {
        categoryName: "Our Products",
        questions: [
            {
                title: "Buying your first home with Better",
                description: "",
                image: "/first-home.webp",
            },
            {
                title: "One Day Mortgage",
                description: "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.",
                image: "/one-day-mortgage.webp",
            },
            {
                title: "Better HELOC",
                description: "Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit2. Access up to 90% of your home equity as cash in as little as 7 days.",
                image: "/better-heloc.webp",
            },
            {
                title: "Insurance",
                description: "",
                image: "/insurance.webp",
            },
        ]
    },
    {
        categoryName: "Calculators",
        questions: [
            {
                title: "Mortgage calculator",
                description: "",
                image: "/mortgage-calculator.webp",
            },
            {
                title: "Affordability calculator",
                description: "Got homeownership dreams? Let's put some numbers behind them. Our affordability calculator estimates the maximum home you can afford.",
                image: "/affordability-calculator.webp",
            },
            {
                title: "HELOC calculator",
                description: "Need cash? Quickly see how much equity you can borrow from your home and what your monthly payments might be.",
                image: "/heloc-calculator.webp",
            },
            {
                title: "Fixed-rate loan comparison calculator",
                description: "",
                image: "/fixed-rate-calculator.webp",
            },
        ]
    },
    {
        categoryName: "Guides & FAQs",
        questions: [
            {
                title: "What is a good debt-to-income ratio for a home loan?",
                description: "",
                image: "/good-dti.webp",
            },
            {
                title: "Buying a house without realtor",
                description: "Thinking about buying a house without a real estate agent? Read this first.",
                image: "/buy-house-without-realtor.webp",
            },
            {
                title: "Timeline for homebuying process",
                description: "Does the process of buying a home seem daunting? Don't stress, we broke it down into 8 easy steps.",
                image: "/loan-timeline.webp",
            },
            {
                title: "Conventional loan requirements",
                description: "",
                image: "/conventional-loan.webp",
            },
        ]
    },
];

export const footLinkResources = [
    "Home affordability calculator",
    "Mortgage calculator",
    "Free mortgage calculator",
    "Mortgage calculator with taxes",
    "Mortgage calculator with PMI",
    "Rent vs buy calculator",
    "HELOC payment calculator",
    "HELOC vs cash-out refinance calculator",
    "Buy a home",
    "Sell a home",
    "Get home inspection",
];

export const footLinkCompany = [
    "About Us",
    "Careers",
    "Media",
    "Patner with us",
    "Learning center",
    "FAQs",
    "Investor relations",
];

export const footLinkContact = [
    "hello@better.com",
    "415-523-8837",
    "FAQ",
    "Glossary",
];

export const footLinkLegal = [
    "NMLS Consumer Access",
    "Privacy Policy",
    "Terms of use",
    "Disclosures & Licensing",
    "Affiliate Business",
    "Browser Disclaimer",
];

export const companyTimeline = [
    {
        year: "2014",
        desc: [
            "After Vishal Garg's first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all."
        ]
    },
    {
        year: "2015",
        desc: [
            "Better Mortgage funds its first mortgage loan entirely online (without a single phone call!)."
        ]
    },
    {
        year: "2016",
        desc: [
            "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors."
        ]
    },
    {
        year: "2017",
        desc: [
            "Better expands into the real estate market with Better Real Estate."
        ]
    },
    {
        year: "2018",
        desc: [
            "Better Mortgage partners with Ally Bank to build Ally powered by Better."
        ]
    },
    {
        year: "2019",
        desc: [
            "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers."
        ]
    },
    {
        year: "2021",
        desc: [
            "Better acquires Trussle — The UK's most innovative online mortgage broker."
        ]
    },
    {
        year: "2022",
        desc: [
            "Better Mortgage becomes the first fintech to fund $100B home loans entirely online."
        ]
    },
    {
        year: "2023",
        desc: [
            "Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.",
            "Better Mortgage launches the fully digital 3-day HELOC².",
            "Better Mortgage launches One Day Verified Approval Letter."
        ]
    },
    {
        year: "Today",
        desc: [
            "You become part of the story by joining tens of thousands of happy Better Mortgage borrowers."
        ]
    }
];

export const startLinks = [
    {
        icon: AiOutlineHome,
        title: "Buying a home",
        href: "/",
    },
    {
        icon: CgSmartHomeHeat,
        title: "Refinance my mortgage",
        href: "/",
    },
    {
        icon: FcMoneyTransfer,
        title: "Get cash from my home",
        href: "/",
    },
];

export const unlock = [
    {
        icon: TbCirclePercentage,
        title: "Custom mortgage rates",
    },
    {
        icon: AiOutlineDollarCircle,
        title: "Exclusive offers",
    },
    {
        icon: FaMobileAlt,
        title: "A personalized dashboard",
    },
];
