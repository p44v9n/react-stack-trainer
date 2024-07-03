import { Check } from "lucide-react";

const QuizProgress = () => {
  return (
    <ul className="list-none flex flex-row w-full justify-around">
      <ul className="list-none flex flex-row">
        {[...Array(10)].map((_, i) => (
          <li
            key={i}
            className="w-8 h-8 rounded-full border-emerald-900 border-2 bg-emerald-100 mx-1 my-2 text-emerald-900 flex justify-center items-center"
          >
            <Check />
          </li>
        ))}
      </ul>
    </ul>
  );
};
export default QuizProgress;
