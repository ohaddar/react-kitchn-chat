import { Avatar, Container } from "kitchn";
import { Message } from "../../types/type";
import UserMessageContainer from "./UserMessage.styled";

interface userMessageProps {
  message: Message;
}

const UserMessage = ({ message }: userMessageProps) => {
  return (
    <Container
      display="flex"
      style={{ flexDirection: "row", justifyContent: "flex-end" }}
    >
      <Avatar
        src={message.Avatar}
        style={{ marginRight: "-15px", zIndex: "1" }}
      />
      <UserMessageContainer>{message.Content}</UserMessageContainer>
    </Container>
  );
};
export default UserMessage;
