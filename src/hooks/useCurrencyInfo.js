import { data } from "autoprefixer";
import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [currencyData, setCurrencyData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data[currency]);
        setCurrencyData(data[currency]);
      });
  }, [currency]);
  return currencyData;
};

export default useCurrencyInfo;
