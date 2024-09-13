import React, { useEffect, useState } from "react";
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
  const [isDarkMode, setIsDarkMode] = useState(false);

  function changeLanguage(lang: "en" | "fa") {
    i18n.changeLanguage(lang);
  }

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", String(1));
  }

  useEffect(() => {
    let _isDarkMode = localStorage.getItem("isDarkMode");
    if (_isDarkMode == "1") {
      document.body.classList.add("dark-mode");
    } else {
      if (isDarkMode) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
    }
  }, [isDarkMode]);

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

      <div className={styles["header__dark-mode"]} onClick={toggleDarkMode}>
        <Img src="/images/dark_mode.png" alt="dark_mode" />
      </div>
    </div>
  );
};

export default Header;
