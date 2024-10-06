import { KitchnProvider } from "kitchn";

import "kitchn/fonts.css";
import { ChatPage } from "./pages/ChatPage";

export default function App() {
  return (
    <KitchnProvider>
      <ChatPage />
    </KitchnProvider>
  );
}
