import { Link } from "react-router-dom";
import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Count characters in a string and order them';
export const badges = ['JS', 'String.split', 'Array.reduce', 'Object', 'Object.keys', 'Array.map', 'Array.sort'];

const questionWrapperProps: QuestionWrapperProps<
  (str: string) => { char: string, count: number }[]
> = {
  funcTsTypeStr: `
  (str: string) => { char: string, count: number }[]
  `.trim(),
  title,
  badges,
  testArgs: [
    ['obfuscation'],
    ['gesundheit'],
    ['a test with multiple spaces and making a full sentence'],
    [''],
  ],
  idealSolution: function mySolution(str) {
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
      .sort((a, b) => b.count - a.count);
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>This question builds on top of <Link to="/js29">js29</Link>. Use your code from that question as your starting point.</p>
  <p>
    This question assumes that your function can already take a string and create an array of objects with <code>char</code> and
    <code>count</code> keys in each object.
  </p>
  <p>
    Your function should now sort your array of objects by the <code>count</code> value in a desceding order.
  </p>

  <h4>Examples</h4>
  <ol>
    <li>
      <code>mySolution('abbcccdddd')</code> should return
      <pre>{`
[
  { char: 'd', count: 4 },
  { char: 'c', count: 3 },
  { char: 'b', count: 2 },
  { char: 'a', count: 1 },
]
      `.trim()}</pre>
    </li>
    <li><code>mySolution('')</code> should return <code>[]</code></li>
  </ol>
</QuestionWrapper>;
