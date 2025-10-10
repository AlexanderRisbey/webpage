import { motion, useIsPresent } from "framer-motion";

const TransitionScreen = () => {
    const isPresent = useIsPresent();
    return(
        // <motion.div
        //     initial={{ opacity: 1 }}
        //     animate={{ opacity: 0, transition: { duration: 0.5, ease: "circOut" }}}
        //     exit={{ opacity: 1, transition: { duration: 0.5, ease: "circIn" } }}
        //     style={{ opacity: isPresent ? 0 : 1, display: isPresent ? "none":"flex"}}
        //     className="privacy-screen"
        // />
        <motion.div
            initial={{ opacity: 1,display: "block"}}
            animate={{ 
                opacity: 0, 
                transition:{ duration: 0.2, ease: "circOut" },
                transitionEnd:{ display: "none",}
            }}
            exit={{ 
                display: "block",
                opacity: 1, 
                transition: { duration: 0.2, ease: "circIn" } }}
            // transitionStart={{display: "block",}} 
            style={{ opacity: isPresent ? 0 : 1, }}
            className="privacy-screen"
        />
        // <motion.div
        //     initial={{ scaleX: 1 }}
        //     animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        //     exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        //     style={{ originX: isPresent ? 0 : 1 }}
        //     className="privacy-screen"
        // />
    )
}
export default TransitionScreen