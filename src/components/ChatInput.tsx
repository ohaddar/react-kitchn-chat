import {
  Button,
  Error,
  Input,
  KeyCode,
  KeyMod,
  useCurrentState,
  useKeyboard,
} from "kitchn";
import { RiArrowUpCircleLine } from "react-icons/ri";

interface inputProps {
  addMessage: (text: string) => void;
}
const ChatInput = ({ addMessage }: inputProps) => {
  const [localInput, setLocalInput] = useCurrentState("");
  const [error, setError] = useCurrentState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueFiled = e.target.value;
    if (valueFiled !== undefined && valueFiled.trim().length > 0) {
      setError("");
    }
    setLocalInput(e.target.value);
  };
  const handleSubmit = () => {
    if (localInput === undefined || localInput.trim().length === 0) {
      setError("The question must be non-empty.");
    } else {
      addMessage(localInput);
      setLocalInput("");
      setError("");
    }
  };
  const { bindings } = useKeyboard(handleSubmit, [KeyCode.Enter], {
    disableGlobalEvent: true,
  });
  return (
    <>
      <Input
        placeholder="Enter your question here..."
        suffix={
          <RiArrowUpCircleLine cursor={"pointer"} onClick={handleSubmit} />
        }
        value={localInput}
        onChange={handleChange}
        required
        clearable
        error={error}
        size="large"
        {...bindings}
      ></Input>
    </>
  );
};
export default ChatInput;
