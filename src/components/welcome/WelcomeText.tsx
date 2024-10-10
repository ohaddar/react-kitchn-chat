import { Container, Text } from "kitchn";

const WelcomeText = () => {
  return (
    <Container m={"50px auto"} display="flex" align="center">
      <Text weight={"bold"} monospace p={"10px"} color="#e0e0e0">
        Hello! 👋
      </Text>
      <Text monospace color="#e0e0e0">
        I'm your virtual assistant.
      </Text>
      <Text monospace color="#e0e0e0" weight={"bold"} p={"10px"}>
        How can I assist you today?
      </Text>
    </Container>
  );
};
export default WelcomeText;
