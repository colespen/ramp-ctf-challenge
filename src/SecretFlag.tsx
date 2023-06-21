import { useState, useEffect } from "react";

const SecretFlag = () => {
  const [secret, setSecret] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/70726f');
        const flagData = await response.text();
        setSecret(flagData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching flag:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <h1>
          {secret.split('').map((character, index) => (
            <li key={index}>{character}</li>
          ))}
        </h1>
      )}
    </div>
  );

};

export default SecretFlag