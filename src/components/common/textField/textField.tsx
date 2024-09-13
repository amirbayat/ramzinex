import React, { ChangeEvent } from "react";
import styles from "./text-field.module.scss";

type Props = {
  value: string;
  onChange: (v: string) => void;
  className?: string;
  placeholder?: string;
};

const TextField = (props: Props) => {
  const { value, onChange, className, placeholder } = props;
  function _onChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }
  return (
    <input
      value={value}
      onChange={_onChange}
      className={`${styles["input"]} ${className}`}
      placeholder={placeholder}
    />
  );
};

export default TextField;
