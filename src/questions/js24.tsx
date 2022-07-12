import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Average of numbers in array';
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
    if (numArr.length) {
      return numArr.reduce((sum, num) => sum + num, 0) / numArr.length;
    }
    return 0;
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that takes an array of numbers and returns their average.
  </p>
  <p>
    An average value is calculated by summing up all the numbers we want to average and then dividing the sum with the
    number of nums we summed.
  </p>

  <h4>Examples</h4>
  <ol>
    <li><code>mySolution([1, 2, 3, 100])</code> should return <code>26.5</code></li>
    <li><code>mySolution([])</code> should return <code>0</code></li>
  </ol>
</QuestionWrapper>;
