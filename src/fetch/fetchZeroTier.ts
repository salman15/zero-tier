import { mockNetwork } from "@/mocks";

export type FetchZeroTierResponseType = typeof mockNetwork;
export const fetchZeroTier = async (
  endpoint: string
): Promise<FetchZeroTierResponseType> => {
  if (!import.meta.env.VITE_API_URL) {
    throw new Error("Missing ZeroTier API URL or access token");
  }

  const response = await fetch(`${import.meta.env.VITE_API_URL}/${endpoint}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch ZeroTier API: ${response.statusText}`);
  }

  return response.json();
};
