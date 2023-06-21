import { useState, useEffect } from "react";
import { fetchData } from "./requests/fetchData";
import "./SecretFlag.css";
import Typewriter from "./Typewriter";

const SecretFlag = () => {
  const [secret, setSecret] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDelay = setTimeout(() => {
      fetchData(setSecret, setIsLoading);
    }, 2000);

    return () => clearTimeout(fetchDelay);
  }, [isLoading, secret]);

  return (
    <div>
      {isLoading ? (
        <p className="loading">Loading . . .</p>
      ) : (
        <div>
          <Typewriter secret={secret} isLoading={isLoading} />
        </div>
      )}
    </div>
  );
};

export default SecretFlag;
