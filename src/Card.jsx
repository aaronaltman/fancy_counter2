import TitleEl from "./Title";
import CountEl from "./Count";
import ResetButtonEl from "./ResetButton";
import CountButtonsEl from "./CountButtons";
import { useState } from "react";

export default function CardEl() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <TitleEl />
      <CountEl count={count} />
      <ResetButtonEl setReset={setCount} />
      <CountButtonsEl setCount={setCount} />
    </div>
  );
}
