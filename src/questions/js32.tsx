import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Join 2 arrays into an array of objects';
export const badges = ['JS', 'Array.map', 'Object'];

const questionWrapperProps: QuestionWrapperProps<
  (arr1: number[], arr2: string[]) => { arr1Val: number, arr2Val: string }[]
> = {
  funcTsTypeStr: `
  (arr1: number[], arr2: string[]) => { arr1Val: number, arr2Val: string }[]
  `.trim(),
  title,
  badges,
  testArgs: [
    [[10,11,34,23,55], ['John', 'James', 'Albert', 'David', 'Nicholas']],
    [[], []]
  ],
  idealSolution: function mySolution(arr1, arr2) {
    return arr1.map((elem, i) => {
      return {
        arr1Val: elem,
        arr2Val: arr2[i],
      }
    });
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>Write a function that will take 2 arrays and "join" their values together into a single array of objects.
    Both of the arrays have the same length. The objects in the array will look like this:
  </p>
  <pre>{`
{
  arr1Val: // This will have the values from the first array (arr1)
  arr2Val: // This will have the values from the second array (arr2)
}
  `.trim()}</pre>

  <p>Your function will need to create an object like the one described above for each index in the arrays and create a
    new array with the objects for each index
  </p>

  <h4>Examples</h4>
  <ol>
    <li>
      <code>mySolution([1, 2, 3], ['John', 'James', 'David'])</code> should return
      <pre>{`
[
  { arr1Val: 1, arr2Val: 'John' }
  { arr1Val: 2, arr2Val: 'James' }
  { arr1Val: 3, arr2Val: 'David' }
]
      `.trim()}</pre>
    </li>
    <li><code>mySolution([], [])</code> should return <code>[]</code></li>
  </ol>
</QuestionWrapper>;
