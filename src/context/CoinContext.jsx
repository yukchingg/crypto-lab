import { createContext, useState, useEffect } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({ name: "aud", symbol: "A$" });

  const fetchAllCoin = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-kKf9cjsHwAJ6bcPv8nEovFCE",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
      options
    )
      .then((res) => res.json())
      .then((res) => setAllCoin(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchAllCoin();
  }, [currency]);

  const contextValue = { allCoin, currency, setCurrency };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
