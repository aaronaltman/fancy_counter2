import TitleEl from "./Title";
import CountEl from "./Count";
import ResetButtonEl from "./ResetButton";
import CountButtonsEl from "./CountButtons";

export default function CardEl() {
  return (
    <div className="card">
      <TitleEl />
      <CountEl number={0} />
      <ResetButtonEl />
      <CountButtonsEl />
    </div>
  );
}
