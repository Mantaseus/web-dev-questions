import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Get keys from an object with truthy values';
export const badges = ['JS', 'Object.keys', 'Array.map', 'Array.filter'];

const questionWrapperProps: QuestionWrapperProps<
  (obj: Record<number, string | undefined>) => number[]
> = {
  funcTsTypeStr: `
  (obj: Record<number, string | undefined>) => number[]
  `.trim(),
  title,
  badges,
  testArgs: [
    [{}],
    [{ 1: 'John', 2: undefined, 3: 'James'}]
  ],
  idealSolution: function mySolution(obj) {
    return Object.keys(obj)
      .map(Number)
      .filter(key => !!obj[key]);
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that takes an object and returns all the keys in that object that have a truthy value associated
    with them in the object.
  </p>
  <p>
    <strong>Note:</strong> <code>Object.keys()</code> returns keys as strings even though they are defined as numbers
    in the original object. You will need to convert the keys returned by <code>Object.keys()</code> to numbers before
    you can use them.
  </p>

  <h4>Examples</h4>
  <ol>
    <li>
      <code>mySolution({'{ 1: "John", 2: undefined, 3: "James"}'})</code> should return
      <code>{'[1, 3]'}</code> because the value for key <code>2</code> is falsey (<code>undefined</code> is false)
      while the values for key <code>1</code> and <code>3</code> have a valid string.
    </li>
  </ol>
</QuestionWrapper>;
