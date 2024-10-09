import { Button, Container } from "kitchn";
interface welcomeSuggesstionProps {
  addMessage: (text: string) => void;
}

const WelcomeSuggesstions = ({ addMessage }: welcomeSuggesstionProps) => {
  const handleButtonClick =
    (text: string): React.MouseEventHandler<HTMLButtonElement> =>
    () => {
      addMessage(text);
    };
  const suggesstins: string[] = [
    "What is React js",
    "Use memo hook",
    "React components",
    "Class components",
  ];

  return (
    <Container
      display="grid"
      w={"500px"}
      m={"auto"}
      style={{
        gridTemplateColumns: "repeat(2, 1fr)",
        justifyItems: "center",
      }}
    >
      {suggesstins.map((item, index) => (
        <Button
          w={"200px"}
          p={"30px"}
          variant={"ghost"}
          m={"5px"}
          type={"primary"}
          style={{ border: "1px solid rgb(34, 34, 36) " }}
          key={index}
          onClick={handleButtonClick(item)}
        >
          {item}
        </Button>
      ))}
    </Container>
  );
};
export default WelcomeSuggesstions;
