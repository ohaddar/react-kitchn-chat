import WelcomeText from "./WelcomeText";
import WelcomeSuggesstions from "./WelcomeSuggesstions";

interface welcomeProps {
  addMessage: (text: string) => void;
  username: string | undefined;
}

const BotWelcomeMessage = ({ addMessage, username }: welcomeProps) => {
  return (
    <>
      <WelcomeText username={username} />
      <WelcomeSuggesstions addMessage={addMessage} />
    </>
  );
};
export default BotWelcomeMessage;
