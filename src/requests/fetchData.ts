export const fetchData = async (
  setSecret: (secret: string) => void,
  setIsLoading: (isLoading: boolean) => void
) => {
  try {
    const response = await fetch(
      "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/70726f"
    );
    const flagData = await response.text();
    setSecret(flagData);
    setIsLoading(false);
  } catch (error) {
    console.error("Error fetching secret --", error);
  }
};
