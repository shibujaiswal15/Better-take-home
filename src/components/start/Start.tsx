import { startLinks, unlock } from "@/helpers/constants";
import Link from "next/link";


export default function Start() {

    return (
        <section id="start">
            <div className="start-head">
                <div>
                    {"Hi, I'm Betsy!"}
                </div>
                <div>
                    {"What can I help you with?"}
                </div>
            </div>

            <div className="start-options">
                {
                    startLinks.map((link, idx) => (
                        <Link className="flex" href={link.href} key={idx}>
                            <link.icon className="icon" />
                            {link.title}
                        </Link>
                    ))
                }
            </div>

            <div className="start-stats flex">
                <div>
                    <div className="stat-head">
                        {"$100B"}
                    </div>
                    <div className="stat-desc">
                        {"home loans funded entirely online"}
                    </div>
                </div>

                <div>
                    <div className="stat-head">
                        {"400K"}
                    </div>
                    <div className="stat-desc">
                        {"Customers who chose a Better Mortgage"}
                    </div>
                </div>
            </div>

            <div className="unlock">
                <div>
                    {"After a few questions, you'll unlock:"}
                </div>

                <div>
                    {
                        unlock.map((item, idx) => (
                            <div key={idx} className="flex un">
                                <item.icon className="icon" />
                                {item.title}
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};
