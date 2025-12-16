import { useEffect, useState } from "react";


interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
}


interface UseCryptoDataOptions {
  autoSelectFirst?: boolean; 
  onSelect?: (coin: Coin | null) => void;
  defaultCoin?: Coin | null;
}

export const useCryptoData = ({
  autoSelectFirst = true,
  onSelect,
  defaultCoin = null,
}: UseCryptoDataOptions = {}) => {
  const [currencies, setCurrencies] = useState<Coin[]>([]);
  const [loadingCurrencies, setLoadingCurrencies] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState<Coin | null>(defaultCoin);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCoins = async () => {
      setLoadingCurrencies(true);
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        const data = await res.json();
        const coins: Coin[] = data.map((c: any) => ({
          id: c.id,
          symbol: c.symbol,
          name: c.name,
          image: c.image,
        }));
        setCurrencies(coins);

       
        if (autoSelectFirst && coins.length > 0 && !defaultCoin) {
          setSelectedCoin(coins[0]);
          if (onSelect) {
            onSelect(coins[0]);
          }
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load cryptocurrencies");
      } finally {
        setLoadingCurrencies(false);
      }
    };

    fetchCoins();
  }, [autoSelectFirst, defaultCoin]);

  const handleSelect = (currency: Coin) => {
    setSelectedCoin(currency);
    setError("");
    if (onSelect) {
      onSelect(currency);
    }
  };

  return {
    currencies,
    loadingCurrencies,
    selectedCoin,
    error,
    handleSelect,
    setError,
  };
};