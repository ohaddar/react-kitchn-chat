import {
  Badge,
  Container,
  Scroller,
  Spacer,
  useBreakpoint,
  useCurrentState,
} from "kitchn";
import ChatInput from "../components/ChatInput";

export const ChatPage = () => {
  const [messages, setMessages] = useCurrentState<string[]>([]);
  const { isMobile } = useBreakpoint();

  const addMessage = (text: string) => {
    setMessages([...messages, text]);
  };

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
            <Badge
              p={"10px"}
              w={"min-content"}
              style={{ alignSelf: "end" }}
              type="secondary"
            >
              {message}
            </Badge>
            <Container key={index + "botMessage"}>
              Bot response is coming soon...
            </Container>
          </Container>
        ))}
      </Scroller>
      <ChatInput addMessage={addMessage} />
    </Container>
  );
};
