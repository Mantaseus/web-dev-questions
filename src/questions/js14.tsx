import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Get value of "id" from an object';
export const badges = ['JS', 'Object'];

const questionWrapperProps: QuestionWrapperProps<
  (obj: Record<string, unknown>) => unknown
> = {
  funcTsTypeStr: `
  (obj: Record<string, unknown>) => unknown
  `.trim(),
  title,
  badges,
  testArgs: [
    [{}],
    [{ id: 10 }],
  ],
  idealSolution: function mySolution(obj) {
    return obj.id;
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that takes an object and returns the value of the key <code>id</code> from
    that object.
  </p>

  <h4>Examples</h4>
  <ol>
    <li><code>mySolution({'{'} id: 10, someVal: 'abc' {'}'})</code> should return <code>10</code> because that is the
    value of the key <code>id</code> in the object</li>
  </ol>
</QuestionWrapper>;
