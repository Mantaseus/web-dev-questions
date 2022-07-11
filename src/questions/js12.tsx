import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Hide a password';
export const badges = ['JS', 'String.repeat'];

const questionWrapperProps: QuestionWrapperProps<
  (strToHide: string) => string
> = {
  funcTsTypeStr: `
  (strToHide: string) => string
  `.trim(),
  title,
  badges,
  testArgs: [
    ['superSecretPassword'],
    [''],
  ],
  idealSolution: function mySolution(strToHide) {
    return '*'.repeat(strToHide.length);
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that takes a string and returns a new string with all the characters in the string replaced
    with a <code>*</code> character
  </p>

  <h4>Examples</h4>
  <ol>
    <li><code>mySolution('mypassword')</code> should return <code>'**********'</code></li>
  </ol>
</QuestionWrapper>;
