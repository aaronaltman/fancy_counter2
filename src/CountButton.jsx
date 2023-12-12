import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ type, setCount }) {
  const handleClick = () => {
    setCount((prev) => (type === "minus" ? prev - 1 : prev + 1));
  };
  return (
    <>
      <button onClick={handleClick}>
        {type === "minus" ? (
          <PlusIcon className="count-btn-icon" />
        ) : (
          <MinusIcon className="count-btn-icon" />
        )}
      </button>
    </>
  );
}
