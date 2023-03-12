import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface SignupAnimeProp {
    children: ReactNode;
    loginSignupToggle: boolean;
    forgotPassword: boolean;
}

const SignupAnime = ({ children, loginSignupToggle, forgotPassword }: SignupAnimeProp) => {

    // Conditional rendering to prevent SignupAnime component from being rendered until loginSignupToggle state is defined
    if (loginSignupToggle === undefined) {
        return null;
    }

    const variants = {
        login: { translateY: 100, opacity: 0 },
        signup: { translateY: 0, opacity: 1 }
    }

    return <motion.div
        initial='login'
        animate={loginSignupToggle || forgotPassword ? 'signup' : 'login'}
        variants={variants}
        transition={{ duration: 0.5, delay: 1 }}
    >{children}</motion.div>;
};

export default SignupAnime;
