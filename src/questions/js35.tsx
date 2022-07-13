import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'keyBy: Create an object from an array of objects';
export const badges = ['JS', 'Array.reduce', 'Object'];

const questionWrapperProps: QuestionWrapperProps<
  (objArray: { userId: number, userName: string }[]) => Record<number, { userId: number, userName: string }>
> = {
  funcTsTypeStr: `
  (objArray: { userId: number, userName: string }[]) => Record<number, { userId: number, userName: string }>
  `.trim(),
  title,
  badges,
  testArgs: [
    [[
      { userId: 10, userName: 'John' },
      { userId: 11, userName: 'James' },
      { userId: 34, userName: 'Albert' },
      { userId: 23, userName: 'David' },
      { userId: 55, userName: 'Nicholas' },
    ]],
    [[]],
  ],
  idealSolution: function mySolution(objArray) {
    return objArray.reduce((obj, userObj) => {
      obj[userObj.userId] = userObj;
      return obj;
    }, {} as Record<number, (typeof objArray)[number]>);
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that takes an array of objects with the structure shown below and returns a new object where
    each <code>userId</code> value from the input array is used as a key to the object and values in the object are the
    associated objects from the input array.
  </p>
  <pre>{`
{
  userId: 10, // ID of the user (use this as the key for the new object)
  userName: 'John', // Name of the user
}
  `.trim()}</pre>

  <h4>Examples</h4>
  <ol>
    <li>
      <pre>{`
mySolution([
  userId: 10, userName: 'John',
  userId: 12, userName: 'James',
  userId: 19, userName: 'David',
])
      `.trim()}</pre>
      should return
      <pre>{`
{
  10: { userId: 10, userName: 'John', },
  12: { userId: 12, userName: 'James', },
  19: { userId: 19, userName: 'David', },
}
      `.trim()}</pre>
    </li>
    <li><code>mySolution([])</code> should return <code>{}</code></li>
  </ol>
</QuestionWrapper>;
