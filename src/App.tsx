import { KitchnProvider, useCurrentState } from "kitchn";

import "kitchn/fonts.css";
import { ChatPage } from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export default function App() {
  const [nickNameValue, setNickNameValue] = useCurrentState<string | undefined>(
    undefined
  );
  const [avatarValue, setAvatarValue] = useCurrentState<string | undefined>(
    undefined
  );
  const [isAuth, setIsAuth] = useCurrentState<boolean>(false);

  return (
    <KitchnProvider>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <HomePage
                nickNameValue={nickNameValue}
                setNickNameValue={setNickNameValue}
                avatarValue={avatarValue}
                setAvatarValue={setAvatarValue}
                setIsAuth={setIsAuth}
              />
            }
            path="/"
          />
          <Route
            path="chat"
            element={
              isAuth ? (
                <ChatPage username={nickNameValue} userAvatar={avatarValue} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </KitchnProvider>
  );
}
