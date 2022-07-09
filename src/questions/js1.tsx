import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Filter a number out of an array of numbers';
export const badges = ['JS', 'Array.filter'];

const questionWrapperProps: QuestionWrapperProps<(array: number[]) => number[]> = {
  title,
  badges,
  funcArgsDoc: [
    { name: 'array', type: 'number[]' },
  ],
  funcReturnDoc: { type: 'number[]' },
  testArgs: [
    [[1,1,1,1]],
    [[1,1,2,1]],
  ],
  idealSolution: arr => arr.filter(num => num !== 1)
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Create a function that removes all occurances of the number <code>1</code> from an array
    of numbers (passed in as an argument to your function)
  </p>

  <h4>Examples</h4>
  <ol>
    <li>An argument of <code>[1,1,1,1]</code> will return an empty array <code>[]</code> because all elements in the argument array are <code>1</code></li>
    <li>An argument of <code>[1,1,2,1]</code> will return an array like <code>[2]</code> because your function will take out all the <code>1</code> from the original array and leave behind the <code>2</code></li>
  </ol>
</QuestionWrapper>;
