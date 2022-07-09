import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Badges } from "../components/Badges";
import { useQuestionKey } from "../components/hooks";
import { IdealSolution } from "../components/IdealSolution";
import { ArgsIntructionData, ResultInstructionData, Instructions } from "../components/Instructions";
import { QuestionHeader } from "../components/QuestionHeader";
import { createTestSetupFunc } from "../console_test";

export const name = 'filter';
export const badges = ['Array.filter'];

const args: ArgsIntructionData[] = [
  { name: 'array', type: 'number[]' },
]
const returns: ResultInstructionData = { type: 'number[]' }
const tests = createTestSetupFunc<(array: number[]) => number[]>(
  [
    [[1,1,1,1]],
    [[1,1,2,1]],
  ],
  arr => arr.filter(num => num !== 1)
);

export const Question: React.FC = () => {
  tests.useTestSetup();
  return <div className="page">
    <div className="question-container">
      <QuestionHeader title={name} badges={badges}/>

      <p>
        Create a function that removes all occurances of the number <code>1</code> from an array
        of numbers (passed in as an argument to your function)
      </p>

      <h4>Examples</h4>
      <ol>
        <li>An argument of <code>[1,1,1,1]</code> will return an empty array <code>[]</code> because all elements in the argument array are <code>1</code></li>
        <li>An argument of <code>[1,1,2,1]</code> will return an array like <code>[2]</code> because your function will take out all the <code>1</code> from the original array and leave behind the <code>2</code></li>
      </ol>

      <Instructions args={args} returns={returns} />
      <IdealSolution func={tests.idealSolution} />
    </div>
  </div>;
};
