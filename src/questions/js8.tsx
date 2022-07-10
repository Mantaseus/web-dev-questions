import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Multiply with numbers in an array';
export const badges = ['JS', 'Array.map'];

const questionWrapperProps: QuestionWrapperProps<
  (numArr: number[], multiplier: number) => number[]
> = {
  funcTsTypeStr: `
  (numArr: number[], multiplier: number) => number[]
  `.trim(),
  title,
  badges,
  testArgs: [
    [[0, 1, 2, 10], 10],
    [[], 10],
  ],
  idealSolution: function mySolution(numArr, multiplier) {
    return numArr.map(num => num * multiplier)
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that takes an array of numbers, multiplies each number in the array by a number given by the user,
    and returns these new numbers in an array
  </p>

  <h4>Examples</h4>
  <ol>
    <li>Calling your function with <code>mySolution([0, 1, 2, 3], 10)</code> should return <code>[0, 10, 20, 30]</code></li>
  </ol>
</QuestionWrapper>;
