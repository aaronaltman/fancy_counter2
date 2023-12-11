import { ResetIcon } from "@radix-ui/react-icons";
//reset button resets the count back to "0"

export default function ResetButtonEl({ setReset }) {
  const handleClick = () => {
    setReset(0);
  };
  return (
    <>
      <button onClick={handleClick} className="reset-btn">
        <ResetIcon className="reset-btn-icon" />
      </button>
    </>
  );
}
