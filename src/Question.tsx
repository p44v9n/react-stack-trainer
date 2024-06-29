import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "./components/ui/button";

const Question = () => {
  const [activeOption, setActiveOption] = useState<number | null>(null);

  const handleClick = (option: number) => {
    setActiveOption(option);
  };

  return (
    <div className="flex flex-col min-h-screen justify-around align-center max-w-[620px] mx-4 max-h-[1200px] h-[90vh]">
      <h3 className="text-xl">
        What position is the <strong>4 of clubs?</strong>
      </h3>
      <form>
        <div className="grid grid-rows-2 grid-cols-2 gap-4">
          <div className="relative">
            <input
              className="peer peer hidden"
              id="option_1"
              type="radio"
              name="radio"
              onClick={() => handleClick(1)}
            />
            <label
              className="flex cursor-pointer flex-col rounded-lg border border-gray-300 p-4 peer-checked:bg-indigo-50 peer-checked:border-indigo-700"
              htmlFor="option_1"
            >
              <span className="mt-2 text-center h-32 flex flex-col justify-around text-xl font-bold">
                22
              </span>
            </label>
          </div>
          <div className="relative">
            <input
              className="peer hidden"
              id="option_2"
              type="radio"
              name="radio"
              onClick={() => handleClick(2)}
            />
            <label
              className="flex cursor-pointer flex-col rounded-lg border border-gray-300 p-4 peer-checked:bg-indigo-50 peer-checked:border-indigo-700"
              htmlFor="option_2"
            >
              <span className="mt-2 text-center h-32 flex flex-col justify-around text-xl font-bold">
                22
              </span>
            </label>
          </div>
          <div className="relative">
            <input
              className="peer hidden"
              id="option_3"
              type="radio"
              name="radio"
              onClick={() => handleClick(3)}
            />
            <label
              className="flex cursor-pointer flex-col rounded-lg border border-gray-300 p-4 peer-checked:bg-indigo-50 peer-checked:border-indigo-700"
              htmlFor="option_3"
            >
              <span className="mt-2 text-center h-32 flex flex-col justify-around text-xl font-bold">
                22
              </span>
            </label>
          </div>
          <div className="relative">
            <input
              className="peer hidden"
              id="option_4"
              type="radio"
              name="radio"
              onClick={() => handleClick(4)}
            />
            <label
              className="flex cursor-pointer flex-col rounded-lg border border-gray-300 p-4 peer-checked:bg-indigo-50 peer-checked:border-indigo-700"
              htmlFor="option_4"
            >
              <span className="mt-2 text-center h-32 flex flex-col justify-around text-xl font-bold">
                22
              </span>
            </label>
          </div>
        </div>
        <Button className="mt-8 w-full">
          Continue <ChevronRight />
        </Button>
      </form>
    </div>
  );
};

export default Question;
