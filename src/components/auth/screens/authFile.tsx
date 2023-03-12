import React from 'react';
import '../styles/style.css';
import Banner from '../components/banner';
import Content from '../components/content';

const AuthFile = () => {

    return (
        <div className='auth'>
            <Content />
            <Banner />
        </div>
    )
}

export default AuthFile;