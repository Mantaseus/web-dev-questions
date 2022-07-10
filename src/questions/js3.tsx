import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Filter an array of strings';
export const badges = ['JS', 'Array.filter'];

const questionWrapperProps: QuestionWrapperProps<(arrOfStrs: string[]) => string[]> = {
  title,
  badges,
  funcArgsDoc: [
    { name: 'arrOfStrs', type: 'string[]' },
  ],
  funcReturnDoc: { type: 'string[]' },
  testArgs: [
    [['abc', 'cba']],
    [['abc', 'xyzabc', 'xaybzc', 'xyz']],
    [[]],
  ],
  idealSolution: function mySolution(arrOfStrs) {
    return arrOfStrs.filter(str => !str.includes('abc'));
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that takes an array of strings and removes any strings from that array that have the letters
    <code>abc</code> together in it.
  </p>

  <h4>Examples</h4>
  <ol>
    <li>Calling your function with <code>mySolution(['abc', 'cba', 'xyz'])</code> should
    return an array like <code>['cba', 'xyz']</code></li>
  </ol>
</QuestionWrapper>;
