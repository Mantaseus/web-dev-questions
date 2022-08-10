import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Binary addition';
export const badges = ['JS'];

const questionWrapperProps: QuestionWrapperProps<
  (bin: string) => number
> = {
  funcTsTypeStr: `
  (bin: string) => number
  `.trim(),
  title,
  badges,
  testArgs: [
    ['1'],
    ['10'],
    ['11'],
    ['100'],
    ['101'],
    ['1010'],
    ['11110000'],
    ['11001100'],
    ['11111111'],
    ['10101010'],
  ],
  idealSolution: function mySolution(bin) {
    const base = 2;
    return bin
      .split('')
      .map(char => Number(char))
      .reverse()
      .map((digit, i) => digit * Math.pow(base, i))
      .reduce((sum, num) => sum + num);
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that will take a binary string and convert it to a decimal number and return it.
  </p>

  <h4>Examples</h4>
  <ol>
    <li><code>mySolution('1')</code> should return <code>1</code></li>
    <li><code>mySolution('10')</code> should return <code>2</code></li>
    <li><code>mySolution('11')</code> should return <code>3</code></li>
    <li><code>mySolution('101')</code> should return <code>5</code></li>
    <li><code>mySolution('1010')</code> should return <code>10</code></li>
  </ol>
</QuestionWrapper>;
