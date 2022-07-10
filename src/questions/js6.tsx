import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Capitalize a string';
export const badges = ['JS', 'String.slice'];

const questionWrapperProps: QuestionWrapperProps<
  (str: string) => string
> = {
  funcTsTypeStr: `
  (str: string) => string
  `.trim(),
  title,
  badges,
  testArgs: [
    ['hello'],
    ['World'],
    [''],
  ],
  idealSolution: function mySolution(str) {
    return str.length
      ? `${str[0].toUpperCase()}${str.slice(1)}`
      : '';
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that takes a string (just a single word) and capitalizes it (i.e. makes the first
    letter of the word capital)
  </p>
  <p>
    If the input string is already empty then just return an empty string
  </p>

  <h4>Examples</h4>
  <ol>
    <li>Calling your function with <code>mySolution('abc')</code> should return <code>'Abc'</code></li>
    <li>Calling your function with <code>mySolution('Abc')</code> should return <code>'Abc'</code></li>
    <li>Calling your function with <code>mySolution('Abc xyz')</code> should return <code>'Abc xyz'</code></li>
    <li>Calling your function with <code>mySolution('')</code> should return <code>''</code></li>
  </ol>
</QuestionWrapper>;
