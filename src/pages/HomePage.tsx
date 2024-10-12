import { Avatar, Button, Error, useBreakpoint, useCurrentState } from "kitchn";
import NicknameInput from "../components/home/NicknameInput";
import { useNavigate } from "react-router-dom";
import { HomeContainer, HomeSubContainer } from "./HomePage.styled";

interface HomePageProps {
  nickNameValue: string | undefined;
  setNickNameValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  avatarValue: string | undefined;
  setAvatarValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const HomePage = ({
  nickNameValue,
  setNickNameValue,
  avatarValue,
  setAvatarValue,
  setIsAuth,
}: HomePageProps) => {
  const [error, setError] = useCurrentState<boolean>(false);
  const navigate = useNavigate();
  const { isMobile } = useBreakpoint();

  const handleSubmit = () => {
    if (
      nickNameValue === undefined ||
      nickNameValue?.trim().length === 0 ||
      avatarValue === undefined
    ) {
      setError(true);
      setIsAuth(false);
    } else {
      setError(false);
      setIsAuth(true);
      navigate("/chat");
    }
  };
  const avatars: string[] = [
    "/avatar/avatar1.webp",
    "/avatar/avatar4.webp",
    "/avatar/avatar2.webp",
    "/avatar/avatar7.webp",
    "/avatar/avatar5.webp",
    "/avatar/avatar6.webp",
  ];
  const calculatePadding = (): string => {
    return isMobile ? "6rem" : "10rem";
  };

  return (
    <HomeContainer>
      <NicknameInput
        label="Who are you 👽 !"
        placeholder="your nickname..."
        onChange={(e) => {
          setNickNameValue(e.target.value);
        }}
        value={nickNameValue}
      ></NicknameInput>

      <HomeSubContainer>
        {avatars.map((avatar: string, index: number) => (
          <Avatar
            onClick={() => setAvatarValue(avatar)}
            style={{
              border: `${
                avatarValue === avatar ? "3px" : "0px"
              } solid rgb(70,38,228)`,
            }}
            key={index}
            src={avatar}
            size={avatarValue === avatar ? 65 : 60}
          ></Avatar>
        ))}
      </HomeSubContainer>
      {error && (
        <Error
          style={{ paddingLeft: `${calculatePadding()}`, marginBottom: "1rem" }}
        >
          you should fill the inputs to pass
        </Error>
      )}

      <Button onClick={handleSubmit} w={"50%"} m={"auto"}>
        Join the Chat
      </Button>
    </HomeContainer>
  );
};
export default HomePage;
