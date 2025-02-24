import { companyTimeline } from "@/helpers/constants";
import { ButtonPrimary } from "../Buttons";

export default function CompanyTimeline() {

    return (
        <section id="company-timeline">
            <h2>
                {"Company timeline"}
            </h2>

            <div className="timeline">
                {
                    companyTimeline.map((item, idx) => (
                        <div key={idx} className="t-line">
                            <p className="time">
                                {item.year}
                            </p>

                            {
                                item.desc.map((desc, idx2) => (
                                    <div key={idx2} className={`${(idx + idx2) % 2 !== 0 && "right"}`}>
                                        <div className="desc">
                                            <p>
                                                {desc}
                                                {
                                                    (idx === companyTimeline.length - 1) && (idx2 === item.desc.length - 1) && <ButtonPrimary className="dark see-stories-btn">
                                                        {"Get Started"}
                                                    </ButtonPrimary>
                                                }
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </section>
    );
};
