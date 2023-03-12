import React, { useEffect, useState, ReactNode } from 'react';
import { ContextSizeProvider } from './context';

interface IProp {
    children: ReactNode;
}

const SizeContextProvider = ({ children }: IProp) => {

    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ContextSizeProvider.Provider value={{ width: width }}>
            {children}
        </ContextSizeProvider.Provider>
    )
}

export default SizeContextProvider;