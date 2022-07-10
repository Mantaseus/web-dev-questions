import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'All words of a string';
export const badges = ['JS', 'String.split'];

const questionWrapperProps: QuestionWrapperProps<(str: string) => string[]> = {
  title,
  badges,
  funcArgsDoc: [
    { name: 'str', type: 'string' },
  ],
  funcReturnDoc: { type: 'string[]' },
  testArgs: [
    ['oh, hello there, my friend'],
    ['how ARE you? Good?'],
    [''],
  ],
  idealSolution: function mySolution(str) {
    return str.split(' ');
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that takes a string and returns an array of all the words in it.
  </p>

  <h4>Examples</h4>
  <ol>
    <li>Calling your function with <code>mySolution('oh, hello there')</code> should
    return <code>['oh,', 'hello', 'there']</code></li>
  </ol>
</QuestionWrapper>;
