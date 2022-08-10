import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Convert decimal number to binary';
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
    let base = 2;
    let binary = '';
    let nextNum = num;
    while (nextNum > 0) {
      const remainder = nextNum % base;
      binary = `${remainder}${binary}`;
      nextNum = Math.floor(nextNum / base);
    }
    return binary;
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that will take a normal decimal number (<code>&gt; 0</code>) and returns the binary form of that
    number as a string.
  </p>

  <h4>Examples</h4>
  <ol>
    <li><code>mySolution(1)</code> should return <code>'1'</code></li>
    <li><code>mySolution(2)</code> should return <code>'10'</code></li>
    <li><code>mySolution(3)</code> should return <code>'11'</code></li>
    <li><code>mySolution(4)</code> should return <code>'100'</code></li>
    <li><code>mySolution(5)</code> should return <code>'101'</code></li>
    <li><code>mySolution(10)</code> should return <code>'1010'</code></li>
    <li><code>mySolution(255)</code> should return <code>'11111111'</code></li>
  </ol>
</QuestionWrapper>;
