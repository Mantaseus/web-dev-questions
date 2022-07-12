import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Sum up numbers in an array';
export const badges = ['JS', 'Array.reduce'];

const questionWrapperProps: QuestionWrapperProps<
  (numArr: number[]) => number
> = {
  funcTsTypeStr: `
  (numArr: number[]) => number
  `.trim(),
  title,
  badges,
  testArgs: [
    [[1, 2, 3, 100]],
    [[-1, 2, -3, 100]],
    [[]],
  ],
  idealSolution: function mySolution(numArr) {
    return numArr.reduce((sum, num) => sum + num, 0);
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that takes an array of numbers and returns their sum. If the array is empty
    then it should return <code>0</code>.
  </p>

  <h4>Examples</h4>
  <ol>
    <li>
      <code>mySolution([1, 2, 3, 100])</code> should return <code>106</code>
      <code>mySolution([])</code> should return <code>0</code>
    </li>
  </ol>
</QuestionWrapper>;
