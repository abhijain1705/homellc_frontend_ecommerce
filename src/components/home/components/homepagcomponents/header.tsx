import React from 'react';
import { Search } from '../../../../common/components/svg';
import IconParent from './iconParent';
import { useSelector } from "react-redux";
import { State } from "../../../../common/interface/interface";

interface HeaderProp {
    toggleModel(value: boolean, place?: string): void;
}

const Header = ({toggleModel}: HeaderProp) => {

    const selector = useSelector((state: State) => state.user);

    return (
        <div className="header">
            <h1>Welcome, {selector.firstName} {selector.lastName}</h1>
            <div className='inputParent'>
                <input type={'text'} placeholder="Search for houses" />
                <Search />
            </div>
            <IconParent toggleModel={toggleModel} />
        </div>
    )
}

export default Header;