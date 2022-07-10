export interface Props {
  tsTypeStr: string;
}

export const Instructions: React.FC<Props> = ({ tsTypeStr }) => {
  const reMatch = Array.from(tsTypeStr.matchAll(/\((?<argsStr>.*)\) *=> *(?<returns>.*)$/g))[0]
  const { argsStr = '', returns = '' } = reMatch.groups || {};

  const args = argsStr.split(',')
    .map(str => str.trim()
      .split(':')
      .map(subStr => subStr.trim())
    )
    .map(([name, type]) => ({ name, type }));

  const code = `
/**
${args.map(arg => ` * @param ${arg.name} - ${arg.type}`).join('\n')}
 * @returns ${returns}
 **/
function mySolution(${args.map(arg => arg.name).join(', ')}) {

}
test(mySolution)
  `.trim();

  return (<div className="instructions-container">
    <details>
      <summary><strong>Instructions on writing the code</strong></summary>
      <ol>
        <li>Open your browser console and run the code below</li>
        <li>Copy the following code into the console</li>
        <pre style={{ marginLeft: '1rem' }}>
          {code}
        </pre>
        <li>Run it</li>
        <ul>
          <li>You will notice that it will run some tests and show you info about those tests</li>
        </ul>
        <li>Tweak the code in the console and run it until all the tests succeed</li>
      </ol>
    </details>
  </div>);
}