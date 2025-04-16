import AbAxios from "./../index";
export const getGoodPriceData = () => {
  return AbAxios.get({
    url: "/home/goodprice",
  });
};
