import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const App = () => {
    const [isAnimating, setIsAnimating] = useState(false);

    const animationProps = useSpring({
        transform: isAnimating ? 'scale(1.2)' : 'scale(1)',
    });

    const handleButtonClick = () => {
        setIsAnimating(!isAnimating);
    };

    return (
        <div className='container mt-5 '>
            <button onClick={handleButtonClick} >Toggle Animation</button>
            <animated.div className='mt-3'
                style={{
                    width: '100px',
                    height: '100px',
                    background: 'blue',
                    ...animationProps,
                }}
            />
        </div>
    );
};

export default App;
