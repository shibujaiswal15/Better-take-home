
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export interface IWhyBetter {
    name: string;
    image: string;
}

export interface IGotQuestions {
    title: string;
    description: string;
    image: string;
}

export interface IGotQuestionCategory {
    categoryName: string;
    questions: IGotQuestions[];
}

export interface ICalculatorInput {
    homePrice: number;
    downPayment: number;
    interestRate: number;
    loanTerm: number;
    propertyTaxes: number;
    homeInsurance: number;
    hoaFees: number;
    utilities: number;
}
