import React from 'react';

interface SelectMenuProp {
    options: Array<string>;
    visible: boolean;
    handleMouseLeave: () => void;
    handleMouseEnter: () => void;
    top: string;
}

const SelectMenu = ({ options, visible, handleMouseEnter, handleMouseLeave, top }: SelectMenuProp) => {
    return (
        <div style={{top: top}} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} className={`menu ${visible ? 'menushow' : 'menuhide'} `} >
            {options.map((itm, ind) => {
                return (
                    <p key={ind} >{itm}</p>
                )
            })}
        </div>
    )
}

export default SelectMenu;