import Img from "components/common/img/img";
import Text from "components/common/text/text";
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./sort-market.module.scss";
import { TSortItem, TSortType } from "types/market";

type Props = {
  sortItem: TSortItem;
  sortType: TSortType;
  setSortItem: (v: TSortItem) => void;
  setSortType: (v: TSortType) => void;
};

const SortMarket = (props: Props) => {
  const { sortItem, sortType, setSortItem, setSortType } = props;
  const { t } = useTranslation();

  function sort(type: "name" | "price") {
    setSortItem(type);
    if (sortType == "asc") {
      setSortType("desc");
    } else {
      setSortType("asc");
    }
  }

  return (
    <div className={styles["sort"]}>
      <div className={styles["sort__item"]} onClick={() => sort("name")}>
        <Text
          text={t("market.list.sort.name")}
          className={styles["sort__item__text"]}
        />
        <Img src="/images/sort.png" alt="sort" />
      </div>
      <div className={styles["sort__item"]} onClick={() => sort("price")}>
        <Text
          text={t("market.list.sort.latest_price")}
          className={styles["sort__item__text"]}
        />
        <Img src="/images/sort.png" alt="sort" />
      </div>
    </div>
  );
};

export default SortMarket;
