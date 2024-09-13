import { TMarketListItem } from "../../types/market";
import Text from "../common/text/text";
import { useTranslation } from "react-i18next";
import MarketListItem from "./marketListItem/marketListItem";
import { FixedSizeList, FixedSizeList as List } from "react-window";
import { useEffect, useRef, useState } from "react";

type Props = {
  markets: TMarketListItem[];
  isLoading: boolean;
};

const MarketList = (props: Props) => {
  const { markets, isLoading } = props;
  const { t } = useTranslation();

  const [listHeight, setListHeight] = useState(500);

  useEffect(() => {
    setListHeight(window.innerHeight - 90);
    const handleResize = () => {
      setListHeight(window.innerHeight - 90);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isLoading && <Text text={t("common.loading")} />}
      {Array.isArray(markets) && (
        <List
          height={listHeight}
          itemCount={markets.length}
          itemSize={49}
          width="100%"
        >
          {({ index, style }) => (
            <div style={style}>
              <MarketListItem
                logo={markets[index].logo}
                nameFa={markets[index].name.fa}
                symbol={markets[index].base_currency_symbol.en}
                buy={markets[index].buy}
                id={markets[index].pair_id}
              />
            </div>
          )}
        </List>
      )}
    </>
  );
};

export default MarketList;
