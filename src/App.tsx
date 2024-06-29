import "./App.css";
import { useState } from "react";
import TabPage from "./TabPage";
import Onboarding from "./Onboarding";
// import Quiz from "./Quiz";

function App() {
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  return (
    <>
      {onboardingComplete && <TabPage />}
      {!onboardingComplete && (
        <Onboarding setOnboardingComplete={setOnboardingComplete} />
      )}
      {/* <Quiz /> */}
    </>
  );
}

export default App;
