import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Filter out all even numbers from array';
export const badges = ['JS', 'Array.filter', "Modulus operator"];

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
    [[1, 3, 5]],
    [[2, 4, 2]],
    [[]],
  ],
  idealSolution: function mySolution(numArr) {
    return numArr.filter(num => num % 2);
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that takes an array of numbers and filters out any even numbers and keeps any odd numbers in the array.
  </p>
  <p>
    <strong>Note:</strong> <code>0</code> is considered even
  </p>

  <h4>Examples</h4>
  <ol>
    <li>Calling your function with <code>mySolution([0, 1, 2, 3])</code> should return <code>[1]</code></li>
    <li>Calling your function with <code>mySolution([2, 2])</code> should return <code>[]</code></li>
  </ol>
</QuestionWrapper>;
