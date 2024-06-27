import { Button } from "./components/ui/button";

interface OnboardingProps {
  setOnboardingComplete: (complete: boolean) => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ setOnboardingComplete }) => {
  const completeOnboarding = () => {
    setOnboardingComplete(true);
  };

  return (
    <div className="flex flex-col min-h-screen justify-around items-center mx-8">
      <section>
        <p className="mb-4 animated fadeInUp">what if I told you</p>
        <p className="mb-4 animated fadeInUp delay-1s">
          you could learn a whole new language
        </p>
        <p className="mb-4 animated fadeInUp delay-2s">
          you could use it to <strong>speak miracles</strong>
        </p>
        <p className="mb-4 animated fadeInUp  delay-3s">
          and it only has 52 words
        </p>
        <p className="mb-4 animated fadeInUp delay-4s">would you learn it?</p>
      </section>
      <section>
        <Button
          className="animated fadeInUp delay-5s"
          onClick={completeOnboarding}
        >
          teach me
        </Button>
      </section>
    </div>
  );
};

export default Onboarding;
