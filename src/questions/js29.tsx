import { Link } from "react-router-dom";
import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Count of characters in string (as array of objects)';
export const badges = ['JS', 'String.split', 'Array.reduce', 'Object'];

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

    return Object.keys(countByChar).map(char => {
      return {
        char,
        count: countByChar[char],
      }
    })
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>This question builds on top of <Link to="/js28">js28</Link></p>
  <p>
    Write a function that takes a string and returns an array of objects. Each object in the array will have the following
    keys and value types
  </p>
  <pre>{`
{
  char: string;
  count: number;
}
  `.trim()}</pre>
  <p>
    The <code>char</code> key's value will contain a distinct character in the string. The <code>count</code> key's value will
    contain the number of times that character (represented by the value in the <code>char</code> key) appeared in the string
  </p>

  <h4>Examples</h4>
  <ol>
    <li>
      <code>mySolution('abbcccdddd')</code> should return
      <pre>{`
[
  { char: 'a', count: 1 },
  { char: 'b', count: 2 },
  { char: 'c', count: 3 },
  { char: 'd', count: 4 },
]
      `.trim()}</pre>
    </li>
    <li><code>mySolution('')</code> should return <code>[]</code></li>
  </ol>
</QuestionWrapper>;
