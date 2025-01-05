import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import clientBg from "../../assets/images/bg.png";
import { clientData } from "./clientData";

import "./Client.scss";
import { useState } from "react";

export const Client = () => {
    const [activeCardId, setActiveCardId] = useState(1);

    const handleNext = () => {
        setActiveCardId((prevId) => {
            const currentIndex = clientData.findIndex(
                (card) => card.id === prevId
            );
            const nextIndex = (currentIndex + 1) % clientData.length;
            return clientData[nextIndex].id;
        });
    };

    const handlePrev = () => {
        setActiveCardId((prevId) => {
            const currentIndex = clientData.findIndex(
                (card) => card.id === prevId
            );
            const prevIndex =
                (currentIndex - 1 + clientData.length) % clientData.length;
            return clientData[prevIndex].id;
        });
    };

    return (
        <section className="section__container client__container">
            <img src={clientBg} alt="bg" className="client__bg" />
            <p className="section__subheader">What Our Client Say&apos;s?</p>
            <h2 className="section__header">
                Client <span>Testimonials</span>
            </h2>

            {clientData.map((data) => {
                return (
                    <div
                        key={data.id}
                        className={`client__card ${
                            data.id === activeCardId ? "active" : ""
                        }`}
                    >
                        <div className="client__card__image">
                            <img src={data.image} alt="client-image" />
                        </div>
                        <div className="client__card__content">
                            <h4>{data.name}</h4>
                            <h5>{data.title}</h5>
                            <p>{data.desc}</p>
                        </div>
                    </div>
                );
            })}

            <div className="client__btns">
                <button className="btn" onClick={handlePrev}>
                    <RiArrowLeftLine className="icon" />
                </button>
                <button className="btn" onClick={handleNext}>
                    <RiArrowRightLine className="icon" />
                </button>
            </div>
        </section>
    );
};
