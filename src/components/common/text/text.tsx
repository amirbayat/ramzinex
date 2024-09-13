import React from "react";

import styles from "./text.module.scss";
type Props = {
  text: string;
  className?: string;
  onClick?: () => void;
};
const Text = (props: Props) => {
  const { text, onClick = () => {}, className = "" } = props;
  return (
    <p className={`${styles["text"]} ${className}`} onClick={onClick}>
      {text}
    </p>
  );
};

export default Text;
