export interface Message {
  Content: string;
  Sender: "User" | "Bot";
  Avatar: string | undefined;
}
