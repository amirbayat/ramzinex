onmessage = function (e) {
  const { markets, searchValue } = e.data;
  let searchedMarkets = markets.filter(
    (market) =>
      market.name.fa.includes(searchValue) ||
      market.name.en.includes(searchValue)
  );

  postMessage(searchedMarkets);
};
