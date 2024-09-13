onmessage = function (e) {
  const { markets, sortItem, sortType } = e.data;
  let sortedMarkets = [];
  if (sortItem == "name") {
    sortedMarkets = markets?.sort((a, b) => {
      if (a.name.en < b.name.en) {
        return sortType == "asc" ? -1 : 1;
      } else if (a.name.en > b.name.en) {
        return sortType == "asc" ? 1 : -1;
      } else {
        return 0;
      }
    });
  } else if (sortItem == "price") {
    sortedMarkets = markets?.sort((a, b) => {
      if (a.buy < b.buy) {
        return sortType == "asc" ? -1 : 1;
      } else if (a.buy > b.buy) {
        return sortType == "asc" ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  postMessage(sortedMarkets);
};
