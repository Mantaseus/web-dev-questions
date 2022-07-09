import equal from 'deep-equal';
import { useEffect } from 'react';

import { useQuestionKey } from './components/hooks';

type AnyFunc = (...args: any[]) => any;

type AttemptResult = 'success' | 'fail' | 'error';
type QuestionData = {
  isCompleted: boolean;
  completedTime: string | null;
  lastAttemptResult: AttemptResult;
  lastAttemptCode: string;
  lastAttemptTime: string;
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

export function createTestSetupFunc<F extends AnyFunc>(testArgs: Parameters<F>[], idealSolution: F) {
  return {
    idealSolution,
    testArgs,
    useTestSetup: () => {
      const questionKey = useQuestionKey();
      useEffect(() => {
        (window as any).test = async (func: F) => {
          console.clear();

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

          storeQuestionData(questionKey, {
            isCompleted: succeeded,
            completedTime: null,
            lastAttemptCode: func.toString(),
            lastAttemptResult: attemptResult,
            lastAttemptTime: new Date().toISOString(),
          })
        }
      }, [questionKey])
    },
  };
}
