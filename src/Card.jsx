import TitleEl from "./Title";
import CountEl from "./Count";
import ResetButtonEl from "./ResetButton";
import { useState, useEffect } from "react";
import ButtonContainer from "./ButtonContainer";

export default function CardEl() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  useEffect(() => {
    if (count === 5) {
      alert("You've reached the limit on this thing");
    }
  }, [count]);

  return (
    <div className="card">
      <TitleEl locked={locked} />
      <CountEl count={count} />
      <ResetButtonEl setReset={setCount} locked={locked} />
      <ButtonContainer setCount={setCount} locked={locked} />
    </div>
  );
}
