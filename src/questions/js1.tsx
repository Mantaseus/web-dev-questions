import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Badges } from "../components/Badges";
import { IdealSolution } from "../components/IdealSolution";
import { ArgsIntructionData, ResultInstructionData, Instructions } from "../components/Instructions";
import { createSetupTest } from "../console_test";

export const name = 'filter';
export const badges = ['Array.filter'];

const args: ArgsIntructionData[] = [
  { name: 'array', type: 'number[]' },
]
const returns: ResultInstructionData = { type: 'number[]' }
const setupTest = createSetupTest<(array: number[]) => number[]>(
  [
    [[1,1,1,1]],
    [[1,1,2,1]],
  ],
  arr => arr.filter(num => num !== 1)
);

export const Question: React.FC = () => {
  useEffect(setupTest, []);
  const location = useLocation();
  const questionNum = location.pathname.replace('/', '');

  return <div className="page">
    <div className="question-container">
      <h2>{questionNum}. {name}</h2>
      <Badges badges={badges}/>

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
      <IdealSolution func={setupTest.idealSolution} />
    </div>
  </div>;
};
