import { Button, Input, useCurrentState } from "kitchn";

interface inputProps {
  addMessage: (text: string) => void;
}
const ChatInput = ({ addMessage }: inputProps) => {
  const [localInput, setLocalInput] = useCurrentState("");

  const handleSubmit = () => {
    addMessage(localInput);
    setLocalInput("");
  };

  return (
    <>
      <Input
        placeholder="Enter your question here..."
        suffix="Send"
        value={localInput}
        onChange={(e) => setLocalInput(e.target.value)}
        required
      ></Input>
      <Button onClick={handleSubmit}>Send</Button>
    </>
  );
};
export default ChatInput;
