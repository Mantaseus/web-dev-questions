import { Link } from "react-router-dom";
import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Running average of an array';
export const badges = ['JS', 'Array.map', 'Array.slice', 'Array.reduce'];

const questionWrapperProps: QuestionWrapperProps<
  (numArr: number[], avgLength: number) => number[]
> = {
  funcTsTypeStr: `
  (numArr: number[], avgLength: number) => number[]
  `.trim(),
  title,
  badges,
  testArgs: [
    [[1, 2, 3, 10, 15, 5], 3],
    [[1, 2, 3, 100, 98, 106, 125, 88, 89, 93, 95, 92], 5],
    [[-1, -2, -3, 10, 26, 52, 64, 100, 77, 89], 5],
    [[], 5],
  ],
  idealSolution: function mySolution(numArr, avgLength) {
    return numArr.map((num, i, arr) => {
      const endIndex = i + 1;
      const startIndex = Math.max(0, endIndex - avgLength);
      const slice = arr.slice(startIndex, endIndex);
      const sum = slice.reduce((sum, num) => sum + num);
      return sum / slice.length;
    });
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    This question builds on top of <Link to="/js26">js26</Link>. Your function in this question should take the average
    of every slice (which you practiced in <Link to="/js24">js24</Link>) and return the average value in the returned array.
  </p>
  <p>
    <strong>Aside</strong>: You have essentially calculated the <a href="https://en.wikipedia.org/wiki/Moving_average">Running average</a> of
    the array which is a simple and effective way to implement a low-pass filter on a set of data. It essentially makes your data "smoother"
    and can be useful in many applications especially when working with sensors. If you make <code>avgLength</code> higher then your data
    will become even smoother.
  </p>

  <h4>Examples</h4>
  <ol>
    <li>
      <code>mySolution([1, 2, 3, 10, 15, 5], 3)</code> should return
      <pre>{`
[
  1,
  1.5,
  2,
  5,
  9.333333333333334,
  10
]
      `.trim()}</pre>
    </li>
    <li><code>mySolution([])</code> should return <code>[]</code></li>
  </ol>
</QuestionWrapper>;
