import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Is a value truthy';
export const badges = ['JS'];

const questionWrapperProps: QuestionWrapperProps<
  (value: unknown) => boolean
> = {
  funcTsTypeStr: `
  (value: unknown) => boolean
  `.trim(),
  title,
  badges,
  testArgs: [
    [{}],
    [{ a: 1 }],
    [[]],
    [[1, 2]],
    [undefined],
    [null],
    [0],
    [1],
    [''],
    ['abc'],
  ],
  idealSolution: function mySolution(value) {
    return !!value;
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that takes any value and returns true if it is truthy and false if it is not truthy
  </p>

  <h4>Examples</h4>
  <ol>
    <li><code>mySolution(0)</code> should return <code>false</code></li>
    <li><code>mySolution('')</code> should return <code>false</code></li>
    <li><code>mySolution(1)</code> should return <code>true</code></li>
    <li><code>mySolution('abc')</code> should return <code>true</code></li>
  </ol>
</QuestionWrapper>;
