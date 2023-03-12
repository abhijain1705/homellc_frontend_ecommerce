import React from 'react';
import { motion } from 'framer-motion';
import './style/style.css';

const Loader = () => {
    const getAnimationProps = (height: string) => {
        return {
            initial: { height: '0px' },
            animate: { height: height },
        };
    };

    const transitionProps = {
        duration: 1,
        repeat: 2,
    };

  return (
    <div className='loading'>
        <div className='loader'>
                <motion.div
                    className='roof1'
                    {...getAnimationProps('40px')}
                    transition={transitionProps}
                ></motion.div>
                <motion.div
                    className='roof2'
                    {...getAnimationProps('40px')}
                    transition={transitionProps}
                ></motion.div>
                <motion.div
                    className='wall1'
                    {...getAnimationProps('40px')}
                    transition={transitionProps}
                ></motion.div>
                <motion.div
                    className='wall2'
                    {...getAnimationProps('40px')}
                    transition={transitionProps}
                ></motion.div>
                <motion.div
                    className='base'
                    {...getAnimationProps('40px')}
                    transition={transitionProps}
                ></motion.div>
                <motion.div
                    className='doorwall1'
                    {...getAnimationProps('20px')}
                    transition={transitionProps}
                ></motion.div>
                <motion.div
                    className='doorwall2'
                    {...getAnimationProps('20px')}
                    transition={transitionProps}
                ></motion.div>
                <motion.div
                    className='doorroof'
                    {...getAnimationProps('20px')}
                    transition={transitionProps}
                ></motion.div>
            </div>
    </div>
  )
}

export default Loader;