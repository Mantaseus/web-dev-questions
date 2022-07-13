import { Link } from "react-router-dom";
import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Join 2 arrays into an object';
export const badges = ['JS', 'Array.reduce', 'Object'];

const questionWrapperProps: QuestionWrapperProps<
  (arr1: number[], arr2: string[]) => Record<number, string>
> = {
  funcTsTypeStr: `
  (arr1: number[], arr2: string[]) => Record<number, string>
  `.trim(),
  title,
  badges,
  testArgs: [
    [[10,11,34,23,55], ['John', 'James', 'Albert', 'David', 'Nicholas']],
    [[], []]
  ],
  idealSolution: function mySolution(arr1, arr2) {
    return arr1.reduce((obj, elem, i) => {
      obj[elem] = arr2[i];
      return obj;
    }, {} as Record<number, string>);
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    In this question, we use the same premise as <Link to="/js33">js33</Link>. This time we will join the 2 arrays into
    an object.
  </p>
  <p>
    Write a function that will take 2 arrays and "join" their values together into a single object.
    The elements in the first array (ID array) will be used as the keys to the object while the elements in the second
    array (name array) will be used as the values.
  </p>

  <p>
    <strong>Aside</strong>:
    The use of <code>Array.indexOf</code> in <Link to="/js33">js33</Link> is alright if we only need to get a user's
    name only once. But it is inefficient if we have to run it multiple times because we have to waste CPU time on
    making <code>Array.indexOf</code> iterate over the whole array and search for our desired element inside of it.
    In that case, making an object is a lot more efficient because we can then just
    do <code>obj[idToFindNameFor]</code> to get the name for a user and that will be it.
  </p>

  <h4>Examples</h4>
  <ol>
    <li>
      <code>mySolution([10, 12, 19], ['John', 'James', 'David'])</code> should return
      <pre>{`
{
  10: 'John',
  12: 'James',
  19: 'David',
}
      `.trim()}</pre>
    </li>
    <li><code>mySolution([], [])</code> should return <code>{}</code></li>
  </ol>
</QuestionWrapper>;
