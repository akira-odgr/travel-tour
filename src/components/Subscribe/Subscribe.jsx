import { useInView } from "react-intersection-observer";
import "./Subscribe.scss";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/motionAnimation";

export const Subscribe = () => {
    const [refHeader, inViewHeader] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const [refDesc, inViewDesc] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const [refForm, inViewForm] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    return (
        <section className="section__container subscribe__container">
            <motion.h2
                ref={refHeader}
                variants={FadeUp()}
                initial="hidden"
                animate={inViewHeader ? "visible" : "hidden"}
                className="section__header"
            >
                Subscribe To Get The Latest News <span>About Us</span>
            </motion.h2>
            <motion.p
                ref={refDesc}
                variants={FadeUp(0.3)}
                initial="hidden"
                animate={inViewDesc ? "visible" : "hidden"}
                className="section__desc"
            >
                Stay updated with the latest travel deals, destination
                highlights, and exclusive offers. Subscribe now and never miss
                out on exciting news and updates about our services!
            </motion.p>
            <motion.form
                ref={refForm}
                variants={FadeUp(0.5)}
                initial="hidden"
                animate={inViewForm ? "visible" : "hidden"}
                action="/"
            >
                <input type="text" placeholder="Your Email" />
                <button className="btn">Subscribe</button>
            </motion.form>
        </section>
    );
};
