import {
  Badge,
  Container,
  Scroller,
  Spacer,
  Spinner,
  useBreakpoint,
  useCurrentState,
} from "kitchn";
import ChatInput from "../components/ChatInput";
import { useEffect } from "react";
import Chat from "../api/Chat";
import { Message } from "../types/type";

export const ChatPage = () => {
  const [messages, setMessages] = useCurrentState<Message[]>([]);
  const [loading, setLoading] = useCurrentState<Boolean>(false);
  const { isMobile } = useBreakpoint();

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
  }, [messages]);

  const calculateWidth = (): string => {
    return isMobile ? "100%" : "80%";
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
              <Container p={"10px"} style={{ alignSelf: "end" }}>
                {message.Content}
              </Container>
            )}
            {message.Sender === "Bot" && (
              <>
                <Container p={"10px"} style={{ alignSelf: "end" }}>
                  {message.Content}
                </Container>
              </>
            )}
          </Container>
        ))}
        {loading && <Spinner />}
      </Scroller>
      <ChatInput addMessage={addMessage} />
    </Container>
  );
};
