import styles from "./footer.module.scss";
type Props = {
  action: React.ReactNode;
};

const Footer = (props: Props) => {
  const { action } = props;
  return <div className={styles["footer"]}>{action}</div>;
};

export default Footer;
