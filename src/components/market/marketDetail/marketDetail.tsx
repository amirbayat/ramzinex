import { useGetMarketDetailQuery } from "store/services/market/marketDetailApi.service";
import styles from "./market-detail.module.scss";
import { useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query/react";
import Text from "components/common/text/text";
import { useTranslation } from "react-i18next";
import { TMarketItem } from "types/market";
import Img from "components/common/img/img";
import format from "string-format";
import InfoRow from "../infoRow/infoRow";
import Humanize from "humanize-plus";
import Footer from "components/common/footer/footer";
import Back from "components/common/back/back";

const MarketDetail = () => {
  const { marketId } = useParams();
  const { data, isLoading } = useGetMarketDetailQuery(
    marketId ? marketId : skipToken
  );
  const { t } = useTranslation();

  const marketDetail = data?.data ?? ({} as TMarketItem);

  return (
    <div className={styles["detail"]}>
      {isLoading && <Text text={t("common.loading")} />}
      {marketDetail?.pair_id && (
        <>
          <Img
            src={marketDetail.logo}
            alt={marketDetail.name.en}
            className={styles["detail__logo"]}
          />
          <Text
            text={format(
              t("market.detail.title"),
              marketDetail.name.fa,
              marketDetail.base_currency_symbol.en
            )}
          />
          <InfoRow
            keyText={t("market.detail.en_name")}
            valueText={marketDetail.name.en}
          />
          <InfoRow
            keyText={t("market.detail.price")}
            valueText={Humanize.intComma(marketDetail.buy)}
          />
          <InfoRow
            keyText={t("market.detail.hour_24_changes")}
            valueText={marketDetail.financial.last24h.change_percent}
          />
        </>
      )}

      <Footer action={<Back />} />
    </div>
  );
};

export default MarketDetail;
