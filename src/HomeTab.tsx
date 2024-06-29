import { useState } from "react";
import { BadgeInfo, ChevronRight, Flame } from "lucide-react";
import { Button } from "./components/ui/button";
import Quiz from "./Quiz";

const HomeTab = () => {
  const [startQuiz, setStartQuiz] = useState(false);

  return (
    <>
      {startQuiz && <Quiz />}
      {!startQuiz && (
        <div className="mx-4 flex flex-col justify-between align-center w-90 max-w-[620px] mx-auto max-h-[1200px] h-[85vh]">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <Flame />
              &nbsp;32
            </div>
            <BadgeInfo />
          </div>
          <p>Learn the order of the cards</p>
          <Button className="animate-bounce" onClick={() => setStartQuiz(true)}>
            Start Now <ChevronRight />
          </Button>
        </div>
      )}
    </>
  );
};

export default HomeTab;
