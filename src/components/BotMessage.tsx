import { Container } from "kitchn";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Message } from "../types/type";

interface botMessageProps {
  message: Message;
}

const BotMessage = ({ message }: botMessageProps) => {
  return (
    <>
      <Container
        p={"10px"}
        style={{
          alignSelf: "start",
          lineHeight: "1.6em",
          color: "#e0e0e0",
        }}
      >
        <Markdown remarkPlugins={[remarkGfm]}>{message.Content}</Markdown>
      </Container>
    </>
  );
};
export default BotMessage;
