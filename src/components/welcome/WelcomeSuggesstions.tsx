import { Button, useBreakpoint } from "kitchn";
import WelcomeContainer from "./WelcomeSuggesstions.styled";
interface welcomeSuggesstionProps {
  addMessage: (text: string) => void;
}

const WelcomeSuggesstions = ({ addMessage }: welcomeSuggesstionProps) => {
  const { isMobile } = useBreakpoint();
  const calculateContainerWidth = (): string => {
    return isMobile ? "400px" : "500px";
  };
  const calculateButtonWidth = (): string => {
    return isMobile ? "154px" : "200px";
  };
  const calculateButtonMargin = (): string => {
    return isMobile ? "15px" : "5px";
  };
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
    <WelcomeContainer width={calculateContainerWidth()}>
      {suggesstins.map((item, index) => (
        <Button
          w={calculateButtonWidth()}
          p={"30px"}
          variant={"ghost"}
          m={calculateButtonMargin()}
          type={"primary"}
          bs="solid"
          bc="rgb(34, 34, 36)"
          bw="1px"
          key={index}
          onClick={handleButtonClick(item)}
        >
          {item}
        </Button>
      ))}
    </WelcomeContainer>
  );
};
export default WelcomeSuggesstions;
