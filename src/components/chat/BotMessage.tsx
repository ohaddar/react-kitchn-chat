import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Message } from "../../types/type";
import BotMessageContainer from "./BotMessage.styled";
import { useBreakpoint } from "kitchn";

interface botMessageProps {
  message: Message;
}

const BotMessage = ({ message }: botMessageProps) => {
  const { isMobile } = useBreakpoint();
  const calculateBotContainerWidth = (): string => {
    return isMobile ? "100%" : "70%";
  };
  return (
    <>
      <BotMessageContainer width={calculateBotContainerWidth()}>
        <Markdown remarkPlugins={[remarkGfm]}>{message.Content}</Markdown>
      </BotMessageContainer>
    </>
  );
};
export default BotMessage;
