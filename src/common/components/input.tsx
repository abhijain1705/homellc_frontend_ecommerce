import React, { useState } from "react";
import "../styles/style.css";
import { User, SeePassword, CantSeePassword, Phone, Email } from "./svg";

interface InputProp {
  label: string;
  iconName: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ label, iconName, value, setValue }: InputProp) => {
  const [canSeePassword, setcanSeePassword] = useState(false);

  function togglePasswordVisibility() {
    setcanSeePassword(!canSeePassword);
  }

  return (
    <div className="input_parent">
      <p>{label}</p>
      <input
        autoComplete="true"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={iconName === "password" && !canSeePassword ? "password" : "text"}
        className="input_field"
      />
      <div
        onClick={() =>
          iconName === "password" ? togglePasswordVisibility() : null
        }
        className={`icon_parent ${iconName === "password" ? "secure_icon_parent" : ""
          }`}
      >
        {iconName === "user" ? <User /> : iconName === "phone" ? <Phone /> : iconName === "email" ? <Email /> : iconName === "password" && !canSeePassword ? <CantSeePassword /> : <SeePassword />}
      </div>
    </div>
  );
};

export default Input;
