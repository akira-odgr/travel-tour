export const FadeUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: delay,
            },
        },
    };
};
export const FadeRight = (delay) => {
    return {
        hidden: {
            opacity: 0,
            x: -50,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                delay: delay,
            },
        },
    };
};

export const FadeLeft = (delay) => {
    return {
        hidden: {
            opacity: 0,
            x: 50,
        },
        visible: {
            opacity: 1,
            x: 0,

            transition: {
                duration: 0.8,
                delay: delay,
            },
        },
    };
};

export const FadeIn = (delay) => {
    return {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,

            transition: {
                duration: 0.8,
                delay: delay,
            },
        },
    };
};
