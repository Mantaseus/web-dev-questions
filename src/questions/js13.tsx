import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Square numbers in an array';
export const badges = ['JS', 'Array.map', 'Math.pow'];

const questionWrapperProps: QuestionWrapperProps<
  (numArr: number[]) => number[]
> = {
  funcTsTypeStr: `
  (numArr: number[]) => number[]
  `.trim(),
  title,
  badges,
  testArgs: [
    [[0, 1, 2, 3]],
    [[]],
  ],
  idealSolution: function mySolution(numArr) {
    return numArr.map(num => Math.pow(num, 2));
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that takes an array of numbers and returns a new array with each number from the original
    array being squared.
  </p>

  <h4>Examples</h4>
  <ol>
    <li><code>mySolution([0, 1, 2, 10])</code> should return <code>[0, 1, 4, 100]</code></li>
  </ol>
</QuestionWrapper>;
