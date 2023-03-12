import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface LoginAnimeProp {
  children: ReactNode;
  loginSignupToggle?: boolean;
  forgotPassword?: boolean;
}

const LoginAnime = ({ children, loginSignupToggle, forgotPassword }: LoginAnimeProp) => {

  const variants = {
    loginX: { translateX: 300, opacity: 0 },
    loginY: { translateY: -150 },
    signupX: { translateX: 0, opacity: 1 },
    signupY: { translateY: 0 }
  };

  return <motion.div
    initial={['loginX', loginSignupToggle !== undefined ? "loginY" : ""]}
    variants={variants}
    animate={['signupX', loginSignupToggle || forgotPassword ? "signupY" : loginSignupToggle !== undefined ? "loginY" : ""]}
    transition={{ delay: 1, duration: 1 }}
  >{children}</motion.div>;
};

export default LoginAnime;
