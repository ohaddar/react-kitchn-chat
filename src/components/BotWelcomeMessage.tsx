import kitchn, { Button, Container, Link, Spacer, Text } from "kitchn";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface welcomeProps {
  addMessage: (text: string) => void;
}

const BotWelcomeMessage = ({ addMessage }: welcomeProps) => {
  const handleButton1Click =
    (text: string): React.MouseEventHandler<HTMLButtonElement> =>
    () => {
      addMessage(text);
    };
  const handleButton2Click =
    (text: string): React.MouseEventHandler<HTMLButtonElement> =>
    () => {
      addMessage(text);
    };
  const handleButton3Click =
    (text: string): React.MouseEventHandler<HTMLButtonElement> =>
    () => {
      addMessage(text);
    };
  const handleButton4Click =
    (text: string): React.MouseEventHandler<HTMLButtonElement> =>
    () => {
      addMessage(text);
    };

  return (
    <>
      <Container m={"auto"} display="flex" align="center">
        <Spacer y={5} />
        <Text weight={"bold"} monospace p={"10px"} style={{ color: "#e0e0e0" }}>
          Hello! 👋{" "}
        </Text>
        <Text monospace style={{ color: "#e0e0e0" }}>
          I'm your virtual assistant.{" "}
        </Text>
        <Text
          monospace
          style={{ fontWeight: "bold", color: "#e0e0e0" }}
          p={"10px"}
        >
          How can I assist you today?
        </Text>
        <Spacer y={5} />
      </Container>
      <Container
        display="grid"
        w={"500px"}
        m={"auto"}
        style={{
          gridTemplateColumns: "repeat(2, 1fr)",
          justifyItems: "center",
        }}
      >
        <Button
          w={"200px"}
          p={"30px"}
          variant={"ghost"}
          m={"5px"}
          type={"primary"}
          style={{ border: "1px solid rgb(34, 34, 36) " }}
          onClick={handleButton1Click("What is React js")}
        >
          {"What is React js"}
        </Button>
        <Button
          w={"200px"}
          p={"30px"}
          variant={"ghost"}
          m={"5px"}
          type={"primary"}
          style={{ border: "1px solid rgb(34, 34, 36) " }}
          onClick={handleButton2Click("Use memo hook")}
        >
          {"Use memo hook"}
        </Button>
        <Button
          w={"200px"}
          p={"30px"}
          m={"5px"}
          variant={"ghost"}
          type={"primary"}
          style={{ border: "1px solid rgb(34, 34, 36) " }}
          onClick={handleButton3Click("React components")}
        >
          {"React components"}
        </Button>
        <Button
          w={"200px"}
          m={"5px"}
          p={"30px"}
          variant={"ghost"}
          type={"primary"}
          style={{ border: "1px solid rgb(34, 34, 36) " }}
          onClick={handleButton4Click("Class components")}
        >
          {"Class components"}
        </Button>
      </Container>
    </>
  );
};
export default BotWelcomeMessage;
