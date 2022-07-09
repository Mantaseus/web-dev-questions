import equal from 'deep-equal';

type AnyFunc = (...args: any[]) => any;

export function createSetupTest<F extends AnyFunc>(testArgs: Parameters<F>[], idealSolution: F) {
  const setupTest = () => {
    (window as any).test = async (func: F) => {
      console.clear();
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
            console.error(`Test ${i + 1}/${testArgs.length}: Your result did not match expected result`,
              ...displayObj,
              '\nYour result:', result,
            )
          }
        } catch(e) {
          console.error(`Test ${i + 1}/${testArgs.length}: Error occured`,
            ...displayObj,
            '\nError from your function:', e,
          )
        }
      }
    }
  }

  setupTest.idealSolution = idealSolution;
  setupTest.testArgs = testArgs;
  console.log(setupTest)

  return setupTest;
}

