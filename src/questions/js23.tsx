import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Altername sum and subtract numbers in an array';
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
    return numArr.reduce((sum, num, i) => sum + ((i % 2 ? -1 : 1) * num), 0);
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that takes an array of numbers and returns a number.
    The returned value is calulated like this: <code>arr[0] - arr[1] + arr[2] - arr[3] + arr[4] - ...</code> and so on.
    In other words, we alternate between addition and subtraction of the numbers.
  </p>

  <h4>Examples</h4>
  <ol>
    <li><code>mySolution([1, 2, 3, 100])</code> should return <code>101</code></li>
    <li><code>mySolution([])</code> should return <code>0</code></li>
  </ol>

  <details>
    <summary><strong>Hint</strong></summary>
    Elements at even indexes are added. Elements at odd indexes are subtracted
  </details>
</QuestionWrapper>;
