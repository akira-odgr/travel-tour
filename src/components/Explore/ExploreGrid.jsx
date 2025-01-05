import { useInView } from "react-intersection-observer";
import "./Explore.scss";
import { motion } from "framer-motion";
import { FadeIn } from "../../utility/motionAnimation";

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

export const ExploreGrid = ({ exploreGridData }) => {
    return (
        <div className="explore__content__grid">
            {exploreGridData.map((data, index) => {
                const exploreGridAnimation = useAnimationOnView();
                return (
                    <motion.div
                        ref={exploreGridAnimation.ref}
                        variants={FadeIn(index * 0.2)}
                        initial="hidden"
                        animate={exploreGridAnimation.animate}
                        key={index}
                    >
                        <h4>{data.num}</h4>
                        <p>{data.desc}</p>
                    </motion.div>
                );
            })}
        </div>
    );
};
