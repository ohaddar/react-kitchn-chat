import { Container, Spacer } from "kitchn";
import { Message } from "../types/type";

interface userMessageProps {
  message: Message;
}

const UserMessage = ({ message }: userMessageProps) => {
  return (
    <Container
      p={"10px"}
      style={{ alignSelf: "end", color: "#e0e0e0" }}
      className="chat-bubble-user"
    >
      {message.Content}
    </Container>
  );
};
export default UserMessage;
