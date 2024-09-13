import Back from "components/common/back/back";
import Footer from "components/common/footer/footer";
import Layout from "components/common/layout/layout";
import MarketDetail from "components/market/marketDetail/marketDetail";

const MarketDetailPage = () => {
  return (
    <Layout>
      <MarketDetail />
      <Footer action={<Back />} />
    </Layout>
  );
};

export default MarketDetailPage;
