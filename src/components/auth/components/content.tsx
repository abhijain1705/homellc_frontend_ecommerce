import React, { useState, useEffect } from "react";
import LoginAnime from "../animation/loginAnime";
import { motion } from "framer-motion";
import { ArrowIcon } from "../../../common/components/svg";
import Input from "../../../common/components/input";
import SignupAnime from "../animation/SignupAnime";
import {
  useSignupMutation,
  useLoginMutation,
  useForgotPasswordMutation,
} from "../../../redux/api";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { logIn } from "../../../redux/userSlice";
import { SignupInterface } from "../../../common/interface/interface";

const Content = () => {
  const [loginSignupToggle, setrotateButton] = useState(false);
  const [rememberMe, setrememberMe] = useState(false);
  const [forgotPassword, setforgotPassword] = useState(false);

  function toggleArrowButton() {
    setrotateButton(!loginSignupToggle);
  }

  const AuthToggleVariants = {
    signup: { rotate: 180 },
    login: { rotate: 360 },
  };
  // user states
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [createUser, signupResponse] = useSignupMutation();
  const [loginUser, loginResponse] = useLoginMutation();
  const [forgotUser, forgotResponse] = useForgotPasswordMutation();
  const dispatch = useDispatch();

  function clearInputs() {
    setfirstName("");
    setlastName("");
    setpassword("");
    setphoneNumber("");
    setemail("");
  }

  function signUpUser() {
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      phoneNumber.length === 0 ||
      email.length === 0 ||
      password.length === 0
    ) {
      toast.warning("please fill all details");
      toast.warning("please fill all details");
      return;
    }
    createUser({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      remember: rememberMe,
      dateOfJoining: new Date(),
    }).unwrap();
  }

  function forgot() {
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      phoneNumber.length === 0 ||
      email.length === 0
    ) {
      toast.warning("please fill all details");
      return;
    }

    forgotUser({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      createdAt: new Date(),
    });
  }

  function login() {
    if (email.length === 0 || password.length === 0) {
      toast.warning("please fill all details");
      return;
    }
    loginUser({ email: email, password: password, remember: rememberMe });
  }

  function handlingResponse(response: any, successMsg: string, place: string) {
    if (response.isLoading) {

      toast.loading("loading please wait");
    } else if (response.isError) {
      if ("data" in response.error) {
        let msg = response.error.data as any;
        toast.dismiss();
        toast.error(msg.error);
      }
    } else if (response.isSuccess) {

      toast.dismiss();
      toast.success(successMsg);
      if (place === 'signup' || place === 'login') {
        let user = response.data as SignupInterface;
        dispatch(
          logIn({
            firstName: user.firstName,
            lastName: user.lastName,
            remember: user.remember,
            email: user.email,
          })
        );
      }
      clearInputs();
    }
  }

  useEffect(() => {
    handlingResponse(signupResponse, "successfully created account", "signup");
    handlingResponse(loginResponse, "welcome back", 'login');
    handlingResponse(
      forgotResponse,
      "we have sent password reset link to your email", 'forgot'
    );
  }, [signupResponse, loginResponse, forgotResponse]);

  return (
    <div className="content">
      <ToastContainer />
      <LoginAnime>
        <motion.div
          variants={AuthToggleVariants}
          animate={loginSignupToggle ? "signup" : "login"}
          transition={{ duration: 1.5 }}
          onClick={
            forgotPassword
              ? () => {
                setforgotPassword(false);
              }
              : toggleArrowButton
          }
          className="arrow_parent"
        >
          <ArrowIcon />
        </motion.div>
      </LoginAnime>
      <LoginAnime>
        <div>
          {forgotPassword
            ? "forgot password"
            : loginSignupToggle
              ? "Signup"
              : "Login"}
        </div>
        <div>
          {forgotPassword
            ? "don't worry it's so easy to reset"
            : loginSignupToggle
              ? "you will not regret on it, we promise!"
              : "we are pleased to see you back"}
        </div>
      </LoginAnime>
      {/* signup */}
      <SignupAnime
        forgotPassword={forgotPassword}
        loginSignupToggle={loginSignupToggle}
      >
        <Input
          value={firstName}
          setValue={setfirstName}
          label="First Name*"
          iconName="user"
        />
      </SignupAnime>
      <SignupAnime
        forgotPassword={forgotPassword}
        loginSignupToggle={loginSignupToggle}
      >
        <Input
          value={lastName}
          setValue={setlastName}
          label="Last Name*"
          iconName="user"
        />
      </SignupAnime>
      <SignupAnime
        forgotPassword={forgotPassword}
        loginSignupToggle={loginSignupToggle}
      >
        <Input
          value={phoneNumber}
          setValue={setphoneNumber}
          label="Mobile Number*"
          iconName="phone"
        />
      </SignupAnime>
      {/* signup */}
      <LoginAnime
        forgotPassword={forgotPassword}
        loginSignupToggle={loginSignupToggle}
      >
        <Input
          value={email}
          setValue={setemail}
          label="Email*"
          iconName="email"
        />
      </LoginAnime>
      {!forgotPassword ? (
        <>
          <LoginAnime loginSignupToggle={loginSignupToggle}>
            <Input
              value={password}
              setValue={setpassword}
              label="Password*"
              iconName="password"
            />
          </LoginAnime>
          <LoginAnime loginSignupToggle={loginSignupToggle}>
            <div className="extra_auth_links_parent">
              <div>
                <input
                  className="checkbox_input"
                  type={"checkbox"}
                  value={rememberMe ? "on" : "off"}
                  onChange={(e) => {
                    setrememberMe(!rememberMe);
                  }}
                />
                Remember me
              </div>
              <a
                onClick={() => setforgotPassword(true)}
                className="forgot_link"
                href="#"
              >
                forgot Password?
              </a>
            </div>
          </LoginAnime>
        </>
      ) : null}
      <LoginAnime
        forgotPassword={forgotPassword}
        loginSignupToggle={loginSignupToggle}
      >
        <div
          onClick={
            signupResponse.isLoading ||
              forgotResponse.isLoading ||
              loginResponse.isLoading
              ? () => { }
              : forgotPassword ? forgot
                : loginSignupToggle
                  ? signUpUser
                  : login
          }
          className="register_btn"
        >
          {forgotPassword ? "continue" : loginSignupToggle ? "Signup" : "Login"}
        </div>
      </LoginAnime>
    </div>
  );
};

export default Content;
