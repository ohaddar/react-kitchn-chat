import { Container, Scroller, Spacer, Spinner } from "kitchn";
import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";
import { Message } from "../types/type";
import { RefObject } from "react";

interface messageListProps {
  messages: Message[];
  loading: Boolean;
  scrollRef: RefObject<HTMLDivElement>;
}

const MessageList = ({ messages, loading, scrollRef }: messageListProps) => {
  return (
    <Scroller w={"100%"} h={"100%"}>
      {messages.map((message, index) => (
        <Container key={index}>
          {index > 0 && <Spacer y={2} />}
          {message.Sender === "User" && <UserMessage message={message} />}
          {message.Sender === "Bot" && <BotMessage message={message} />}
        </Container>
      ))}
      {loading && <Spinner />}
      <Container ref={scrollRef}></Container>
    </Scroller>
  );
};
export default MessageList;
