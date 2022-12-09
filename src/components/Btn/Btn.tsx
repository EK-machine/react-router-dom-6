import React from "react";
import { BtnProps } from "../../types/types";
import styles from "./styles.module.css";

const Btn: React.FC<BtnProps> = ({ onClick, text, extraClassName, type }) => {
  return (
    <button
      type={type && type}
      className={`${styles.btn} ${!!extraClassName === true && extraClassName}`}
      onClick={onClick && onClick}
    >
      {text}
    </button>
  );
};

export default Btn;
