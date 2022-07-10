import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Uppercase every string in an array';
export const badges = ['JS', 'Array.map', 'String.toUpperCase'];

const questionWrapperProps: QuestionWrapperProps<
  (strArray: string[]) => string[]
> = {
  funcTsTypeStr: `
  (strArray: string[]) => string[]
  `.trim(),
  title,
  badges,
  testArgs: [
    [['make', 'ME', 'upper case']],
    [['']],
  ],
  idealSolution: function mySolution(strArray) {
    return strArray.map(str => str.toUpperCase());
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that takes an array of strings and returns a new array of strings where all
    of the original strings have been converted to uppercase
  </p>

  <h4>Examples</h4>
  <ol>
    <li>Calling your function with <code>mySolution('a', 'BC', 'de Fg')</code> should
    return <code>['A', 'BC', 'DE F G']</code></li>
  </ol>
</QuestionWrapper>;
