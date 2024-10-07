import {
  Container,
  Scroller,
  Spacer,
  Spinner,
  useBreakpoint,
  useCurrentState,
} from "kitchn";
import ChatInput from "../components/ChatInput";
import { useEffect, useRef } from "react";
import Chat from "../api/Chat";
import { Message } from "../types/type";

import "./style.css";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const ChatPage = () => {
  const [messages, setMessages] = useCurrentState<Message[]>([]);
  const [loading, setLoading] = useCurrentState<Boolean>(false);
  const { isMobile } = useBreakpoint();
  const scrollRef = useRef<HTMLDivElement>(null);
  const chat = new Chat();

  const addMessage = (text: string) => {
    const userMessage: Message = {
      Content: text,
      Sender: "User",
    };
    setMessages([...messages, userMessage]);
    setLoading(true);
  };

  useEffect(() => {
    const userMessage = messages[messages.length - 1];
    if (userMessage?.Sender === "User") {
      chat.getBotResponse(userMessage.Content).then((response) => {
        const botResponse: Message = {
          Content: response,
          Sender: "Bot",
        };
        setLoading(false);

        setMessages([...messages, botResponse]);
      });
    }
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const calculateWidth = (): string => {
    return isMobile ? "100%" : "70%";
  };

  return (
    <Container
      w={calculateWidth()}
      h={"100vh"}
      p={"15px"}
      justify="space-between"
      m={"auto"}
    >
      <Scroller w={"100%"} h={"100%"}>
        {messages.map((message, index) => (
          <Container key={index}>
            {index > 0 && <Spacer y={2} />}
            {message.Sender === "User" && (
              <Container
                p={"10px"}
                style={{ alignSelf: "end" }}
                className="chat-bubble-user"
              >
                {message.Content}
              </Container>
            )}
            {message.Sender === "Bot" && (
              <>
                <Container
                  p={"10px"}
                  style={{ alignSelf: "start", lineHeight: "1.6em" }}
                >
                  <Markdown remarkPlugins={[remarkGfm]}>
                    {message.Content}
                  </Markdown>
                </Container>
              </>
            )}
          </Container>
        ))}
        {loading && <Spinner />}
        <Container ref={scrollRef}></Container>
      </Scroller>
      <Spacer y={1} />
      <ChatInput addMessage={addMessage} />
    </Container>
  );
};
