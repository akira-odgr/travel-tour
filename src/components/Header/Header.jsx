import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import { RiSearchLine } from "react-icons/ri";

import { HeaderForm } from "./HeaderForm";
import { headerImage } from "./headerData";

import "./Header.scss";
import { FadeLeft, FadeUp } from "../../utility/motionAnimation";

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
                <motion.h1
                    variants={FadeUp(0.2)}
                    initial="hidden"
                    animate="visible"
                >
                    <span>Let's</span> Create Memorable Journey
                </motion.h1>
                <motion.p
                    variants={FadeUp(0.4)}
                    initial="hidden"
                    animate="visible"
                    transition="transition"
                    className="section__description"
                >
                    Embark on an unforgettable adventure with us! Discover
                    breathtaking destinations,create lasting memories,and make
                    every journey remarkable.
                </motion.p>
                <motion.form
                    action="/"
                    variants={FadeUp(0.6)}
                    initial="hidden"
                    animate="visible"
                    transition="transition"
                >
                    <HeaderForm formData={formData} />
                    <button className="btn">
                        <RiSearchLine />
                    </button>
                </motion.form>
            </dir>
            <div className="header__image">
                {headerImage.map((data) => {
                    const [ref, inView] = useInView({
                        threshold: 0.2,
                        triggerOnce: true,
                        initialInView: true,
                    });
                    return (
                        <motion.img
                            ref={ref}
                            variants={FadeLeft(data.delay)}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            key={data.image}
                            src={data.image}
                            alt=""
                        />
                    );
                })}
            </div>
        </header>
    );
};
