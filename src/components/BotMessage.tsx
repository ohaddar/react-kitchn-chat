import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Message } from "../types/type";
import BotMessageContainer from "./BotMessage.styled";

interface botMessageProps {
  message: Message;
}

const BotMessage = ({ message }: botMessageProps) => {
  return (
    <>
      <BotMessageContainer>
        <Markdown remarkPlugins={[remarkGfm]}>{message.Content}</Markdown>
      </BotMessageContainer>
    </>
  );
};
export default BotMessage;
