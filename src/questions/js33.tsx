import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Get value from arr2 based on index of element in arr1';
export const badges = ['JS', 'Array.indexOf', 'Object'];

const questionWrapperProps: QuestionWrapperProps<
  (idArray: number[], nameArray: string[], idToFindNameFor: number) => string
> = {
  funcTsTypeStr: `
  (idArray: number[], nameArray: string[], idToFindNameFor: number) => string
  `.trim(),
  title,
  badges,
  testArgs: [
    [[10,11,34,23,55], ['John', 'James', 'Albert', 'David', 'Nicholas'], 23],
    [[], [], 3]
  ],
  idealSolution: function mySolution(idArray, nameArray, idToFindNameFor) {
    const idIndex = idArray.indexOf(idToFindNameFor);
    return nameArray[idIndex];
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that will take 2 arrays (as the first 2 arguments) and a ID number (as the third argument). Imagine that
    the first array contains IDs for users and the second array contains the names of the users. The 2 arrays have
    <strong>equal length</strong> and there are <strong>no repeated IDs</strong> in the array of IDs (1st array)
  </p>
  <p>
    The index of the user ID in the first array is the same as the ID of the user name in the second array.
  </p>
  <p>
    Your function needs to return the name of the user for the ID that is given to your function as the 3rd argument
  </p>

  <h4>Examples</h4>
  <ol>
    <li><code>mySolution([11, 2, 9], ['John', 'James', 'David'], 2)</code> should return <code>James</code></li>
    <li><code>mySolution([11, 2, 9], ['John', 'James', 'David'], 9)</code> should return <code>David</code></li>
    <li><code>mySolution([], [], 2)</code> should return <code>undefined</code></li>
  </ol>
</QuestionWrapper>;
