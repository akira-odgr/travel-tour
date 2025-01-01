import { RiSearchLine } from "react-icons/ri";

import { HeaderForm } from "./HeaderForm";
import { headerImage } from "./headerData";
import "./Header.scss";

// const headerImage = [
//     {
//         image: headerImg1,
//         alt: "header-1",
//     },
//     {
//         image: headerImg2,
//         alt: "header-2",
//     },
//     {
//         image: headerImg3,
//         alt: "header-3",
//     },
//     {
//         image: headerBg,
//         alt: "header-bg",
//     },
// ];
const formData = [
    {
        title: "location",
        placeholder: "Lakshadweep",
    },
    {
        title: "date",
        placeholder: "26 Mar, Fri",
    },
    {
        title: "price",
        placeholder: "Rs. 42,000",
    },
];

export const Header = () => {
    return (
        <header className="section__container header__container">
            <dir className="header__content">
                <h1>
                    <span>Let's</span> Create Memorable Journey
                </h1>
                <p className="section__description">
                    Embark on an unforgettable adventure with us! Discover
                    breathtaking destinations,create lasting memories,and make
                    every journey remarkable.
                </p>
                <form action="/">
                    <HeaderForm formData={formData} />
                    <button className="btn">
                        <RiSearchLine />
                    </button>
                </form>
            </dir>
            <div className="header__image">
                {headerImage.map((data) => {
                    return <img key={data.image} src={data.image} alt="" />;
                })}
            </div>
        </header>
    );
};
