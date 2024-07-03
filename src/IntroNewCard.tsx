import { Button } from "./components/ui/button";

const IntroNewCard = () => {
  return (
    <>
      <div className="flex flex-col justify-around align-center max-w-[620px] mx-4 max-h-[1200px] h-[90vh]">
        <h3 className="text-xl">The 4 of Clubs is at position 1</h3>
        <Button>Continue</Button>
      </div>
    </>
  );
};

export default IntroNewCard;
