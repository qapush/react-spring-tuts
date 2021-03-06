import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

const Toggle = () => {
    const [toggle, setToggle] = useState(false);
    const transition = useTransition( toggle, null, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0}
    });

    return (
        <div>
            {transition.map(({ item, key, props }) => (
               item && <animated.h1 key={key} style={props}>Hello</animated.h1> 
            ))}
            
            <button onClick={()=>setToggle(!toggle)}>Toggle</button>
        </div>
    )
};

// const AnimatedTitle = animated();    

export default Toggle;