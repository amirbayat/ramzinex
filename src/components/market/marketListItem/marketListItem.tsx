import React from "react";
import Img from "../../common/img/img";
import styles from "./market-list-item.module.scss";
import { useTranslation } from "react-i18next";
import Text from "../../common/text/text";
import format from "string-format";
import Humanize from "humanize-plus";
import { Link } from "react-router-dom";

type Props = {
  logo: string;
  nameFa: string;
  symbol: string;
  buy: number;
  id: number;
};

const MarketListItem = (props: Props) => {
  const { id, logo, nameFa, symbol, buy } = props;
  const { t } = useTranslation();

  return (
    <Link to={`/market/${id}`}>
      <div className={styles["list-item"]}>
        <Img src={logo} alt={symbol} className={styles["logo"]} />
        <Text
          text={format(t("market.list.item.name"), nameFa, symbol)}
          className={styles["name"]}
        />
        <Text
          text={t("market.list.item.currency")}
          className={styles["currency"]}
        />
        <Text text={Humanize.intComma(buy)} className={styles["price"]} />
      </div>
    </Link>
  );
};

export default MarketListItem;
