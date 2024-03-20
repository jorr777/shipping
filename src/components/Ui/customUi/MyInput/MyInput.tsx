import React, { FC } from "react";
import styles from "./MyInput.module.css";

interface IMyInput {
  placeholder?: string;
  classname?: string;
  value?: string | number;
  type?: string;
  onChange?:any
}

const MyInput: FC<IMyInput> = ({ classname, type, placeholder, value ,onChange}) => {
  const classnameStyles = classname
    ? [classname, styles.MyInput]
    : [styles.MyInput];

  return (
    <input
      type={type ? type : "text"}
      className={classnameStyles.join(" ")}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default MyInput;
