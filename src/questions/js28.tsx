import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Count of characters in string';
export const badges = ['JS', 'String.split', 'Array.reduce', 'Object'];

const questionWrapperProps: QuestionWrapperProps<
  (str: string) => Record<string, number>
> = {
  funcTsTypeStr: `
  (obj: string) => Record<string, number>
  `.trim(),
  title,
  badges,
  testArgs: [
    ['obfuscation'],
    ['gesundheit'],
    ['a test with multiple spaces and making a full sentence'],
    [''],
  ],
  idealSolution: function mySolution(str) {
    return str.split('')
      .reduce((obj, char) => {
        obj[char] = (obj[char] || 0) + 1;
        return obj;
      }, {} as Record<string, number>)
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that takes a string and returns an object where each distinct character in the input string is
    used as a key in the object and the values are the number of times that distinct character appears in the string
  </p>

  <h4>Examples</h4>
  <ol>
    <li>
      <code>mySolution('abbcccdddd')</code> should return
      <pre>{`
{
  a: 1,
  b: 2,
  c: 3,
  d: 4,
}
      `.trim()}</pre>
    </li>
    <li><code>mySolution('')</code> should return <code>{}</code></li>
  </ol>
</QuestionWrapper>;
