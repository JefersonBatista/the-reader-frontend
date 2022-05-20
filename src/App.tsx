import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import {
  SignIn,
  SignUp,
  Main,
  AddReading,
  ReadingIntentions,
  AddReadingIntention,
} from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/main" element={<Main />} />
          <Route path="/add-reading" element={<AddReading />} />
          <Route path="/intentions" element={<ReadingIntentions />} />
          <Route
            path="/add-reading-intention"
            element={<AddReadingIntention />}
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
