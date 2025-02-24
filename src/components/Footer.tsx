import Link from "next/link";
import { footLinkCompany, footLinkContact, footLinkLegal, footLinkResources } from "@/helpers/constants";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import "@/styles/footer.css";

export default function Footer() {

    return (
        <footer>
            <h2 className="better">
                {"Better"}
            </h2>

            <div className="flex">
                <div className="flex" style={{ maxWidth: "400px" }}>
                    <p>
                        {"Better is a family of companies serving all your homeownership needs."}
                    </p>

                    <FootBetter
                        title="Mortgage"
                        desc="We can't wait to say “Welcome home.” Apply 100% online, with expert customer support."
                    />

                    <FootBetter
                        title="Real Estate"
                        desc="Connect with a local Better Real Estate Partner Agent to find out all the ways you can save."
                    />

                    <FootBetter
                        title="Cover"
                        desc="Shop, bundle, and save on insurance coverage for home, auto, life, and more."
                    />

                    <FootBetter
                        title="Inspect"
                        desc="Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee."
                    />

                    <FootBetter
                        title="Settlement Services"
                        desc="Get transparent rates when you shop for title insurance all in one convenient place."
                    />
                </div>

                <div className="flex">
                    <p className="sub-head">
                        {"Resources"}
                    </p>

                    {
                        footLinkResources.map((link, idx) => (
                            <Link key={idx} href="/" className="foot-link">
                                {link}
                            </Link>
                        ))
                    }
                </div>

                <div className="flex">
                    <p className="sub-head">
                        {"Company"}
                    </p>

                    {
                        footLinkCompany.map((link, idx) => (
                            <Link key={idx} href="/" className="foot-link">
                                {link}
                            </Link>
                        ))
                    }
                </div>

                <div className="flex">
                    <p className="sub-head">
                        {"Contact Us"}
                    </p>

                    {
                        footLinkContact.map((link, idx) => (
                            <Link key={idx} href="/" className="foot-link">
                                {link}
                            </Link>
                        ))
                    }

                    <p className="sub-head" style={{ marginTop: "0.4rem" }}>
                        {"Legal"}
                    </p>

                    {
                        footLinkLegal.map((link, idx) => (
                            <Link key={idx} href="/" className="foot-link">
                                {link}
                            </Link>
                        ))
                    }
                </div>
            </div>

            <div className="footer-foot">
                <div className="flex social-links">
                    <Link href="/" aria-label="Facebook">
                        <FiFacebook size={24} />
                    </Link>

                    <Link href="/" aria-label="Instagram">
                        <FiInstagram size={24} />
                    </Link>

                    <Link href="/" aria-label="LinkedIn">
                        <FiLinkedin size={24} />
                    </Link>
                </div>

                <div className="foot-para">
                    {"Better Mortgage's One Day Mortgage™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a mortgage loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in a final underwriting approval. See "}
                    <Link href="/">
                        {"One Day Mortgage™ Terms and Conditions."}
                    </Link>
                </div>

                <div className="foot-para">
                    {"Better Mortgage's One Day HELOC™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a HELOC loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in final underwriting approval. See "}
                    <Link href="/">
                        {"One Day Heloc™ Terms and Conditions."}
                    </Link>
                </div>

                <div className="foot-para">
                    {"Assumes borrowers are eligible for the Automated Valuation Model (AVM) to calculate their home value, their loan amount is less than $400,000, all required documents are uploaded to their Better Mortgage online account within 24 hours of application, closing is scheduled for the earliest available date and time, and a notary is readily available. Funding timelines may vary and may be longer if an appraisal is required to calculate a borrower's home value."}
                </div>

                <div className="foot-para" style={{ marginTop: "2.5rem", paddingTop: "2.5rem", borderTop: "1px solid lightgray" }}>
                    {"© 2025 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved."}
                </div>

                <div className="foot-para">
                    {"Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade Center, 80th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. "}
                    <Link href="/">
                        {"NMLS Consumer Access"}
                    </Link>
                </div>

                <div className="foot-para">
                    {"Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC's "}
                    <Link href="/">
                        {"license numbers"}
                    </Link>
                    {". Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents (“Better Real Estate Partner Agents”). Equal Housing Opportunity. All rights reserved."}
                </div>

                <div className="foot-para">
                    <Link href="/">
                        {"New York State Housing and Anti-Discrimination Notice"}
                    </Link>
                </div>

                <div className="foot-para">
                    <Link href="/">
                        {"New York Standard Operating Procedures"}
                    </Link>
                </div>

                <div className="foot-para">
                    {"Texas Real Estate Commission: "}
                    <Link href="/">
                        {"Information About Brokerage Servicese"}
                    </Link>
                    {" | "}
                    <Link href="/">
                        {"Consumer Protection Notice"}
                    </Link>
                </div>

                <div className="foot-para">
                    {"Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106."}
                </div>

                <div className="foot-para">
                    {"Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106."}
                </div>

                <div className="foot-para">
                    {"Insurance quotes and policies are offered through Better Cover, LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is a full listing of Better Cover, LLC's "}
                    <Link href="/">
                        {"license numbers."}
                    </Link>
                </div>

                <div className="foot-para">
                    {"Better Inspect, LLC maintains its corporate headquarters at 325-41 Chestnut Street, Suite 846, Philadelphia, PA 19106."}
                </div>

                <div className="foot-para">
                    {"Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home & Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation, and applicable and legal and regulatory requirements. Products not available in all states."}
                </div>

                <div className="foot-para">
                    {"Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home & Finance Holding Company. Better Home & Finance Holding Company trademarks are federally registered with the U. S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and Trademark Office and is owned by Better Cover, LLC."}
                </div>
            </div>
        </footer>
    );
};

const FootBetter: React.FC<{
    title: string;
    desc: string;
}> = ({ title, desc }) => {

    return (
        <>
            <p className="better-title">
                <span className="better">
                    {"Better "}
                </span>
                {title}
            </p>

            <p>{desc}</p>
        </>
    );
};
