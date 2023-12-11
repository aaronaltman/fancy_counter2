import TitleEl from "./Title";
import CountEl from "./Count";
import ResetButtonEl from "./ResetButton";
import { useState } from "react";
import ButtonContainer from "./ButtonContainer";

export default function CardEl() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <TitleEl />
      <CountEl count={count} />
      <ResetButtonEl setReset={setCount} />
      <ButtonContainer setCount={setCount} />
    </div>
  );
}
