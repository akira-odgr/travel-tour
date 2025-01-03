import chooseImg from "../../assets/images/choose.jpg";
import { chooseList } from "./chooseList";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FadeRight, FadeUp } from "../../utility/motionAnimation";

import "./Choose.scss";

export const Choose = () => {
    const [refImage, inViewImage] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const [refSubheader, inViewSubheader] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const [refHeader, inViewHeader] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const [refList, inViewList] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <section className="section__container choose__container">
            <motion.div
                ref={refImage}
                variants={FadeRight()}
                initial="hidden"
                animate={inViewImage ? "visible" : "hidden"}
                className="choose__image"
            >
                <img src={chooseImg} alt="choose" />
            </motion.div>
            <div className="choose__content">
                <motion.p
                    ref={refSubheader}
                    variants={FadeUp(0.3)}
                    initial="hidden"
                    animate={inViewSubheader ? "visible" : "hidden"}
                    className="section__subheader"
                >
                    Why Choose Us?
                </motion.p>
                <motion.h2
                    ref={refHeader}
                    variants={FadeUp(0.5)}
                    initial="hidden"
                    animate={inViewHeader ? "visible" : "hidden"}
                    className="section__header"
                >
                    Plan Your Trip <span>With Us</span>
                </motion.h2>
                <ul ref={refList} className="choose__list">
                    {chooseList.map((data, index) => (
                        <motion.li
                            key={index}
                            variants={FadeUp(0.3 + index * 0.1)}
                            initial="hidden"
                            animate={inViewList ? "visible" : "hidden"}
                        >
                            <span>{data.icon}</span>
                            <div>
                                <h4>{data.title}</h4>
                                <p>{data.desc}</p>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
