import styles from "./button.module.scss";

type Props = {
  text: string;
  onClick: () => void;
  className?: string;
};

const Button = (props: Props) => {
  const { text, onClick, className } = props;
  return (
    <button className={`${styles["button"]} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
