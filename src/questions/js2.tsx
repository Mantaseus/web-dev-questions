import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Create an object';
export const badges = ['JS', 'Object'];

const questionWrapperProps: QuestionWrapperProps<(id: number, name: string) => { id: number, name: string }> = {
  title,
  badges,
  funcArgsDoc: [
    { name: 'id', type: 'number' },
    { name: 'name', type: 'string' },
  ],
  funcReturnDoc: { type: '{ id: number, name: string }' },
  testArgs: [
    [101, 'John Doe'],
  ],
  idealSolution: function mySolution(id, name) {
    return { id, name };
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Create a function that takes 2 arguments: <code>id</code> (number), <code>name</code> (string).
    It should return an object with the following keys and values
  </p>
  <ul>
    <li><code>id</code> key will have an associated value of the <code>id</code> argument that was given to the function</li>
    <li><code>name</code> key will have an associated value of the <code>name</code> argument that was given to the function</li>
  </ul>

  <h4>Examples</h4>
  <ol>
    <li>Calling your function with <code>mySolution(101, 'John Doe')</code> should return an object like the following</li>
    <pre>{`
{
  id: 101,
  name: 'John Doe',
}
    `.trim()}</pre>
  </ol>
</QuestionWrapper>;
