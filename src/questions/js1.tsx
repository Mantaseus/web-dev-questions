import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Filter a number out of an array of numbers';
export const badges = ['JS', 'Array.filter'];

const questionWrapperProps: QuestionWrapperProps<
  (array: number[]) => number[]
> = {
  // I know the following looks a bit dirty but I did it this way because it lets me just copy paste the
  // type definition from `QuestionWrapperProps` directly without having to think about it too much which
  // will help reduce human error in the long run
  funcTsTypeStr: `
  (array: number[]) => number[]
  `.trim(),
  title,
  badges,
  testArgs: [
    [[1,1,1,1]],
    [[1,1,2,1]],
  ],
  idealSolution: function mySolution(array) {
    return array.filter(num => num !== 1);
  },
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
