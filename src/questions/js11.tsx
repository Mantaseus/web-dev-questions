import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Repeat a character "n" number of times';
export const badges = ['JS', 'String.repeat'];

const questionWrapperProps: QuestionWrapperProps<
  (char: string, count: number) => string
> = {
  funcTsTypeStr: `
  (char: string) => string
  `.trim(),
  title,
  badges,
  testArgs: [
    ['*', 0],
    ['*', 1],
    ['*', 5],
    ['', 5],
    ['ab', 5],
  ],
  idealSolution: function mySolution(char, count) {
    return char.repeat(count);
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that takes a string <code>char</code> and returns a new string with the <code>char</code>
    repeated <code>count</code> number of times
  </p>

  <h4>Examples</h4>
  <ol>
    <li><code>mySolution('*', 5)</code> should return <code>'*****'</code></li>
    <li><code>mySolution('ab', 3)</code> should return <code>'ababab'</code></li>
  </ol>
</QuestionWrapper>;
