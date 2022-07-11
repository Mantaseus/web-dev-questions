import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Get value of an arbitrary key from an object';
export const badges = ['JS', 'Object'];

const questionWrapperProps: QuestionWrapperProps<
  (obj: Record<string, unknown>, key: string) => unknown
> = {
  funcTsTypeStr: `
  (obj: Record<string, unknown>, key: string) => unknown
  `.trim(),
  title,
  badges,
  testArgs: [
    [{}, 'id'],
    [{ id: 10, name: 'something' }, 'id'],
    [{ id: 10, name: 'something' }, 'name'],
  ],
  idealSolution: function mySolution(obj, key) {
    return obj[key];
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that takes an object and returns the value of a user specified key (through the <code>key</code>
    argument to your function) from the object
  </p>

  <h4>Examples</h4>
  <ol>
    <li><code>mySolution({'{'} id: 10, someVal: 'abc' {'}'}, 'someVal')</code> should return <code>'abc'</code> because
    that is the value of the key <code>'someVal'</code> that the user wanted to get a value of from the object</li>
  </ol>
</QuestionWrapper>;
