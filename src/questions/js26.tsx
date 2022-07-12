import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Array of arrays from array (limited length)';
export const badges = ['JS', 'Array.map', 'Array.slice'];

const questionWrapperProps: QuestionWrapperProps<
  (numArr: number[], maxLength: number) => number[][]
> = {
  funcTsTypeStr: `
  (numArr: number[], maxLength: number) => number[][]
  `.trim(),
  title,
  badges,
  testArgs: [
    [[1, 2, 3, 100, 98, 106, 125, 88, 89, 93, 95, 92], 5],
    [[-1, -2, -3, 10, 26, 52, 64, 100, 77, 89], 5],
    [[], 5],
  ],
  idealSolution: function mySolution(numArr, maxLength) {
    const indexOffset = maxLength - 1;

    return numArr.map((num, i, arr) => {
      const startIndex = Math.max(0, i - indexOffset);
      const endIndex = i + 1;
      return arr.slice(startIndex, endIndex);
    });
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that takes an array of numbers and returns an array of arrays such that each array in the returned array
    is a slice of the input array with a specific length (provided by the user to your function). We want each slice to
    have a specific max length and we want it to contain elements from the higher indexes of the input array.
  </p>

  <h4>Examples</h4>
  <ol>
    <li>
      <code>mySolution([1, 2, 3, 10, 15, 5], 3)</code> should return
      <pre>{`
[
  [1],
  [1, 2],
  [1, 2, 3],
  [2, 3, 10],
  [3, 10, 15],
  [10, 15, 5],
]
      `.trim()}</pre>
    </li>
    <li><code>mySolution([])</code> should return <code>[]</code></li>
  </ol>

  <details className="hint">
    <summary><strong>Hint</strong></summary>
    <p>
      The starting position of the slice should be <code>0</code> if <code>(i - (maxLength - 1)) &lt; 0</code> (where <code>i</code>
      is the index of the array within the returned array). Otherwise it should be <code>(i - (maxLength - 1))</code>.
    </p>
    <p>
      The ending position of the slice is <code>i + 1</code> (where <code>i</code> is the index of the
      array within the returned array).
    </p>
  </details>
</QuestionWrapper>;
