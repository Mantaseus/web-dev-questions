import { useEffect } from "react";
import { createSetupTest } from "../console_test";

const setupTest = createSetupTest<(array: number[]) => number[]>(
  [
    [[1,1,1,1]],
    [[1,1,2,1]],
  ],
  (arr) => arr.filter(num => num !== 1)
);

export const Question: React.FC = () => {
  useEffect(setupTest, []);
  return <div className="page">
    <div className="question-container">
      <h2>js1. filter</h2>

      <p>
        Create a function that removes all occurances of the number <code>1</code> from an array
        of numbers (passed in as an argument to your function)
      </p>

      <h4>Examples</h4>
      <ol>
        <li>An argument of <code>[1,1,1,1]</code> will return an empty array <code>[]</code> because all elements in the argument array are <code>1</code></li>
        <li>An argument of <code>[1,1,2,1]</code> will return an array like <code>[2]</code> because your function will take out all the <code>1</code> from the original array and leave behind the <code>2</code></li>
      </ol>

      <h4>Instructions</h4>
      <ol>
        <li>Open your browser console and run the code below</li>
        <li>Tweak the code in the console and run it until all the tests succeed</li>
      </ol>
      <pre>
        {`
/**
 * @param array - number[]
 * @returns number[]
 **/
function mySolution(array) {

}
test(mySolution)
        `.trim()}
      </pre>

      <h4>Requirements</h4>
      <ul>
        <li>Only use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">Array.filter()</a></li>
      </ul>
    </div>
  </div>;
};
