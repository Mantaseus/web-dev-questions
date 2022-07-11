import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Filter objects from array';
export const badges = ['JS', 'Array.filter', 'Object'];

const questionWrapperProps: QuestionWrapperProps<
  (objArr: { id: number, name?: string }[]) => { id: number, name?: string }[]
> = {
  funcTsTypeStr: `
  (objArr: { id: number, name?: string }[]) => { id: number, name?: string }[]
  `.trim(),
  title,
  badges,
  testArgs: [
    [[]],
    [[{ id: 1, name: "James" }, { id: 2 }, { id: 3, name: "John" }]],
  ],
  idealSolution: function mySolution(objArr) {
    return objArr.filter(obj => !!obj.name);
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that takes an array of objects. Each object in the array will have <code>id</code> key in it. But some
    objects in the array may have a <code>name</code> key and some may not. Your function should filter out the objects
    from the array that do not have a <code>name</code> key
  </p>

  <h4>Examples</h4>
  <ol>
    <li>
      <code>mySolution({'[ { id: 1, name: "James" }, { id: 2 }, { id: 3, name: "John" } ]'})</code> should return
      <code>{'[ { id: 1, name: "James" }, { id: 3, name: "John" } ]'}</code>. Notice that the <code>{'{ id: 2 }'}</code>
      object has been removed from the resulting string
    </li>
  </ol>
</QuestionWrapper>;
