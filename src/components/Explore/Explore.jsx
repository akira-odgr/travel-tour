import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import exploreImg from "../../assets/images/explore.jpg";
import { ExploreGrid } from "./ExploreGrid";
import { FadeLeft, FadeUp } from "../../utility/motionAnimation";

const exploreData = [
    {
        num: 14,
        desc: "Years\nExperience",
    },
    {
        num: "67+",
        desc: "Destinations\nCelebrations",
    },
    {
        num: "320+",
        desc: "Happy\nCustomers",
    },
];

const useAnimationOnView = (threshold = 0.5, triggerOnce = true) => {
    const [ref, inView] = useInView({
        threshold,
        triggerOnce,
    });
    return {
        ref,
        animate: inView ? "visible" : "hidden",
    };
};

export const Explore = () => {
    const imageAnimation = useAnimationOnView(0.2);
    const sectionSubHeaderAnimation = useAnimationOnView();
    const sectionHeaderAnimation = useAnimationOnView();
    const sectionDescAnimation = useAnimationOnView();
    const sectionBtnAnimation = useAnimationOnView();

    return (
        <section className="section__container explore__container">
            <motion.div
                ref={imageAnimation.ref}
                variants={FadeLeft()}
                initial="hidden"
                animate={imageAnimation.animate}
                className="explore__image"
            >
                <img src={exploreImg} alt="" />
            </motion.div>
            <div className="explore__content">
                <motion.p
                    ref={sectionSubHeaderAnimation.ref}
                    variants={FadeUp(0)}
                    initial="hidden"
                    animate={sectionSubHeaderAnimation.animate}
                    className="section__subheader"
                >
                    Explore With Us
                </motion.p>
                <motion.h2
                    ref={sectionHeaderAnimation.ref}
                    variants={FadeUp(0.3)}
                    initial="hidden"
                    animate={sectionHeaderAnimation.animate}
                    className="section__header"
                >
                    Choose Dream Destinations For <span>Explore World</span>
                </motion.h2>
                <motion.p
                    ref={sectionDescAnimation.ref}
                    variants={FadeUp(0.6)}
                    initial="hidden"
                    animate={sectionDescAnimation.animate}
                    className="section__description"
                >
                    Discover a world of wonders! Select from our curated list of
                    dream destinations and start your journey to explore
                    breathtaking landscapes, vibrant cultures, and unforgettable
                    experiences.
                </motion.p>
                <motion.div
                    ref={sectionBtnAnimation.ref}
                    variants={FadeUp(0.9)}
                    initial="hidden"
                    animate={sectionBtnAnimation.animate}
                    className="explore__content__btn"
                >
                    <button className="btn">About Us</button>
                </motion.div>
                <ExploreGrid exploreGridData={exploreData} />
            </div>
        </section>
    );
};
