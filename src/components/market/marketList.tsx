import React from "react";
import { TMarketList, TMarketListItem } from "../../types/market";
import Text from "../common/text/text";
import { useTranslation } from "react-i18next";
import MarketListItem from "./marketListItem/marketListItem";

type Props = {
  markets: TMarketListItem[];
  isLoading: boolean;
};

const MarketList = (props: Props) => {
  const { markets, isLoading } = props;
  const { t } = useTranslation();

  return (
    <>
      {isLoading && <Text text={t("common.loading")} />}
      {Array.isArray(markets) &&
        markets.map((market) => (
          <MarketListItem
            key={market.name.en}
            logo={market.logo}
            nameFa={market.name.fa}
            nameEn={market.name.en}
            buy={market.buy}
          />
        ))}
    </>
  );
};

export default MarketList;
