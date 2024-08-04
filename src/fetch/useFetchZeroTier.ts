import { useState } from "react";
import { fetchZeroTier, FetchZeroTierResponseType } from "./fetchZeroTier";

export const useFetchZeroTier = (endpoint: string) => {
  const [data, setData] = useState<FetchZeroTierResponseType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onFetch = async () => {
    setLoading(true);
    try {
      const data = await fetchZeroTier(endpoint);
      setData(data);
    } catch (error) {
      setError(JSON.stringify(error));
    }
    setLoading(false);
  };

  return [onFetch, { data, error, loading }] as const;
};
