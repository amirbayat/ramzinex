import React from "react";
import styles from "./header.module.scss";
import Img from "../img/img";
import { useTranslation } from "react-i18next";
import Text from "../text/text";

type Props = {
  search: React.ReactNode;
};
const Header = (props: Props) => {
  const { search } = props;
  const { t, i18n } = useTranslation();

  function changeLanguage(lang: "en" | "fa") {
    i18n.changeLanguage(lang);
  }
  return (
    <div className={styles["header"]}>
      <div className={styles["header__search"]}>{search}</div>
      <Text
        text={t("common.en")}
        className={styles["header__lang"]}
        onClick={() => changeLanguage("en")}
      />
      <Text
        text={t("common.fa")}
        className={styles["header__lang"]}
        onClick={() => changeLanguage("fa")}
      />

      <div className={styles["header__dark-mode"]}>
        <Img src="/images/dark_mode.png" alt="dark_mode" />
      </div>
    </div>
  );
};

export default Header;
