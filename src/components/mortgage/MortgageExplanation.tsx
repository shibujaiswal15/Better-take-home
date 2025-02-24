import Image from "next/image";

export default function MortgageExplanation() {

    return (
        <section id="mortgage-explanation">
            <div className="topic">
                <h2 className="question">
                    {"How does mortgage calculator help me?"}
                </h2>

                <div className="answer">
                    <div>
                        {"When deciding how much house you can afford, one of the most important pieces to determine is whether a home will fit into your monthly budget. A mortgage calculator helps you understand the monthly cost of a home. And ours will allow you to enter different down payments and interest rates to help determine what is affordable for you."}
                    </div>
                </div>
            </div>

            <div className="topic">
                <h2 className="question">
                    {"How much monthly mortgage payment can I afford?"}
                </h2>

                <div className="answer">
                    <div>
                        {"Lenders determine how much you can afford on a monthly housing payment by calculating your debt-to-income ratio (DTI). The maximum DTI you can have in order to qualify for most mortgage loans is often between 45-50%, with your anticipated housing costs included."}
                    </div>

                    <div>
                        {"Your DTI is the balance between your income and your debt. It helps lenders understand how safe or risky it is for them to approve your loan. A DTI ratio represents how much of your gross monthly income is spoken for by creditors, and how much of it is left over to you as disposable income. It's most commonly written as a percentage. For example, if you pay half your monthly income in debt payments, you would have a DTI of 50%."}
                    </div>

                    <div className="explanation">
                        {"Formula for calculating your debt-to-income (DTI) ratio:"}
                        <Image
                            src="/dti-formula.jpg"
                            alt="DTI formula"
                            width={780}
                            height={153}
                        />

                        {"Here's an example of what calculating your DTI might look like:"}
                        <Image
                            src="/dti-example.jpg"
                            alt="DTI example"
                            width={780}
                            height={525}
                        />
                    </div>
                </div>
            </div>

            <div className="topic">
                <h2 className="question">
                    {"How to calculate monthly mortgage payments?"}
                </h2>

                <div className="answer">
                    <div>
                        {"Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance, and mortgage insurance (PMI), if applicable. While not typically included in your mortgage payment, homeowners also pay monthly utilities and sometimes pay homeowners association (HOA) fees, so it's a good idea to factor these into your monthly budget. This mortgage calculator factors in all these typical monthly costs so you can really crunch the numbers."}
                    </div>

                    <h3>
                        {"Formula for calculating monthly mortgage payments"}
                    </h3>

                    <div>
                        {"The easiest way to calculate your mortgage payment is to use a calculator, but for the curious or mathematically inclined, here's the formula for calculating principal and interest yourself:"}
                    </div>

                    <div className="explanation">
                        <Image
                            src="/monthly-mortgage-payments-formula.jpg"
                            alt="Monthly mortgage payment formula"
                            width={780}
                            height={126}
                        />

                        <div>
                            {"Where:"}
                        </div>

                        <ul>
                            <li>{"M is monthly mortgage payments"}</li>
                            <li>{"P is the principal loan amount (the amount you borrow)"}</li>
                            <li>{"r is the monthly interest rate"}</li>
                            <li>{"n is the total number of payments in months"}</li>
                        </ul>

                        <div>
                            {"Here's a simple example:"}
                        </div>

                        <Image
                            src="/monthly-mortgage-payments-example.jpg"
                            alt="Monthly mortgage payment formula"
                            width={780}
                            height={221}
                        />
                    </div>

                    <div>
                        {"This formula assumes a fixed-rate mortgage, where the interest rate remains constant throughout the loan term. And remember, you’ll still need to add on taxes, insurance, utilities, and HOA fees if applicable."}
                    </div>
                </div>
            </div>

            <div className="topic">
                <h2 className="question">
                    {"How to use this mortgage calculator?"}
                </h2>

                <div className="answer">
                    <div>
                        {"Play around with different home prices, locations, down payments, interest rates, and mortgage lengths to see how they impact your monthly mortgage payments."}
                    </div>

                    <div>
                        {"Increasing your down payment and decreasing your interest rate and mortgage term length will make your monthly payment go down. Taxes, insurance, and HOA fees will vary by location. If you enter a down payment amount that's less than 20% of the home price, private mortgage insurance (PMI) costs will be added to your monthly mortgage payment. As the costs of utilities can vary from county to county, we've included a utilities estimate that you can break down by service. If you're thinking about buying a condo or into a community with a Homeowners Association (HOA), you can add HOA fees."}
                    </div>

                    <div>
                        {"The only amounts we haven't included are the money you'll need to save for annual home maintenance/repairs or the costs of home improvements. To see how much home you can afford including these costs, take a look at the Better home affordability calculator."}
                    </div>

                    <div>
                        {"Fun fact: Property tax rates are extremely localized, so two homes of roughly the same size and quality on either side of a municipal border could have very different tax rates. Buying in an area with a lower property tax rate may make it easier for you to afford a higher-priced home."}
                    </div>
                </div>
            </div>
        </section>
    );
};
