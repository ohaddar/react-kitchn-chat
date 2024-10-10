import { Message } from "../types/type";
import UserMessageContainer from "./UserMessage.styled";

interface userMessageProps {
  message: Message;
}

const UserMessage = ({ message }: userMessageProps) => {
  return <UserMessageContainer>{message.Content}</UserMessageContainer>;
};
export default UserMessage;
