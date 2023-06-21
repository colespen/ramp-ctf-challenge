import { useEffect, useState } from "react";

let typeDelay: NodeJS.Timer;
const Typewriter = ({
  secret,
  isLoading,
}: {
  secret: string;
  isLoading: boolean;
}) => {
  const [secretText, setSecretText] = useState("");
  const [started, setStarted] = useState(false);

  const handleGenerate = () => {
    if (started) { // will prevent repeat generation in case of re-render!
      return;
    }
    setStarted(true);
    let index = -1;
    typeDelay = setInterval(() => {
      index++;
      if (index === secret.length - 1) { // need to clear at end of string
        clearInterval(typeDelay);
      }
      setSecretText((prev) => prev + secret[index]);
    }, 500);
  };

  useEffect(() => {
    if (!isLoading) {
      handleGenerate();
    }

    return () => {
      clearInterval(typeDelay);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <ul className="secret">
      {secretText.split("").map((character, index) => (
        <li key={index}>{character}</li>
      ))}
    </ul>
  );
};

export default Typewriter;
