import React from "react";

import styles from "./text.module.scss";
type Props = {
  text: string;
  className?: string;
};
const Text = (props: Props) => {
  const { text, className = "" } = props;
  return <p className={`${styles["text"]} ${className}`}>{text}</p>;
};

export default Text;
