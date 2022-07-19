import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import {
  SignIn,
  SignUp,
  Main,
  ReadingIntentions,
  ReadingNotes,
  SearchInGoogleAPI,
} from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/main" element={<Main />} />
          <Route path="/intentions" element={<ReadingIntentions />} />
          <Route path="/readings/:id" element={<ReadingNotes />} />
          <Route path="/search-book" element={<SearchInGoogleAPI />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
