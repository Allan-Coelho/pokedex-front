import GlobalStyle from "../styles/GlobalStyle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../contexts/UserContext.js";
import SignIn from "./SignInPage.js";
import SignUp from "./SignUpPage.js";
import PokeTeamsPage from "./PokeTeamsPage.js";

export default function App() {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
}

function Root() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/poketeams" element={<PokeTeamsPage />} />
        </Routes>
      </>
    </UserContext.Provider>
  );
}
