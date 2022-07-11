import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Filter objects from array and map names';
export const badges = ['JS', 'Array.filter', 'Object', 'Array.map'];

const questionWrapperProps: QuestionWrapperProps<
  (objArr: { id: number, name?: string }[]) => string[]
> = {
  funcTsTypeStr: `
  (objArr: { id: number, name?: string }[]) => string[]
  `.trim(),
  title,
  badges,
  testArgs: [
    [[]],
    [[{ id: 1, name: "James" }, { id: 2 }, { id: 30, name: "John" }]],
  ],
  idealSolution: function mySolution(objArr) {
    return objArr.filter(obj => !!obj.name)
      .map(obj => obj.name!);
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that takes an array of objects. Each object in the array will have <code>id</code> key in it. But some
    objects in the array may have a <code>name</code> key and some may not. Your function should filter out the objects
    from the array that do not have a <code>name</code> key
  </p>
  <p>
    Once you have filtered the array, extract the value of the <code>name</code> key from each of the objects in the
    filtered array and return them in a new array.
  </p>

  <h4>Examples</h4>
  <ol>
    <li>
      <code>mySolution({'[ { id: 1, name: "James" }, { id: 2 }, { id: 3, name: "John" } ]'})</code> should return
      <code>{'["James", "John"]'}</code>.
    </li>
  </ol>
</QuestionWrapper>;
