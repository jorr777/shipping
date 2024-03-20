import React from "react";
import styles from "./MyButton.module.css";

const MyButton = ({ ...props }: any) => {
  const classname = props.className?.length
    ? [props.className, styles.MyButton]
    : [styles.MyButton];
  return (
    <button {...props} className={classname.join(" ")}>
      {props.children}
    </button>
  );
};

export default MyButton;
