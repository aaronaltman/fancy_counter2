import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function ButtonContainer({ type, setCount }) {
  return (
    <>
      <div className="button-container">
        <button>
          <CountButton setCount={setCount} />
          <CountButton setCount={setCount} />
        </button>
      </div>
    </>
  );
}

function CountButton({ type, setCount }) {
  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}></button>
    </>
  );
}
