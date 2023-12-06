import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

const CountButtonsEl = ({ setCount }) => {
  return (
    <div className="button-container">
      <button className="count-btn">
        <MinusIcon className="count-btn-icon" />
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
        className="count-btn"
      >
        <PlusIcon className="count-btn-icon" />
      </button>
    </div>
  );
};

export default CountButtonsEl;
