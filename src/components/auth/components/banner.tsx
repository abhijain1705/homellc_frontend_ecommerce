import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <div className='banner_parent'>
            <motion.div
                initial={{ opacity: 0, translateX: -700 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 2 }}
            >
                <motion.div
                    initial={{ borderRadius: '0px' }}
                    animate={{ borderRadius: '20px' }}
                    transition={{ delay: 2, duration: 2 }}
                    className='human_banner' >
                    <motion.div
                        initial={{ bottom: 0, opacity: 0 }}
                        animate={{ opacity: 0.6, top: '250px' }}
                        transition={{ delay: 2, duration: 2 }}
                        className='banner_text'>Get out of Rents and Buy your first house</motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Banner