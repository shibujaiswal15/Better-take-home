"use client";
import Image from "next/image";
import { useState } from "react";
import { gotQuestionsData } from "@/helpers/constants";
import { ButtonSecondary } from "./Buttons";
import { FaArrowRight } from "react-icons/fa6";
import "@/styles/got_questions.css";

export default function GotQuestions() {

    const [gotQuestions, setGotQuestions] = useState<number>(0);

    return (
        <section id="got-questions">
            <div className="flex got-head">
                <div className="got-head-txt">
                    <p>
                        {"Got Questions?"}
                    </p>
                    <p>
                        {"We've got answers"}
                    </p>
                </div>

                <div className="flex got-questions-btns-container">
                    {
                        gotQuestionsData.map((category, idx) => (
                            <ButtonSecondary key={idx} onClick={() => setGotQuestions(idx)} className={`${idx === gotQuestions && "active"}`}>
                                {category.categoryName}
                            </ButtonSecondary>
                        ))
                    }
                </div>
            </div>

            <div className="got-questions-container flex">
                {
                    gotQuestionsData[gotQuestions].questions.map((question, idx) => (
                        <div key={idx} className={`ques-${idx} ques`}>
                            <div className="flex">
                                <div className="ques-body">
                                    <div className="ques-title">
                                        {question.title}
                                    </div>

                                    <div className="ques-desc">
                                        {question.description}
                                    </div>

                                    <button className="ques-btn flex" aria-label="Open Question">
                                        <FaArrowRight />
                                    </button>
                                </div>

                                <Image
                                    src={question.image}
                                    alt={question.title}
                                    width={100}
                                    height={100}
                                    className={`ques-img-${idx} ques-img`}
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};
