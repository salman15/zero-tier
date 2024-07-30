export const fetchZeroTier = async (endpoint: string) => {
  if (!import.meta.env.VITE_ZT_API_URL || !import.meta.env.VITE_ACCESS_TOKEN) {
    throw new Error("Missing ZeroTier API URL or access token");
  }

  const response = await fetch(
    `${import.meta.env.VITE_ZT_API_URL}/${endpoint}`,
    {
      headers: {
        Authorization: `token ${import.meta.env.VITE_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
        "X-Frame-Options": "SAMEORIGIN",
      },
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch ZeroTier API: ${response.statusText}`);
  }

  return response.json();
};
