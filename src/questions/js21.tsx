import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Get values from an object with truthy values';
export const badges = ['JS', 'Object.values', 'Array.filter'];

const questionWrapperProps: QuestionWrapperProps<
  (obj: Record<number, string | undefined>) => string[]
> = {
  funcTsTypeStr: `
  (obj: Record<number, string | undefined>) => string[]
  `.trim(),
  title,
  badges,
  testArgs: [
    [{}],
    [{ 1: 'John', 2: undefined, 3: 'James'}]
  ],
  idealSolution: function mySolution(obj) {
    return Object.values(obj)
      .filter(val => !!val) as string[];
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that takes an object and returns all the values in that object that have are truthy
  </p>

  <h4>Examples</h4>
  <ol>
    <li>
      <code>mySolution({'{ 1: "John", 2: undefined, 3: "James"}'})</code> should return <code>{'["John", "James"]'}</code>
    </li>
  </ol>
</QuestionWrapper>;
