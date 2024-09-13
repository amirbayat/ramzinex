import React from "react";
import styles from "./header.module.scss";
import Img from "../img/img";

type Props = {
  search: React.ReactNode;
};
const Header = (props: Props) => {
  const { search } = props;
  return (
    <div className={styles["header"]}>
      <div className={styles["header__search"]}>{search}</div>
      <div className={styles["header__dark-mode"]}>
        <Img src="/images/dark_mode.png" alt="dark_mode" />
      </div>
    </div>
  );
};

export default Header;
