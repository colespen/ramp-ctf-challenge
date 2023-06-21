import { useEffect, useState } from "react";

let typeDelay: NodeJS.Timer;
const Typewriter = ({
  secret,
  isLoading,
}: {
  secret: string;
  isLoading: boolean;
}) => {
  const [text, setText] = useState("");
  const [started, setStarted] = useState(false);

  const handleGenerate = () => {
    if (started) {
      return;
    }
    setStarted(true);
    let i = -1;
    typeDelay = setInterval(() => {
      i++;
      if (i === secret.length - 1) clearInterval(typeDelay);
      setText((prev) => prev + secret[i]);
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
      {text.split("").map((character, index) => (
        <li key={index}>{character}</li>
      ))}
    </ul>
  );
};

export default Typewriter;
