import { useEffect, useRef, useState } from "react";
import { fetchZeroTier, FetchZeroTierResponseType } from "./fetchZeroTier";

export const useFetchZeroTier = (endpoint: string) => {
  const initialCallDone = useRef(false);
  const [data, setData] = useState<FetchZeroTierResponseType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!initialCallDone.current) {
      initialCallDone.current = true;
      return;
    }
    onFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return [{ data, error, loading }, onFetch] as const;
};
