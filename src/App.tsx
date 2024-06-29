import "./App.css";
import { useState } from "react";
import TabPage from "./TabPage";
import Onboarding from "./Onboarding";
import Question from "./Question";

function App() {
  const [onboardingComplete, setOnboardingComplete] = useState(true);
  return (
    <>
      {/* {onboardingComplete && <TabPage />}
      {!onboardingComplete && (
        <Onboarding setOnboardingComplete={setOnboardingComplete} />
      )} */}
      <Question />
    </>
  );
}

export default App;
