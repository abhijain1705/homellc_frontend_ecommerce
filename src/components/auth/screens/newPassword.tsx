import React, { useState, useEffect } from 'react';
import '../styles/style.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/banner';
import { ArrowIcon } from '../../../common/components/svg';
import LoginAnime from '../animation/loginAnime';
import Input from '../../../common/components/input';
import { useUpdatePasswordMutation } from '../../../redux/api';
import { toast, ToastContainer } from 'react-toastify';


const NewPassword = () => {
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [updatePassword, updateResponse] = useUpdatePasswordMutation();
    const navigate = useNavigate();
    const location = useLocation();
    const routeSplit = location.pathname.split("/");


    function clearInputs() {
        setconfirmPassword("");
        setpassword("");
    }

    function update() {
        if (confirmPassword.length === 0 || password.length === 0) {
            toast.warning("please fill all the details");
            return;
        }

        if (confirmPassword !== password) {
            toast.error("password should match with confirm password");
            return;
        }

        updatePassword({ password: password, token: routeSplit[routeSplit.length - 1] });
    }

    function handlingResponse(response: any, successMsg: string) {
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
            setTimeout(() => {
                navigate("/");
            }, 2000);
            clearInputs();
        }
    }

    useEffect(() => {
        handlingResponse(updateResponse, "password updated successfully");
    }, [updateResponse]);

    return (
        <div className='auth'>
            <div className='content new_password_content'>
                <ToastContainer />
                <LoginAnime>
                    <div
                        className='arrow_parent'>
                        <ArrowIcon />
                    </div>
                </LoginAnime>
                <LoginAnime>
                    <div>Update Password</div>
                    <div>we care for your efforts, but the success is right away.</div>
                </LoginAnime>
                <LoginAnime>
                    <Input value={password} setValue={setpassword} label='Password*' iconName='password' />
                </LoginAnime>
                <LoginAnime>
                    <Input value={confirmPassword} setValue={setconfirmPassword} label='Confirm Password*' iconName='password' />
                </LoginAnime>
                <LoginAnime>
                    <div onClick={updateResponse.isLoading ? () => { } : update} className='register_btn'>Update Password</div>
                </LoginAnime>
            </div>
            <Banner />
        </div>
    )
}

export default NewPassword;