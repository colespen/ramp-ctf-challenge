export const fetchData = async (
  setSecret: (secret: string) => void,
  setIsLoading: (isLoading: boolean) => void
) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_SECRET_URL}`);
    const flagData = await response.text();
    setSecret(flagData);
    setIsLoading(false);
  } catch (error) {
    console.error("Error fetching secret --", error);
  }
};
