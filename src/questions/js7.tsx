import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Double numbers in an array';
export const badges = ['JS', 'Array.map'];

const questionWrapperProps: QuestionWrapperProps<
  (numArr: number[]) => number[]
> = {
  funcTsTypeStr: `
  (numArr: number[]) => number[]
  `.trim(),
  title,
  badges,
  testArgs: [
    [[0, 1, 2, 10]],
    [[]],
  ],
  idealSolution: function mySolution(numArr) {
    return numArr.map(num => num * 2);
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that takes an array of numbers, multiplies each number in the array by 2, and returns
    these new numbers in an array
  </p>

  <h4>Examples</h4>
  <ol>
    <li>Calling your function with <code>mySolution([0, 1, 2, 3])</code> should return <code>[0, 2, 4, 6]</code></li>
  </ol>
</QuestionWrapper>;
