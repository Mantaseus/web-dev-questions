import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Array of arrays from array';
export const badges = ['JS', 'Array.map', 'Array.slice'];

const questionWrapperProps: QuestionWrapperProps<
  (numArr: number[]) => number[][]
> = {
  funcTsTypeStr: `
  (numArr: number[]) => number[][]
  `.trim(),
  title,
  badges,
  testArgs: [
    [[1, 2, 3, 100]],
    [[-1, 2, -3, 100]],
    [[]],
  ],
  idealSolution: function mySolution(numArr) {
    return numArr.map((num, i, arr) => arr.slice(0, i + 1));
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that takes an array of numbers and returns an array of arrays such that each array in returned array
    is the slice of the input array from index <code>0</code> to <code>i + 1</code> (where <code>i</code> is the index of the
    array within the returned array).
  </p>

  <h4>Examples</h4>
  <ol>
    <li>
      <code>mySolution([1, 2, 3, 100])</code> should return
      <pre>{`
[
  [1],
  [1, 2],
  [1, 2, 3],
  [1, 2, 3, 100],
]
      `.trim()}</pre>
    </li>
    <li><code>mySolution([])</code> should return <code>[]</code></li>
  </ol>
</QuestionWrapper>;
