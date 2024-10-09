import WelcomeText from "./WelcomeText";
import WelcomeSuggesstions from "./WelcomeSuggesstions";

interface welcomeProps {
  addMessage: (text: string) => void;
}

const BotWelcomeMessage = ({ addMessage }: welcomeProps) => {
  return (
    <>
      <WelcomeText />
      <WelcomeSuggesstions addMessage={addMessage} />
    </>
  );
};
export default BotWelcomeMessage;
