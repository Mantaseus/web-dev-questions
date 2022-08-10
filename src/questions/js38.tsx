import { QuestionWrapper, Props as QuestionWrapperProps } from "../components/QuestionWrapper";

export const title = 'Binary addition';
export const badges = ['JS'];

const questionWrapperProps: QuestionWrapperProps<
  (bin1: string, bin2: string) => string
> = {
  funcTsTypeStr: `
  (bin1: string, bin2: string) => string
  `.trim(),
  title,
  badges,
  testArgs: [
    ['101', '101'],
    ['1011101', '101'],
    ['101', '1011101'],
    ['1011101', '1011101'],
  ],
  idealSolution: function mySolution(bin1, bin2) {
    const base = 2;

    const bin1Digits = bin1.split('').map(char => Number(char));
    const bin2Digits = bin2.split('').map(char => Number(char));

    let result = '';
    let carryOver = 0;
    for (let i = 0; i < Math.max(bin1Digits.length, bin2Digits.length); i++) {
      const digitSum = (bin1Digits[i] || 0) + (bin2Digits[i] || 0) + carryOver;
      const sumRemainder = digitSum % base;
      carryOver = Math.floor(digitSum / base);
      result = `${sumRemainder}${result}`
    }

    if (carryOver > 0) {
      result = `${carryOver}${result}`
    }

    return result;
  }
}

export const Question: React.FC = () => <QuestionWrapper {...questionWrapperProps}>
  <p>
    Write a function that will take 2 binary numbers as strings and add them together to return the sum as a
    binary string.
  </p>

  <p>
    <strong>NOTE</strong>: DO NOT convert the binary numbers to decimal, add them and then convert them back into
    binary. Do the summation operation while keeping the numbers in binary form.
  </p>

  <h4>Examples</h4>
  <ol>
    <li><code>mySolution('1', '1')</code> should return <code>'10'</code></li>
    <li><code>mySolution('101', '101')</code> should return <code>'1010'</code></li>
    <li><code>mySolution('1011101', '101')</code> should return <code>'1100010'</code></li>
    <li><code>mySolution('101', '1011101')</code> should return <code>'1100010'</code></li>
  </ol>
</QuestionWrapper>;
