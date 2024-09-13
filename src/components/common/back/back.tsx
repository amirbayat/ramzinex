import { useTranslation } from "react-i18next";
import styles from "./back.module.scss";
import Button from "../button/button";
import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  function goBack() {
    navigate(-1);
  }
  return <Button text={t("common.back")} onClick={goBack} />;
};

export default Back;
