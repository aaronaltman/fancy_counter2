import { ResetIcon } from "@radix-ui/react-icons";
//reset button resets the count back to "0"

export default function ResetButtonEl({ setReset }) {
  return (
    <>
      <button onClick={() => setReset(0)} className="reset-btn">
        <ResetIcon className="reset-btn-icon" />
      </button>
    </>
  );
}
