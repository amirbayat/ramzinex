import React from "react";
import Img from "../../common/img/img";
import styles from "./market-list-item.module.scss";
import { useTranslation } from "react-i18next";
import Text from "../../common/text/text";
import format from "string-format";
import Humanize from "humanize-plus";

type Props = {
  logo: string;
  nameFa: string;
  nameEn: string;
  buy: number;
};

const MarketListItem = (props: Props) => {
  const { logo, nameFa, nameEn, buy } = props;
  const { t } = useTranslation();

  return (
    <div className={styles["list-item"]}>
      <Img src={logo} alt={nameEn} className={styles["logo"]} />
      <Text
        text={format(t("market.list.item.name"), nameFa, nameEn)}
        className={styles["name"]}
      />
      <Text
        text={t("market.list.item.currency")}
        className={styles["currency"]}
      />
      <Text text={Humanize.intComma(buy)} className={styles["price"]} />
    </div>
  );
};

export default MarketListItem;
