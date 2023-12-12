import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import CountButton from "./CountButton";

export default function ButtonContainer({ setCount }) {
  return (
    <>
      <div className="button-container">
        <button>
          <CountButton type="plus" setCount={setCount} />
          <CountButton type="minus" setCount={setCount} />
        </button>
      </div>
    </>
  );
}
