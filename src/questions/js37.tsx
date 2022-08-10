import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Convert decimal number to hexadecimal';
export const badges = ['JS'];

const questionWrapperProps: QuestionWrapperProps<
  (num: number) => string
> = {
  funcTsTypeStr: `
  (num: number) => string
  `.trim(),
  title,
  badges,
  testArgs: [
    [1],
    [2],
    [3],
    [4],
    [5],
    [8],
    [9],
    [10],
    [16],
    [17],
    [255],
    [256],
    [257],
    [50000],
    [65535],
    [65540],
  ],
  idealSolution: function mySolution(num) {
    let hexChars = '0123456789ABCDEF';
    let base = 16;
    let binary = '';
    let nextNum = num;
    while (nextNum > 0) {
      const remainder = nextNum % base;
      binary = `${hexChars.charAt(remainder)}${binary}`;
      nextNum = Math.floor(nextNum / base);
    }
    return binary;
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that will take a normal decimal number (<code>&gt; 0</code>) and returns the hex (base 16) form of that
    number as a string.
  </p>

  <p>
    You may use the following variable in your function
  </p>
  <pre>{`
let hexChars = '0123456789ABCDEF';
  `.trim()}</pre>

  <h4>Examples</h4>
  <ol>
    <li><code>mySolution(1)</code> should return <code>'1'</code></li>
    <li><code>mySolution(2)</code> should return <code>'2'</code></li>
    <li><code>mySolution(5)</code> should return <code>'5'</code></li>
    <li><code>mySolution(10)</code> should return <code>'A'</code></li>
    <li><code>mySolution(15)</code> should return <code>'F'</code></li>
    <li><code>mySolution(16)</code> should return <code>'10'</code></li>
    <li><code>mySolution(255)</code> should return <code>'FF'</code></li>
    <li><code>mySolution(256)</code> should return <code>'100'</code></li>
  </ol>
</QuestionWrapper>;
