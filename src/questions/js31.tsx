import { Link } from "react-router-dom";
import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Most frequent characters in a string';
export const badges = ['JS', 'String.split', 'Array.reduce', 'Object', 'Object.keys', 'Array.map', 'Array.sort', 'Array.slice'];

const questionWrapperProps: QuestionWrapperProps<
  (str: string, topCount: number) => { char: string, count: number }[]
> = {
  funcTsTypeStr: `
  (str: string) => { char: string, count: number }[]
  `.trim(),
  title,
  badges,
  testArgs: [
    ['obfuscation', 5],
    ['gesundheit', 5],
    ['a test with multiple spaces and making a full sentence', 5],
    ['', 5],
  ],
  idealSolution: function mySolution(str, topCount) {
    const countByChar = str.split('')
      .reduce((obj, char) => {
        obj[char] = (obj[char] || 0) + 1;
        return obj;
      }, {} as Record<string, number>);

    return Object.keys(countByChar)
      .map(char => {
        return {
          char,
          count: countByChar[char],
        }
      })
      .sort((a, b) => b.count - a.count)
      .slice(0, topCount);
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>This question builds on top of <Link to="/js30">js30</Link>. Use your code from that question as your starting point.</p>
  <p>
    This question assumes that your function can already take a string and create an array of objects with <code>char</code> and
    <code>count</code> keys in each object. It is also assumed that the array of objects is sorted by <code>count</code> in descending
    order.
  </p>
  <p>
    Your function should now be able to take a second argument, <code>topCount</code>, which will be a number telling your function
    to return only the top <code>topCount</code> number of elements from the array
  </p>

  <h4>Examples</h4>
  <ol>
    <li>
      <code>mySolution('abbcccdddd', 2)</code> should return
      <pre>{`
[
  { char: 'd', count: 4 },
  { char: 'c', count: 3 },
]
      `.trim()}</pre>
    </li>
    <li><code>mySolution('')</code> should return <code>[]</code></li>
  </ol>
</QuestionWrapper>;
