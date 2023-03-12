import React, { useState } from "react";
import { UseSizeContext } from "../../../../screenContext/context";
import { DownArrow } from "../../../../common/components/svg";
import SelectMenu from "./selectMenu";
import { logout } from "../../../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { removeWhenLoggedOut } from "../../../../redux/cart";
import { State } from "../../../../common/interface/interface";

type MenuVisibility = { [menuName: string]: boolean };

interface SidebarProp {
  showSideBar: boolean;
}

const Sidebar = ({ showSideBar }: SidebarProp) => {
  const options: { [menuName: string]: string[] } = {
    buy: [
      "Find my dream neighborhood",
      "Double your down payment",
      "Investigate your dream home",
      "Seize your dream home",
      "Find the best rate",
    ],
    own: ["Get upto $500,000 for your home equity"],
    sell: [
      "Get multiple offers & estimates for your home",
      "Sell a part of your home for upto $500,000",
      "Sell for lowest possible commissions",
      "Find strengths & weaknesses of your home",
      "Buy now, sell later",
    ],
    invest: ["Invest in homes"],
    analyze: ["Invest in homes"],
    about: [
      "About us",
      "Partner with us",
      "Careers",
      "Press",
      "FAQs",
      "Contact us",
    ],
  };

  const topPosition: { [menuName: string]: string } = {
    buy: "120px",
    own: "150px",
    sell: "180px",
    invest: "210px",
    analyze: "240px",
    about: "270px",
  };

  const { width } = UseSizeContext();
  const dispatch = useDispatch();
  const selector = useSelector((state: State) => state.user);

  const [menuVisibility, setMenuVisibility] = useState<MenuVisibility>({});

  const toggleMenuVisibility = (menuName: string) => {
    setMenuVisibility((prevVisibility) => ({
      ...prevVisibility,
      [menuName]: !prevVisibility[menuName],
    }));
  };

  function loggedOut() {
    dispatch(logout());
    dispatch(removeWhenLoggedOut({email: selector.email}));
  }

  return (
    <div
      className={`sidebar  ${width > 600
        ? "sidebarVisible"
        : showSideBar
          ? "sidebarVisible"
          : "sidebarHidden"
        }`}
    >
      <h1>HomeCart.in</h1>
      <div className="options">
        {Object.keys(options).map((menuName, ind) => (
          <div
            key={ind}
            className="option"
            onMouseEnter={() => toggleMenuVisibility(menuName)}
            onMouseLeave={() => toggleMenuVisibility(menuName)}
          >
            {menuName} <DownArrow />
          </div>
        ))}
        <div onClick={loggedOut} className="option">logout</div>
        <p>Check if you Qualify</p>
      </div>
      {Object.keys(options).map((menuName) => (
        <SelectMenu
          top={topPosition[menuName]}
          key={menuName}
          visible={menuVisibility[menuName]}
          options={options[menuName]}
          handleMouseLeave={() => toggleMenuVisibility(menuName)}
          handleMouseEnter={() => toggleMenuVisibility(menuName)}
        />
      ))}
    </div>
  );
};

export default Sidebar;
