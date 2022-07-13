import equal from 'deep-equal';
import { useEffect, useState } from 'react';

import { useQuestionKey } from './components/hooks';

export type AnyFunc = (...args: any[]) => any;

export type AttemptResult = 'success' | 'fail' | 'error';
export interface QuestionData {
  isCompleted: boolean;
  completedTime: string | null;
  lastAttemptResult: AttemptResult;
  lastAttemptCode: string;
  lastAttemptTime: string;
}

export interface TestData<F extends AnyFunc = AnyFunc> {
  testArgs: Parameters<F>[];
  idealSolution: F;
}

const storageKeySuffix = '_data';

function storeQuestionData(questionKey: string, data: QuestionData) {
  localStorage.setItem(`${questionKey}${storageKeySuffix}`, JSON.stringify(data));
}

export function getQuestionData(questionKey: string) {
  const rawData = localStorage.getItem(`${questionKey}${storageKeySuffix}`);
  return rawData == null
    ? rawData
    : JSON.parse(rawData) as QuestionData;
}

export function useSetupTestFunction<F extends AnyFunc>(questionKey: string, testArgs: Parameters<F>[], idealSolution: F) {
  const [questionData, setQuestionData] = useState(() => getQuestionData(questionKey));

  useEffect(() => {
    (window as any).test = async (func: F) => {
      console.clear();
      console.log(`Testing: ${questionKey}`)

      let succeeded = true;
      let attemptResult: AttemptResult = 'success';

      for (let i = 0; i < testArgs.length; i++) {
        const args = testArgs[i];
        const expected = idealSolution(...args);

        const displayObj = [
          '\nArgs:', ...args.flatMap(arg => ['\n  ', arg]),
          '\nExpected result:', expected,
        ]

        try {
          const result = await func(...args);
          if (equal(result, expected)) {
            console.log(
              `%cTest ${i + 1}/${testArgs.length}: Success`, 'color: #89ffa6',
              ...displayObj,
              '\nYour result:', result,
            )
          } else {
            succeeded = false;
            attemptResult = 'fail';
            console.error(`Test ${i + 1}/${testArgs.length}: Your result did not match expected result`,
              ...displayObj,
              '\nYour result:', result,
            )
          }
        } catch(e) {
          succeeded = false;
          attemptResult = 'error';
          console.error(`Test ${i + 1}/${testArgs.length}: Error occured`,
            ...displayObj,
            '\nError from your function:', e,
          )
        }
      }

      const prevQuestionData = getQuestionData(questionKey);
      const now = new Date().toISOString();
      setQuestionData({
        isCompleted: prevQuestionData?.isCompleted || succeeded,
        completedTime: prevQuestionData?.completedTime
          ? prevQuestionData.completedTime
          : succeeded
            ? now
            : null,
        lastAttemptCode: func.toString(),
        lastAttemptResult: attemptResult,
        lastAttemptTime: now,
      });
    }
    console.log(`${questionKey}: test() method available for use in the console`);

    return () => {
      console.log(`${questionKey}: test() method removed`);
      delete (window as any).test;
    };
  }, [questionKey])

  useEffect(() => {
    if (questionData) {
      storeQuestionData(questionKey, questionData);
    }
  }, [questionData])

  return {
    ...questionData,
    key: questionKey
  };
};
