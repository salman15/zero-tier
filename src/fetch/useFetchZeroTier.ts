import { useState, useEffect } from "react";
import { fetchZeroTier } from "./fetchZeroTier";

export const useFetchZeroTier = (endpoint: string) => {
  const [data, setData] = useState<unknown | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchZeroTier(endpoint)
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [endpoint]);

  return { data, error, loading };
};
